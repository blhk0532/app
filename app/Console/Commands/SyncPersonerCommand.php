<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

#[Signature('personer:sync {--fresh : Disabled safety option (no truncation)} {--table= : Only sync one source table}')]
#[Description('Merge ratsit_data, merinfo_data, merinfos, hitta_data and hitta_se into sweden_personer without duplicates.')]
class SyncPersonerCommand extends Command
{
    private const CHUNK_SIZE = 500;

    private const TARGET_TABLE = 'sweden_personer';

    /** @var array<int, string> */
    private const TARGET_COLUMNS = [
        'personnummer',
        'personnamn',
        'fornamn',
        'efternamn',
        'alder',
        'kon',
        'civilstand',
        'adress',
        'postnummer',
        'postort',
        'kommun',
        'adressandring',
        'longitude',
        'latitude',
        'telefonnummer',
        'bostadstyp',
        'bostadspris',
        'agandeform',
        'boarea',
        'byggar',
    ];

    /** @var array<string, string> */
    private const SOURCE_TABLES = [
        'ratsit_data' => 'processRatsitData',
        'merinfo_data' => 'processMerinfoData',
        'merinfos' => 'processMerinfos',
        'hitta_data' => 'processHittaData',
        'hitta_se' => 'processHittaSe',
    ];

    public function handle(): int
    {
        $table = $this->option('table');

        if ($table !== null && ! array_key_exists($table, self::SOURCE_TABLES)) {
            $this->error("Unknown table '{$table}'. Valid options: ".implode(', ', array_keys(self::SOURCE_TABLES)));

            return self::FAILURE;
        }

        if ($this->option('fresh')) {
            $this->error('The --fresh option is disabled for safety to prevent data loss in sweden_personer.');

            return self::FAILURE;
        }

        $processors = $table !== null
            ? [$table => self::SOURCE_TABLES[$table]]
            : self::SOURCE_TABLES;

        foreach ($processors as $method) {
            $this->$method();
        }

        $total = DB::table(self::TARGET_TABLE)->count();
        $this->info("Sync complete. Total records in ".self::TARGET_TABLE.": {$total}");

        return self::SUCCESS;
    }

    // ─── Source processors ────────────────────────────────────────────────────

    private function processRatsitData(): void
    {
        $count = DB::table('ratsit_data')->count();
        $this->info("Processing ratsit_data ({$count} rows)...");
        $bar = $this->output->createProgressBar($count);
        $bar->start();

        DB::table('ratsit_data')->orderBy('id')->chunk(self::CHUNK_SIZE, function ($rows) use ($bar): void {
            foreach ($rows as $row) {
                $phones = $this->mergePhones(
                    $this->decodeJson($row->telfonnummer),
                    [$row->telefon ?? null]
                );

                $this->upsertPerson([
                    'personnummer' => $this->normalizePin($row->personnummer ?? null),
                    'personnamn' => $row->personnamn ?? null,
                    'fornamn' => $row->fornamn ?? null,
                    'efternamn' => $row->efternamn ?? null,
                    'fodelsedag' => $row->fodelsedag ?? null,
                    'alder' => $row->alder ?? null,
                    'kon' => $row->kon ?? null,
                    'civilstand' => $row->civilstand ?? null,
                    'adress' => $row->adress ?? $row->gatuadress ?? null,
                    'postnummer' => $row->postnummer ?? null,
                    'postort' => $row->postort ?? null,
                    'kommun' => $row->kommun ?? null,
                    'adressandring' => $row->adressandring ?? null,
                    'longitude' => $row->longitude ?? null,
                    'latitud' => $row->latitud ?? null,
                    'telefonnummer' => $phones,
                    'bostadstyp' => $row->bostadstyp ?? null,
                    'agandeform' => $row->agandeform ?? null,
                    'boarea' => $row->boarea ?? null,
                    'byggar' => $row->byggar ?? null,
                ]);

                $bar->advance();
            }
        });

        $bar->finish();
        $this->newLine();
    }

    private function processMerinfoData(): void
    {
        $count = DB::table('merinfo_data')->count();
        $this->info("Processing merinfo_data ({$count} rows)...");
        $bar = $this->output->createProgressBar($count);
        $bar->start();

        DB::table('merinfo_data')->orderBy('id')->chunk(self::CHUNK_SIZE, function ($rows) use ($bar): void {
            foreach ($rows as $row) {
                $phones = $this->mergePhones(
                    $this->decodeJson($row->telefonnummer),
                    $this->decodeJson($row->telefoner),
                    [$row->telefon ?? null]
                );

                $this->upsertPerson([
                    'personnummer' => $this->normalizePin($row->personalNumber ?? null),
                    'personnamn' => $row->personnamn ?? null,
                    'fornamn' => $row->givenNameOrFirstName ?? null,
                    'alder' => $row->alder ?? null,
                    'kon' => $row->kon ?? null,
                    'adress' => $row->adress ?? $row->gatuadress ?? null,
                    'postnummer' => $row->postnummer ?? null,
                    'postort' => $row->postort ?? null,
                    'telefonnummer' => $phones,
                    'bostadstyp' => $row->bostadstyp ?? null,
                    'bostadspris' => $row->bostadspris ?? null,
                ]);

                $bar->advance();
            }
        });

        $bar->finish();
        $this->newLine();
    }

