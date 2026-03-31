<?php

declare(strict_types=1);

namespace App\Livewire\RingaData;

use App\Enums\Outcomes;
use App\Enums\Outcomes1;
use App\Enums\Outcomes2;
use App\Enums\Outcomes3;
use App\Enums\Outcomes4;
use App\Filament\App\Resources\RingaDatas\RingaDatasResource;
use App\Models\Contact;
use App\Models\OutcomeSetting;
use App\Models\RingaData;
use App\Models\RingaDataOutcome;
use App\Services\OutcomeDelayService;
use Exception;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Livewire\Component;

class OutcomeRecorder extends Component implements HasActions, HasForms, HasSchemas
{
    use InteractsWithActions;
    use InteractsWithForms;
    use InteractsWithSchemas {
        InteractsWithForms::getCachedSchemas insteadof InteractsWithSchemas;
        InteractsWithSchemas::getCachedSchemas as getSchemasFromTrait;
    }

    public ?int $recordId = null;

    public ?RingaData $record = null;

    public ?string $tenant = null;

    public ?string $processingOutcome = null;

    protected $listeners = [
        'externalRecordOutcome' => 'recordOutcome',
        'record-selected' => 'updateRecordId',
    ];

    protected ?string $defaultReturnCallAt = null;

    protected array $outcomeColors = [];

    public function updateRecordId(int $recordId): void
    {
        Log::info('OutcomeRecorder updateRecordId', ['newRecordId' => $recordId, 'currentRecordId' => $this->recordId]);

        if ($this->recordId !== $recordId) {
            $this->recordId = $recordId;
            $this->loadRecord();
            // Reset processing state to enable buttons for the new record
            $this->processingOutcome = null;
        }
    }

    public function returnCallAction(): Action
    {
        $default = $this->defaultReturnCallAt
            ? Carbon::parse($this->defaultReturnCallAt)
            : now()->addHour();

        $color = $this->outcomeColors['RingTillbaka'] ?? '#2563eb';

        return Action::make('returnCall')
            ->button()
            ->color('gray')
            ->size('sm')
            ->disabled($this->processingOutcome === 'RingTillbaka')
            ->extraAttributes([
                'class' => 'w-full h-full flex',
                'style' => "height:36px; background-color: {$color} !important; color: white !important; border-color: {$color} !important;".($this->processingOutcome === 'RingTillbaka' ? ' opacity: 0.5;' : ''),
            ])
            ->modal()
            ->modalHeading('Schemalägg återkommande samtal')
            ->modalSubmitActionLabel('Schemalägg')
            ->modalWidth('md')
            ->schema([
                DateTimePicker::make('aterkom_at')
                    ->label('Datum och tid för återkommande samtal')
                    ->default(fn () => $default)
                    ->native(true)
                    ->seconds(false)
                    ->timezone(config('app.timezone'))
                    ->required(),
            ])
            ->action(function (array $data): void {
                $this->recordOutcome('RingTillbaka', $data['aterkom_at'] ?? null);
            });
    }

    public function bokadAction(): Action
    {
        $color = $this->outcomeColors['Bokad'] ?? '#05df72';

        return Action::make('bokad')
            ->label('Bokad')
            ->button()
            ->color('gray')
            ->size('sm')
            ->disabled($this->processingOutcome === 'Bokad')
            ->extraAttributes([
                'class' => 'w-full',
                'style' => "background-color: {$color} !important; color: white !important; border-color: {$color} !important;".($this->processingOutcome === 'Bokad' ? ' opacity: 0.5;' : ''),
            ])
            ->modal()
            ->modalHeading('Bokad')
            ->schema([
                Textarea::make('notes')
                    ->label('Anteckningar')
                    ->rows(3),
            ])
            ->action(function (array $data): void {
                $this->recordOutcome('Bokad');

                Notification::make()
                    ->title('Bokad')
                    ->success()
                    ->send();
            });
    }

