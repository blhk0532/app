<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Merinfo;
use App\Models\MerinfoData;
use DateTime;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class MerinfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Merinfo::query();

        if ($request->has('type')) {
            $query->where('type', $request->type);
        }

        if ($request->has('gender')) {
            $query->where('gender', $request->gender);
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('givenNameOrFirstName', 'like', "%{$search}%")
                    ->orWhere('personalNumber', 'like', "%{$search}%");
            });
        }

        $perPage = min($request->input('per_page', 25), 100);
        $records = $query->paginate($perPage);

        return response()->json($records);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'type' => 'required|string',
            'title' => 'nullable|string',
            'short_uuid' => 'required|string|unique:merinfos,short_uuid',
            'name' => 'required|string',
            'givenNameOrFirstName' => 'required|string',
            'personalNumber' => 'required|string',
            'pnr' => 'nullable|array',
            'address' => 'nullable|array',
            'gender' => 'required|string|in:male,female,other',
            'is_celebrity' => 'boolean',
            'has_company_engagement' => 'boolean',
            'number_plus_count' => 'integer',
            'phone_number' => 'nullable|array',
            'url' => 'required|string',
            'same_address_url' => 'nullable|string',
        ]);

        $record = Merinfo::create($validated);

        return response()->json([
            'message' => 'Record created successfully',
            'data' => $record,
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        $record = Merinfo::findOrFail($id);

        return response()->json(['data' => $record]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $record = Merinfo::findOrFail($id);

        $validated = $request->validate([
            'type' => 'sometimes|string',
            'title' => 'nullable|string',
            'short_uuid' => 'sometimes|string|unique:merinfos,short_uuid,'.$id,
            'name' => 'sometimes|string',
            'givenNameOrFirstName' => 'sometimes|string',
            'personalNumber' => 'sometimes|string',
            'pnr' => 'nullable|array',
            'address' => 'nullable|array',
            'gender' => 'sometimes|string|in:male,female,other',
            'is_celebrity' => 'boolean',
            'has_company_engagement' => 'boolean',
            'number_plus_count' => 'integer',
            'phone_number' => 'nullable|array',
            'url' => 'sometimes|string',
            'same_address_url' => 'nullable|string',
        ]);

        $record->update($validated);

        return response()->json([
            'message' => 'Record updated successfully',
            'data' => $record,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        $record = Merinfo::findOrFail($id);
        $record->delete();

        return response()->json(['message' => 'Record deleted successfully']);
    }

    /**
     * Bulk insert/update records from Merinfo API format.
     */
    public function bulkStore(Request $request): JsonResponse
    {
        Log::info('MerinfoController bulkStore called', [
            'ip' => $request->ip(),
            'user_agent' => $request->header('User-Agent'),
        ]);

        $items = $this->extractBulkItems($request);

        Log::info('MerinfoController extractBulkItems result', [
            'items_count' => count($items),
            'first_item' => $items[0] ?? null,
        ]);

        $validated = Validator::make([
            'items' => $items,
        ], [
            'items' => 'required|array|min:1',
            'items.*.short_uuid' => 'nullable|string',
            'items.*.type' => 'nullable|string',
            'items.*.title' => 'nullable|string',
            'items.*.name' => 'nullable|string',
            'items.*.givenNameOrFirstName' => 'nullable|string',
            'items.*.personalNumber' => 'nullable|string',
            'items.*.pnr' => 'nullable|array',
            'items.*.address' => 'nullable|array',
            'items.*.gender' => 'nullable|string',
            'items.*.is_celebrity' => 'nullable|boolean',
            'items.*.has_company_engagement' => 'nullable|boolean',
            'items.*.number_plus_count' => 'nullable|integer',
            'items.*.phone_number' => 'nullable|array',
            'items.*.url' => 'nullable|string',
            'items.*.same_address_url' => 'nullable|string',
            'items.*.age' => 'nullable|integer',
            'items.*.personnamn' => 'nullable|string',
            'items.*.gatuadress' => 'nullable|string',
            'items.*.postnummer' => 'nullable|string',
            'items.*.postort' => 'nullable|string',
            'items.*.telefon' => 'nullable|string',
            'items.*.telefonnummer' => 'nullable|string',
            'items.*.karta' => 'nullable|string',
            'items.*.bostadstyp' => 'nullable|string',
            'items.*.bostadspris' => 'nullable|string',
            'items.*.is_active' => 'nullable|boolean',
            'items.*.is_telefon' => 'nullable|boolean',
            'items.*.is_ratsit' => 'nullable|boolean',
            'items.*.is_hus' => 'nullable|boolean',
            'items.*.merinfo_personer_total' => 'nullable|integer',
            'items.*.merinfo_foretag_total' => 'nullable|integer',
            'items.*.merinfo_personer_count' => 'nullable|integer',
            'items.*.merinfo_personer_queue' => 'nullable|integer',
        ])->validate();

        Log::info('MerinfoController validation passed', [
            'items_count' => count($validated['items']),
        ]);

        $created = 0;
        $updated = 0;
        $failed = 0;
        $errors = [];
        $merinfoDataCreated = 0;
        $merinfoDataUpdated = 0;
        $swedenPersonerCreated = 0;
        $swedenPersonerUpdated = 0;

        foreach ($validated['items'] as $itemIndex => $itemData) {
            Log::info('MerinfoController foreach item', [
                'item_index' => $itemIndex,
                'item_data' => json_encode($itemData),
                'has_is_hus' => array_key_exists('is_hus', $itemData),
                'is_hus_value' => $itemData['is_hus'] ?? 'NOT_SET',
            ]);

            try {
                $record = Merinfo::updateOrCreate(
                    ['short_uuid' => $itemData['short_uuid']],
                    [
                        'type' => $itemData['type'] ?? null,
                        'title' => $itemData['title'] ?? null,
                        'name' => $itemData['name'] ?? null,
                        'givenNameOrFirstName' => $itemData['givenNameOrFirstName'] ?? null,
                        'personalNumber' => $itemData['personalNumber'] ?? null,
                        'pnr' => $itemData['pnr'] ?? null,
                        'address' => $itemData['address'] ?? null,
                        'gender' => $itemData['gender'] ?? null,
                        'is_celebrity' => $itemData['is_celebrity'] ?? false,
                        'has_company_engagement' => $itemData['has_company_engagement'] ?? false,
                        'number_plus_count' => $itemData['number_plus_count'] ?? 0,
                        'phone_number' => $itemData['phone_number'] ?? null,
                        'url' => $itemData['url'] ?? null,
                        'same_address_url' => $itemData['same_address_url'] ?? null,
                    ]
                );

                $record->wasRecentlyCreated ? $created++ : $updated++;

                $address = $itemData['address'] ?? [];
                $street = is_array($address) && isset($address[0]['street']) ? $address[0]['street'] : ($itemData['gatuadress'] ?? null);
                $zipCode = is_array($address) && isset($address[0]['zip_code']) ? $address[0]['zip_code'] : ($itemData['postnummer'] ?? null);
                $city = is_array($address) && isset($address[0]['city']) ? $address[0]['city'] : ($itemData['postort'] ?? null);
                $phoneNumbers = $itemData['phone_number'] ?? [];
                $phoneRaw = is_array($phoneNumbers) && isset($phoneNumbers[0]['raw']) ? $phoneNumbers[0]['raw'] : ($itemData['telefon'] ?? null);

                $age = $itemData['age'] ?? null;
                $personalNumber = $itemData['personalNumber'] ?? null;
                if (! $age && $personalNumber) {
                    $pnr = preg_replace('/[^0-9]/', '', $personalNumber);
                    if (strlen($pnr) >= 8) {
                        $birthYear = (int) substr($pnr, 0, 4);
                        $birthMonth = (int) substr($pnr, 4, 2);
                        $birthDay = (int) substr($pnr, 6, 2);
                        try {
                            $birthDate = new DateTime("$birthYear-$birthMonth-$birthDay");
                            $today = new DateTime('today');
                            $age = $birthDate->diff($today)->y;
                        } catch (Exception $e) {
                            $age = null;
                        }
                    }
                }

                if ($street) {
                    $isTelefon = isset($itemData['is_telefon']) ? (bool) $itemData['is_telefon'] : ! empty($phoneRaw);
                    $isHus = isset($itemData['is_hus']) ? (bool) $itemData['is_hus'] : false;

                    Log::info('MerinfoController saving to merinfo_data', [
                        'item_index' => $itemIndex,
                        'short_uuid' => $itemData['short_uuid'] ?? null,
                        'is_hus_incoming' => $itemData['is_hus'] ?? null,
                        'is_hus_type' => gettype($itemData['is_hus'] ?? null),
                        'is_hus_bool' => $isHus,
                        'is_telefon_incoming' => $itemData['is_telefon'] ?? null,
                        'is_telefon_bool' => $isTelefon,
                    ]);

                    $merinfoData = MerinfoData::updateOrCreate(
                        [
                            'personnamn' => $itemData['name'] ?? $itemData['personnamn'] ?? null,
                            'gatuadress' => $street,
                        ],
                        [
                            'personnamn' => $itemData['name'] ?? $itemData['personnamn'] ?? null,
                            'givenNameOrFirstName' => $itemData['givenNameOrFirstName'] ?? null,
                            'alder' => $age,
                            'personalNumber' => $personalNumber,
                            'kon' => $itemData['gender'] ?? null,
                            'gatuadress' => $street,
                            'postnummer' => $zipCode,
                            'postort' => $city,
                            'telefon' => $phoneRaw,
                            'telefoner' => $phoneNumbers,
                            'link' => $itemData['url'] ?? null,
                            'is_telefon' => $isTelefon,
                            'is_hus' => $isHus,
                            'is_active' => isset($itemData['is_active']) ? (bool) $itemData['is_active'] : true,
                            'is_ratsit' => isset($itemData['is_ratsit']) ? (bool) $itemData['is_ratsit'] : false,
                            'bostadstyp' => $itemData['bostadstyp'] ?? null,
                            'bostadspris' => $itemData['bostadspris'] ?? null,
                            'karta' => $itemData['karta'] ?? null,
                            'telefonnummer' => $itemData['telefonnummer'] ?? null,
                            'merinfo_personer_total' => $itemData['merinfo_personer_total'] ?? null,
                            'merinfo_foretag_total' => $itemData['merinfo_foretag_total'] ?? null,
                            'merinfo_personer_count' => $itemData['merinfo_personer_count'] ?? 0,
                            'merinfo_personer_queue' => $itemData['merinfo_personer_queue'] ?? 0,
                        ]
                    );

                    Log::info('MerinfoController saved to merinfo_data', [
                        'item_index' => $itemIndex,
                        'short_uuid' => $itemData['short_uuid'] ?? null,
                        'is_telefon_saved' => $isTelefon,
                        'is_hus_saved' => $isHus,
                    ]);

                    $merinfoData->wasRecentlyCreated ? $merinfoDataCreated++ : $merinfoDataUpdated++;

                    $swedenSyncResult = $this->syncSwedenPersonerFromMerinfo(
                        itemData: $itemData,
                        street: $street,
                        zipCode: $zipCode,
                        city: $city,
                        phoneRaw: $phoneRaw,
                        phoneNumbers: $phoneNumbers,
                        age: $age,
                        personalNumber: $personalNumber,
                        isTelefon: $isTelefon,
                        isHus: $isHus,
                    );

                    if (($swedenSyncResult['created'] ?? false) === true) {
                        $swedenPersonerCreated++;
                    }

                    if (($swedenSyncResult['updated'] ?? false) === true) {
                        $swedenPersonerUpdated++;
                    }
                }
            } catch (Exception $e) {
                $failed++;
                $errors[] = [
                    'item_index' => $itemIndex,
                    'short_uuid' => $itemData['short_uuid'] ?? 'unknown',
                    'error' => $e->getMessage(),
                ];
            }
        }

        Log::info('MerinfoController bulkStore completed', [
            'created' => $created,
            'updated' => $updated,
            'failed' => $failed,
            'merinfo_data_created' => $merinfoDataCreated,
            'merinfo_data_updated' => $merinfoDataUpdated,
            'sweden_personer_created' => $swedenPersonerCreated,
            'sweden_personer_updated' => $swedenPersonerUpdated,
            'errors' => $errors,
        ]);

        return response()->json([
            'message' => 'Bulk operation completed',
            'summary' => [
                'total_processed' => count($validated['items']),
                'created' => $created,
                'updated' => $updated,
                'failed' => $failed,
                'merinfo_data_created' => $merinfoDataCreated,
                'merinfo_data_updated' => $merinfoDataUpdated,
                'sweden_personer_created' => $swedenPersonerCreated,
                'sweden_personer_updated' => $swedenPersonerUpdated,
            ],
            'errors' => $errors,
        ]);
    }

    /**
     * @param  array<string, mixed>  $itemData
     * @param  array<int, mixed>  $phoneNumbers
     * @return array{created: bool, updated: bool}
     */
    private function syncSwedenPersonerFromMerinfo(
        array $itemData,
        ?string $street,
        ?string $zipCode,
        ?string $city,
        ?string $phoneRaw,
        array $phoneNumbers,
        ?int $age,
        ?string $personalNumber,
        bool $isTelefon,
        bool $isHus,
    ): array {
        $personnamn = $this->normalizeNullableString($itemData['name'] ?? $itemData['personnamn'] ?? null);
        $fornamn = $this->normalizeNullableString($itemData['givenNameOrFirstName'] ?? null);
        $efternamn = null;

        if ($personnamn !== null) {
            $parts = preg_split('/\s+/', trim($personnamn)) ?: [];
            if (count($parts) > 1) {
                $efternamn = $parts[count($parts) - 1];
            }
        }

        if ($fornamn === null && $personnamn !== null) {
            $parts = preg_split('/\s+/', trim($personnamn)) ?: [];
            if (count($parts) > 0) {
                $fornamn = $parts[0];
            }
        }

        $fornamn = $this->normalizeNullableString($fornamn);
        $efternamn = $this->normalizeNullableString($efternamn);
        $address = $this->normalizeNullableString($street);
        $postnummer = $this->normalizePostnummer($zipCode);
        $postort = $this->normalizeNullableString($city);
        $personnummer = $this->normalizeNullableString($personalNumber);
        $telefon = $this->normalizeNullableString($phoneRaw);
        $merinfoLink = $this->normalizeNullableString($itemData['url'] ?? null);
        $merinfoDataJson = json_encode($itemData, JSON_UNESCAPED_UNICODE);

        $gender = $this->normalizeNullableString($itemData['gender'] ?? null);
        $kon = match (strtolower((string) $gender)) {
            'male' => 'M',
            'female' => 'F',
            default => $gender,
        };

        $telefonnummer = [];
        if (! empty($phoneNumbers)) {
            foreach ($phoneNumbers as $phone) {
                if (is_array($phone)) {
                    $raw = $this->normalizeNullableString($phone['raw'] ?? null);
                    if ($raw !== null) {
                        $telefonnummer[] = $raw;
                    }
                } elseif (is_string($phone)) {
                    $raw = $this->normalizeNullableString($phone);
                    if ($raw !== null) {
                        $telefonnummer[] = $raw;
                    }
                }
            }
        }

        if ($telefon !== null && ! in_array($telefon, $telefonnummer, true)) {
            $telefonnummer[] = $telefon;
        }

        $telefonnummerJson = ! empty($telefonnummer)
            ? json_encode(array_values(array_unique($telefonnummer)), JSON_UNESCAPED_UNICODE)
            : null;

        $existing = null;

        if ($personnummer !== null) {
            $existing = DB::table('sweden_personer')->where('personnummer', $personnummer)->first();
        }

        if ($existing === null && $merinfoLink !== null) {
            $existing = DB::table('sweden_personer')->where('merinfo_link', $merinfoLink)->first();
        }

        if ($existing === null && $address !== null && $fornamn !== null && $efternamn !== null) {
            $existing = DB::table('sweden_personer')
                ->where('adress', $address)
                ->where('fornamn', $fornamn)
                ->where('efternamn', $efternamn)
                ->first();
        }

        $incoming = [
            'adress' => $address,
            'postnummer' => $postnummer,
            'postort' => $postort,
            'fornamn' => $fornamn,
            'efternamn' => $efternamn,
            'personnamn' => $personnamn,
            'alder' => $age,
            'personnummer' => $personnummer,
            'kon' => $kon,
            'telefon' => $telefon,
            'telefonnummer' => $telefonnummerJson,
            'merinfo_link' => $merinfoLink,
            'merinfo_data' => $merinfoDataJson,
            'is_hus' => $isHus,
            'is_active' => (bool) ($itemData['is_active'] ?? true),
        ];

        if ($existing !== null) {
            $updateData = [];

            foreach ($incoming as $key => $value) {
                if ($value === null) {
                    continue;
                }

                if (is_string($value) && trim($value) === '') {
                    continue;
                }

                $updateData[$key] = $value;
            }

            if (empty($updateData)) {
                return ['created' => false, 'updated' => false];
            }

            $updateData['updated_at'] = now();
            DB::table('sweden_personer')->where('id', $existing->id)->update($updateData);

            return ['created' => false, 'updated' => true];
        }

        if ($address === null || $fornamn === null || $efternamn === null) {
            return ['created' => false, 'updated' => false];
        }

        $insertData = [
            'adress' => $address,
            'postnummer' => $postnummer,
            'postort' => $postort,
            'fornamn' => $fornamn,
            'efternamn' => $efternamn,
            'personnamn' => $personnamn,
            'alder' => $age,
            'personnummer' => $personnummer,
            'kon' => $kon,
            'telefon' => $telefon,
            'telefonnummer' => $telefonnummerJson,
            'merinfo_link' => $merinfoLink,
            'merinfo_data' => $merinfoDataJson,
            'is_hus' => $isHus,
            'is_active' => (bool) ($itemData['is_active'] ?? true),
            'is_queue' => false,
            'is_done' => false,
            'created_at' => now(),
            'updated_at' => now(),
        ];

        DB::table('sweden_personer')->insert($insertData);

        return ['created' => true, 'updated' => false];
    }

    private function normalizePostnummer(mixed $value): ?string
    {
        if ($value === null) {
            return null;
        }

        $digits = preg_replace('/\D+/', '', (string) $value);

        return $digits !== '' ? $digits : null;
    }

    private function normalizeNullableString(mixed $value): ?string
    {
        if ($value === null) {
            return null;
        }

        $trimmed = trim((string) $value);

        return $trimmed !== '' ? $trimmed : null;
    }

    /**
     * @return array<int, array<string, mixed>>
     */
    private function extractBulkItems(Request $request): array
    {
        $payload = $request->all();

        if (array_is_list($payload)) {
            return $payload;
        }

        if (isset($payload['records']) && is_array($payload['records'])) {
            return $payload['records'];
        }

        if (! isset($payload['results']) || ! is_array($payload['results'])) {
            return [];
        }

        $items = [];

        foreach ($payload['results'] as $result) {
            if (isset($result['items']) && is_array($result['items'])) {
                foreach ($result['items'] as $item) {
                    if (is_array($item)) {
                        $items[] = $item;
                    }
                }
            }
        }

        return $items;
    }
}