    private function processMerinfos(): void
    {
        $count = DB::table('merinfos')->count();
        $this->info("Processing merinfos ({$count} rows)...");
        $bar = $this->output->createProgressBar($count);
        $bar->start();

        DB::table('merinfos')->orderBy('id')->chunk(self::CHUNK_SIZE, function ($rows) use ($bar): void {
            foreach ($rows as $row) {
                $address = $this->decodeJson($row->address);
                $gatuadress = $address['streetAddress'] ?? $address['street'] ?? $address['address'] ?? null;
                $postnummer = $address['postalCode'] ?? $address['postal_code'] ?? $address['zip'] ?? null;
                $postort = $address['city'] ?? $address['postort'] ?? null;

                $phones = $this->mergePhones(
                    $this->decodeJson($row->phone_number)
                );

                $pnrRaw = $row->pnr ?? null;
                $pnrDecoded = is_string($pnrRaw) ? json_decode($pnrRaw, true) : null;

                if (is_array($pnrDecoded)) {
                    $pnrString = $pnrDecoded['number'] ?? $pnrDecoded[0] ?? null;
                } else {
                    $pnrString = is_string($pnrRaw) ? $pnrRaw : null;
                }

                $pin = $this->normalizePin($pnrString) ?? $this->normalizePin($row->personalNumber ?? null);

                $this->upsertPerson([
                    'personnummer' => $pin,
                    'personnamn' => $row->name ?? null,
                    'fornamn' => $row->givenNameOrFirstName ?? null,
                    'kon' => $row->gender ?? null,
                    'gatuadress' => $gatuadress,
                    'postnummer' => $postnummer,
                    'postort' => $postort,
                    'telefonnummer' => $phones,
                ]);

                $bar->advance();
            }
        });

        $bar->finish();
        $this->newLine();
    }

    private function processHittaData(): void
    {
        $count = DB::table('hitta_data')->count();
        $this->info("Processing hitta_data ({$count} rows)...");
        $bar = $this->output->createProgressBar($count);
        $bar->start();

        DB::table('hitta_data')->orderBy('id')->chunk(self::CHUNK_SIZE, function ($rows) use ($bar): void {
            foreach ($rows as $row) {
                $phones = $this->mergePhones(
                    $this->decodeJson($row->telefonnummer),
                    $this->decodeJson($row->telefonnumer),
                    [$row->telefon ?? null]
                );

                $this->upsertPerson([
                    'personnamn' => $row->personnamn ?? null,
                    'alder' => $row->alder ?? null,
                    'kon' => $row->kon ?? null,
                    'gatuadress' => $row->gatuadress ?? null,
                    'postnummer' => $row->postnummer ?? null,
                    'postort' => $row->postort ?? null,
                    'telefonnummer' => $phones,
                    'bostadstyp' => $row->bostadstyp ?? null,
                    'bostadspris' => $row->bostadspris ?? null,
                ]);

                $bar->advance();
            }
        });

        $bar->finish();
        $this->newLine();
    }

    private function processHittaSe(): void
    {
        $count = DB::table('hitta_se')->count();
        $this->info("Processing hitta_se ({$count} rows)...");
        $bar = $this->output->createProgressBar($count);
        $bar->start();

        DB::table('hitta_se')->orderBy('id')->chunk(self::CHUNK_SIZE, function ($rows) use ($bar): void {
            foreach ($rows as $row) {
                $phones = $this->mergePhones(
                    $this->decodeJson($row->telefonnumer),
                    [$row->telefon ?? null]
                );

                $this->upsertPerson([
                    'personnamn' => $row->personnamn ?? null,
                    'alder' => $row->alder ?? null,
                    'kon' => $row->kon ?? null,
                    'gatuadress' => $row->gatuadress ?? null,
                    'postnummer' => $row->postnummer ?? null,
                    'postort' => $row->postort ?? null,
                    'telefonnummer' => $phones,
                    'bostadstyp' => $row->bostadstyp ?? null,
                    'bostadspris' => $row->bostadspris ?? null,
                ]);

                $bar->advance();
            }
        });

        $bar->finish();
        $this->newLine();
    }

    // ─── Core upsert logic ────────────────────────────────────────────────────