    public function aterkommerAction(): Action
    {
        $default = $this->defaultReturnCallAt
            ? Carbon::parse($this->defaultReturnCallAt)
            : now()->addHour();

        $color = $this->outcomeColors['Aterkommer'] ?? '#606060';

        return Action::make('aterkommer')
            ->label('Ring Tillabaka')
            ->button()
            ->color('gray')
            ->size('sm')
            ->disabled($this->processingOutcome === 'Aterkommer')
            ->extraAttributes([
                'class' => 'overflow-hidden whitespace-nowrap w-full h-full px-3 py-2 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed',
                'style' => "background-color: {$color} !important; color: white !important; border-color: {$color} !important;".($this->processingOutcome === 'Aterkommer' ? ' opacity: 0.9;' : ''),
            ])
            ->modal()
            ->modalHeading('Schemalägg återkommande samtal')
            ->modalSubmitActionLabel('Schemalägg')
            ->modalWidth('md')
            ->schema([
                DateTimePicker::make('aterkom_at')
                    ->label('Datum och tid för återkommande samtal')
                    ->default(fn () => $default)
                    ->native(true)
                    ->seconds(false)
                    ->timezone(config('app.timezone'))
                    ->required(),
            ])
            ->action(function (array $data): void {
                $this->recordOutcome('Aterkommer', $data['aterkom_at'] ?? null);
            });
    }

    public function nextGangAction(): Action
    {
        $color = $this->outcomeColors['NyligenGjort'] ?? '#6b7280';

        return Action::make('nextGang')
            ->label('Nästa Gång')
            ->button()
            ->color('gray')
            ->size('sm')
            ->disabled($this->processingOutcome === 'NyligenGjort')
            ->extraAttributes([
                                'class' => 'overflow-hidden whitespace-nowrap w-full h-full px-3 py-2 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed',
                'style' => "background-color: {$color} !important; color: white !important; border-color: {$color} !important;".($this->processingOutcome === 'NyligenGjort' ? ' opacity: 0.5;' : ''),
            ])
            ->modal()
            ->modalHeading('Välj Nästa Gång')
            ->modalSubmitActionLabel('Spara')
            ->modalWidth('md')
            ->schema([
                Select::make('outcome_value')
                    ->label('Resultat')
                    ->options(fn () => collect(Outcomes3::cases())
                        ->mapWithKeys(fn (Outcomes3 $case) => [$case->name => $case->getLabel()])
                        ->toArray())
                    ->required(),
            ])
            ->action(function (array $data): void {
                $this->recordOutcome($data['outcome_value']);
            });
    }

    public function offertAction(): Action
    {
        $color = $this->outcomeColors['Offert'] ?? '#606060';

        return Action::make('offert')
            ->label('Offert')
            ->button()
            ->color('gray')
            ->size('sm')
            ->disabled($this->processingOutcome === 'Offert')
            ->extraAttributes([
                               'class' => 'overflow-hidden whitespace-nowrap w-full h-full px-3 py-2 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed',
                'style' => "background-color: {$color} !important; color: white !important; border-color: {$color} !important;".($this->processingOutcome === 'Offert' ? ' opacity: 0.5;' : ''),
            ])
            ->modal()
            ->modalHeading('Skapa Offert')
            ->modalSubmitActionLabel('Spara Offert')
            ->modalWidth('lg')
            ->schema([
                TextInput::make('subject')
                    ->label('Ämne')
                    ->placeholder('Offert ämne')
                    ->required(),
                Textarea::make('message')
                    ->label('Meddelande')
                    ->placeholder('Offert text...')
                    ->required()
                    ->rows(8)
                    ->columnSpanFull(),
            ])
            ->action(function (array $data): void {
                // TODO: Save offer and send email
                $this->recordOutcome('Offert');
            });
    }

    public function kontaktAction(): Action
    {
        $color = $this->outcomeColors['Kontakt'] ?? '#2563eb';

        return Action::make('kontakt')
            ->label('Kontakt')
            ->button()
            ->color('gray')
            ->size('sm')
            ->disabled($this->processingOutcome === 'Kontakt')
            ->extraAttributes([
                              'class' => 'overflow-hidden whitespace-nowrap w-full h-full px-3 py-2 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed',
                'style' => "background-color: {$color} !important; color: white !important; border-color: {$color} !important;".($this->processingOutcome === 'Kontakt' ? ' opacity: 0.5;' : ''),
            ])
            ->modal()
            ->modalHeading('Spara som Kontakt')
            ->modalSubmitActionLabel('Spara')
            ->modalWidth('md')
            ->schema([
                Textarea::make('notes')
                    ->label('Anteckningar')
                    ->rows(3),
            ])
            ->action(function (array $data): void {
                $this->saveAsContact($data['notes'] ?? null);
                $this->recordOutcome('Kontakt');
            });
    }

    private function saveAsContact(?string $notes = null): void
    {
        $record = $this->record;

        if (! $record) {
            Log::warning('saveAsContact: No record loaded');

            return;
        }

        $tenant = filament()->getTenant();
        $teamId = $tenant?->id;
        $userId = auth()->id();

        $name = trim(($record->fornamn ?? '').' '.($record->efternamn ?? ''));
        if (empty($name)) {
            $name = $record->personnamn ?? $record->gatuadress ?? 'Unknown';
        }

        $phones = $record->telfonnummer ?? [];
        $phone = is_array($phones) && count($phones) > 0 ? $phones[0] : null;

        $emails = $record->epost_adress ?? [];
        $email = is_array($emails) && count($emails) > 0 ? $emails[0] : null;

        $address = $record->gatuadress;
        $postnummer = $record->postnummer;
        $postort = $record->postort;

        $existingNotes = $record->user_notes;
        $newNotes = $notes;
        $combinedNotes = collect([$existingNotes, $newNotes])->filter()->implode("\n---\n");

        try {
            $contact = Contact::create([
                'name' => $name,
                'phone' => $phone,
                'email' => $email,
                'address' => $address,
                'postnummer' => $postnummer,
                'postort' => $postort,
                'notes' => $combinedNotes,
                'user_id' => $userId,
                'team_id' => $teamId,
            ]);

            Log::info('Contact saved from Ringlista', [
                'contact_id' => $contact->id,
                'name' => $name,
                'phone' => $phone,
                'email' => $email,
                'user_id' => $userId,
                'team_id' => $teamId,
            ]);

            Notification::make()
                ->title('Kontakt sparat')
                ->body("{$name} har lagts till i kontakter.")
                ->success()
                ->send();
        } catch (Exception $e) {
            Log::error('Failed to save contact', [
                'error' => $e->getMessage(),
                'record_id' => $record->id,
            ]);

            Notification::make()
                ->title('Fel')
                ->body('Kunde inte spara kontakt: '.$e->getMessage())
                ->danger()
                ->send();
        }
    }