    /**
     * Find an existing Person record (by personnummer, then by name+address),
     * create a new one, or merge into an existing one.
     *
     * @param  array<string, mixed>  $data
     */
    private function upsertPerson(array $data): void
    {
        $pin = $data['personnummer'] ?? null;
        $data = $this->normalizeForTarget($data);

        $name = $this->normalize($data['personnamn'] ?? null);
        $address = $this->normalize($data['adress'] ?? null);
        $zip = trim((string) ($data['postnummer'] ?? ''));

        if (empty($name) && empty($pin)) {
            return;
        }

        $existing = null;

        if ($pin) {
            $existing = DB::table(self::TARGET_TABLE)
                ->where('personnummer', $pin)
                ->first();
        }

        if (! $existing && $name && $address && $zip) {
            $existing = DB::table(self::TARGET_TABLE)
                ->whereRaw('LOWER(TRIM(personnamn)) = ?', [$name])
                ->whereRaw('LOWER(TRIM(adress)) = ?', [$address])
                ->where('postnummer', $zip)
                ->first();
        }

        if ($existing) {
            $this->mergeIntoExisting($existing, $data);
        } else {
            $this->createNew($data);
        }
    }

    /** @param array<string, mixed> $data */
    private function createNew(array $data): void
    {
        $phones = $data['telefonnummer'] ?? [];
        $data['telefonnummer'] = $phones !== [] ? json_encode($phones, JSON_UNESCAPED_UNICODE) : null;
        DB::table(self::TARGET_TABLE)->insert($data);
    }

    /** @param array<string, mixed> $data */
    private function mergeIntoExisting(object $person, array $data): void
    {
        $updates = [];

        foreach ($data as $column => $value) {
            if ($column === 'telefonnummer') {
                continue;
            }

            if (blank($person->$column ?? null) && filled($value)) {
                $updates[$column] = $value;
            }
        }

        // Merge phone arrays
        $merged = $this->mergePhones(
            $this->decodeJson($person->telefonnummer ?? null),
            $data['telefonnummer'] ?? []
        );

        if ($merged !== $this->decodeJson($person->telefonnummer ?? null)) {
            $updates['telefonnummer'] = $merged !== [] ? json_encode($merged, JSON_UNESCAPED_UNICODE) : null;
        }

        if ($updates !== []) {
            DB::table(self::TARGET_TABLE)
                ->where('id', $person->id)
                ->update($updates);
        }
    }

    /**
     * Map source payload keys to sweden_personer columns and drop unknown keys.
     *
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    private function normalizeForTarget(array $data): array
    {
        if (! isset($data['adress']) && isset($data['gatuadress'])) {
            $data['adress'] = $data['gatuadress'];
        }

        if (! isset($data['latitude']) && isset($data['latitud'])) {
            $data['latitude'] = $data['latitud'];
        }

        if (array_key_exists('alder', $data)) {
            $digits = preg_replace('/\D+/', '', (string) $data['alder']);
            $data['alder'] = $digits !== '' ? (int) $digits : null;
        }

        unset($data['gatuadress'], $data['latitud'], $data['sources']);

        return array_intersect_key($data, array_flip(self::TARGET_COLUMNS));
    }

    // ─── Helpers ──────────────────────────────────────────────────────────────

    /**
     * Decode a JSON string or pass through an array; return [] on failure.
     *
     * @return array<int, mixed>
     */
    private function decodeJson(mixed $value): array
    {
        if (is_array($value)) {
            return $value;
        }

        if (is_string($value) && $value !== '') {
            $decoded = json_decode($value, true);

            return is_array($decoded) ? $decoded : [];
        }

        return [];
    }

    /**
     * Merge multiple phone sources into a flat, deduplicated, non-empty array.
     *
     * @param  array<int, mixed>|null  ...$sources
     * @return array<int, string>
     */
    private function mergePhones(?array ...$sources): array
    {
        $phones = [];

        foreach ($sources as $source) {
            foreach ((array) $source as $item) {
                if (is_array($item)) {
                    $item = $item['number'] ?? $item['telefon'] ?? $item['phone'] ?? implode(' ', array_filter((array) $item));
                }

                $phone = trim((string) $item);

                if ($phone !== '') {
                    $phones[] = $phone;
                }
            }
        }

        return array_values(array_unique($phones));
    }

    private function normalize(?string $value): string
    {
        return mb_strtolower(trim((string) $value));
    }

    private function normalizePin(?string $pin): ?string
    {
        if (blank($pin)) {
            return null;
        }

        $clean = preg_replace('/[\s\-]/', '', $pin);

        // Must be all digits and exactly 10 or 12 characters (Swedish personnummer)
        if (! preg_match('/^[0-9]{10}$|^[0-9]{12}$/', $clean)) {
            return null;
        }

        return $clean;
    }
}