    public function mount(): void
    {
        Log::info('OutcomeRecorder mount', ['recordId' => $this->recordId, 'tenant' => $this->tenant]);

        // Initialize processingOutcome to null
        $this->processingOutcome = null;

        // Load outcome colors ONCE
        $this->outcomeColors = OutcomeSetting::pluck('color', 'outcome')->toArray();

        $this->loadRecord();

        if (! $this->defaultReturnCallAt) {
            $this->defaultReturnCallAt = now()->addHour()->seconds(0)->format('Y-m-d H:i');
        }

        // Fallback: if no recordId passed, load first unprocessed record
        if (! $this->record && ! $this->recordId) {
            $this->record = RingaData::query()
                ->where(function ($query) {
                    $query->where('user_id', auth()->id());
                    if (filament()->getTenant()) {
                        $query->orWhere('team_id', filament()->getTenant()->id);
                    }
                })
                ->where('is_active', true)
                ->whereDate('started_at', '<=', now())
                ->where(function ($query) {
                    $query->whereRaw('attempts < COALESCE((
                        SELECT MAX(max_retry_count)
                        FROM outcome_settings
                        WHERE is_active = TRUE
                    ), 3)');
                })
                ->where(function ($query) {
                    $query->whereNull('available_at')
                        ->orWhere('available_at', '<=', now());
                })
                ->where(function ($query) {
                    $query->whereNull('aterkom_at')
                        ->orWhere('aterkom_at', '<=', now());
                })
                ->whereNull('outcome_category')
                ->whereNull('outcome')
                ->orderBy('id', 'desc')
                ->first();
            if ($this->record) {
                $this->recordId = $this->record->id;
                Log::info('Loaded fallback record', ['recordId' => $this->recordId]);
            }
        }
    }

    public function updated($property): void
    {
        if ($property === 'recordId') {
            $this->loadRecord();
        }
    }

    public function recordOutcome($outcomeValue, $aterkom_at = null): void
    {
        // Prevent double-clicks by tracking which outcome is being processed
        $this->processingOutcome = $outcomeValue;

        if (empty($outcomeValue)) {
            Log::error('recordOutcome called with empty value');
            Notification::make()
                ->title('Invalid outcome value')
                ->body('Empty outcome value received')
                ->danger()
                ->send();

            $this->processingOutcome = null;

            return;
        }

        $recordId = $this->recordId ?? $this->record?->id;
        $record = $recordId ? RingaData::query()->find($recordId) : null;

        if (! $record) {
            Notification::make()
                ->title('No record selected')
                ->danger()
                ->send();

            $this->processingOutcome = null;

            return;
        }

        try {
            Log::info('Recording outcome', [
                'recordId' => $record->id,
                'outcome' => $outcomeValue,
                'aterkom_at' => $aterkom_at,
            ]);

            // Find the actual Outcomes enum that matches this enum name or value
            $outcomeEnum = null;

            // First try to match directly against the main Outcomes enum by name or value
            foreach (Outcomes::cases() as $case) {
                if ($case->name === $outcomeValue || $case->value === $outcomeValue) {
                    $outcomeEnum = $case;
                    break;
                }
            }

            // If not found, try to find it in the display enums
            if (! $outcomeEnum) {
                $displayEnums = [
                    Outcomes1::class,
                    Outcomes2::class,
                    Outcomes4::class,
                ];

                foreach ($displayEnums as $enumClass) {
                    try {
                        // Find the enum case by name
                        $displayEnum = null;
                        foreach ($enumClass::cases() as $case) {
                            if ($case->name === $outcomeValue) {
                                $displayEnum = $case;
                                break;
                            }
                        }

                        if ($displayEnum) {
                            // Find the corresponding main enum by value
                            foreach (Outcomes::cases() as $case) {
                                if ($case->value === $displayEnum->value) {
                                    $outcomeEnum = $case;
                                    break 2;
                                }
                            }

                            // Fallback: match by name
                            foreach (Outcomes::cases() as $case) {
                                if ($case->name === $displayEnum->name) {
                                    $outcomeEnum = $case;
                                    break 2;
                                }
                            }
                        }
                    } catch (Exception $e) {
                        // Not in this enum, continue
                    }
                }
            }

            if (! $outcomeEnum) {
                Log::error('Invalid outcome value', ['value' => $outcomeValue]);
                Notification::make()
                    ->title('Invalid outcome value: '.$outcomeValue)
                    ->danger()
                    ->send();

                return;
            }

            // Determine the outcome category based on the outcome value
            $outcomeCategory = $this->getOutcomeCategory($outcomeEnum->value);
            $delayMinutes = max(0, OutcomeDelayService::getDelay($outcomeEnum->value) ?? 0);

            // If outcome is "Ring Tillbaka" or "Återkommer" we expect a scheduled datetime from the action form
            if (in_array($outcomeEnum->value, ['Ring Tillbaka', 'Återkommer'])) {
                if (blank($aterkom_at)) {
                    Notification::make()
                        ->title('Datum och tid krävs')
                        ->body('Välj ett datum och en tid för återkommande samtal.')
                        ->danger()
                        ->send();

                    return;
                }

                $scheduledAt = Carbon::parse($aterkom_at);

                DB::transaction(function () use ($outcomeEnum, $outcomeCategory, $scheduledAt, $record, $delayMinutes) {
                    $attempts = ($record->attempts ?? 0) + 1;

                    RingaData::query()
                        ->whereKey($record->id)
                        ->update([
                            'is_active' => false,
                            'outcome' => $outcomeEnum->value,
                            'outcome_category' => $outcomeCategory,
                            'aterkom_at' => $scheduledAt,
                            'available_at' => now()->addMinutes($delayMinutes),
                            'attempts' => $attempts,
                            'is_outcome' => true,
                        ]);

                    RingaDataOutcome::query()->create([
                        'ringa_data_id' => $record->id,
                        'user_id' => auth()->id(),
                        'coutcome' => $outcomeEnum->value,
                    ]);
                });

                // Refresh to confirm save
                $this->record = RingaData::query()->find($record->id);
                $this->recordId = $record->id;
                Log::info('Outcome marked with return date', [
                    'recordId' => $record->id,
                    'outcome' => $outcomeEnum->value,
                    'is_active' => $this->record?->is_active,
                    'aterkom_at' => $this->record?->aterkom_at,
                    'saved' => true,
                ]);

                Notification::make()
                    ->title('Ok')
                    ->body("{$outcomeEnum->getLabel()} Ting Tillbaka {$scheduledAt->format('Y-m-d H:i')}")
                    ->success()
                    ->send();

                // Block same address from queue for final outcomes
                $this->blockSameAddress($outcomeEnum);

                $this->loadNextRecord();
                // Dispatch event to page to load next record
                $this->dispatch('outcome-recorded', recordId: $this->recordId ?? 0);

                return;
            }

            // For other outcomes, handle based on category
            DB::transaction(function () use ($outcomeEnum, $outcomeCategory, $record) {
                $attempts = ($record->attempts ?? 0) + 1;
                $retryCount = ($record->retry_count ?? 0) + 1;
                $maxRetryCount = OutcomeDelayService::getMaxRetryCount($outcomeEnum->value);
                $delayMinutes = max(0, OutcomeDelayService::getDelay($outcomeEnum->value) ?? 0);

                // Set is_active based on category
                $isActive = match ($outcomeCategory) {
                    'Later' => false, // Permanently deactivate
                    'Return' => false, // Already scheduled for return call
                    'Maybe' => true, // Keep active for potential follow-up
                    'Retry' => $retryCount < $maxRetryCount, // Keep active until max retries
                    default => true, // Default to active
                };

                RingaData::query()
                    ->whereKey($record->id)
                    ->update([
                        'is_active' => $isActive,
                        'outcome' => $outcomeEnum->value,
                        'outcome_category' => $outcomeCategory,
                        'attempts' => $attempts,
                        'retry_count' => $retryCount,
                        'available_at' => now()->addMinutes($delayMinutes),
                        'is_outcome' => true,
                    ]);

                RingaDataOutcome::query()->create([
                    'ringa_data_id' => $record->id,
                    'user_id' => auth()->id(),
                    'coutcome' => $outcomeEnum->value,
                ]);
            });

            // Block same address from queue for final outcomes
            $this->blockSameAddress($outcomeEnum);

            // Refresh to confirm save
            $this->record = RingaData::query()->find($record->id);
            $this->recordId = $record->id;
            Log::info('Outcome marked', [
                'recordId' => $record->id,
                'outcome' => $outcomeEnum->value,
                'is_active' => $this->record?->is_active,
                'saved' => true,
            ]);

            Notification::make()
                ->title($outcomeEnum->getLabel())
                ->body('Ok')
                ->success()
                ->send();

            $this->loadNextRecord();
            // Dispatch event to page to load next record
            $this->dispatch('outcome-recorded', recordId: $this->recordId ?? 0);
            // Use SPA navigation to refresh the page
            $this->redirect(RingaDatasResource::getUrl('queue'), navigate: true);

        } catch (Exception $e) {
            Log::error('Error recording outcome', [
                'error' => $e->getMessage(),
                'outcome' => $outcomeValue,
                'recordId' => $recordId,
                'trace' => $e->getTraceAsString(),
            ]);
            Notification::make()
                ->title('Error recording outcome')
                ->body('An error occurred while saving the outcome: '.$e->getMessage())
                ->danger()
                ->send();
        } finally {
            $this->processingOutcome = null;
        }
    }

    public function getColorClass($colorName): string
    {
        return match ($colorName) {
            'danger' => 'bg-red-600 hover:bg-red-700',
            'success' => 'bg-green-600 hover:bg-green-700',
            'warning' => 'bg-amber-600 hover:bg-amber-700',
            'primary' => 'bg-blue-600 hover:bg-blue-700',
            'secondary' => 'bg-gray-600 hover:bg-gray-700',
            'gray' => 'bg-slate-600 hover:bg-slate-700',
            default => 'bg-blue-600 hover:bg-blue-700',
        };
    }

    public function render()
    {
        return view('livewire.ringa-data.outcome-recorder');
    }

    public function getOutcomeButtons()
    {
        return OutcomeSetting::where('is_active', true)
            ->whereNotNull('color')
            ->orderBy('order')
            ->get();
    }

    private function colorToFilament(string $hexColor): string
    {
        // Map hex colors to Filament color names for consistency
        return match ($hexColor) {
            '#dc2626' => 'danger',
            '#2563eb' => 'primary',
            '#f59e0b' => 'warning',
            '#16a34a' => 'success',
            '#6b7280' => 'gray',
            default => 'gray',
        };
    }

    private function loadRecord(): void
    {
        if ($this->recordId) {
            // Use withoutGlobalScopes to ensure we can find the record regardless of tenant scopes
            $this->record = RingaData::withoutGlobalScopes()->find($this->recordId);
            Log::info('Loaded record', ['recordId' => $this->recordId, 'found' => (bool) $this->record]);
        } else {
            $this->record = null;
            Log::info('No recordId provided');
        }
    }

    private function loadNextRecord(): void
    {
        $now = now();
        $userId = auth()->id();
        $tenantId = filament()->getTenant()?->id;
        $this->recordId = null;
        $this->record = null;
        Log::info($now->format('Y-m-d H:i:s')." - Loading next record for user {$userId} and tenant {$tenantId}");
    }

    private function getOutcomeCategory(string $outcomeValue): ?string
    {
        // Get category from outcome_settings table
        return OutcomeSetting::where('outcome', $outcomeValue)
            ->where('is_active', true)
            ->value('category');
    }

    private function blockSameAddress(Outcomes $outcome): int
    {
        $record = $this->record;
        if (! $record) {
            return 0;
        }

        $gatuadress = $record->gatuadress;
        $postnummer = $record->postnummer;

        if (empty($gatuadress) || empty($postnummer)) {
            return 0;
        }

        $updated = RingaData::query()
            ->where('gatuadress', $gatuadress)
            ->where('postnummer', $postnummer)
            ->where('id', '!=', $record->id)
            ->update([
                'outcome' => $outcome->value,
                'outcome_category' => 'CO',
                'attempts' => DB::raw('attempts + 1'),
                'is_active' => false,
                'available_at' => now(),
                'started_at' => now(),
                'expires_at' => now()->addYear(),
            ]);

        Log::info('blockSameAddress result', ['gatuadress' => $gatuadress, 'postnummer' => $postnummer, 'updated' => $updated]);

        return $updated;
    }
}
