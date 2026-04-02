<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Widgets;

use App\Enums\Outcomes;
use App\Models\RingaData;
use App\Models\RingaDataOutcome;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;
use Illuminate\Support\Facades\Auth;

class RingaDataOutcomeWidget extends Widget implements HasActions, HasForms
{
    use InteractsWithActions;
    use InteractsWithForms;

    public ?RingaData $record = null;

    public ?int $recordId = null;

    protected string $view = 'filament.app.resources.ringa-data.widgets.ringa-data-outcome-widget';

    protected int|string|array $columnSpan = '1/2';

    protected static ?string $heading = 'Call Outcomes';

    protected $listeners = ['record-selected' => 'updateRecord'];

    public function mount(): void
    {
        logger('RingaDataOutcomeWidget mount', [
            'record_id' => $this->recordId,
            'record_present' => (bool) $this->record,
        ]);

        // If record is missing but recordId is provided, load it
        if (! $this->record && $this->recordId) {
            $this->record = RingaData::query()->find($this->recordId);
            logger('RingaDataOutcomeWidget loaded record from recordId', [
                'recordId' => $this->recordId,
                'found' => (bool) $this->record,
            ]);
        }
    }

    public function queueOutcall(string $phone): void
    {
        // Create a new record in booking_outcall_queues with the phone number and user context
        \App\Models\BookingOutcallQueue::create([
            'phone' => $phone,
            'user_id' => Auth::user()?->id,
            'is_active' => true,
            // Add more fields as needed, e.g. name, address, etc.
        ]);

    }

    public function addPhoneNumbersAction(): Action
    {
        return Action::make('addPhoneNumbers')
            ->label('Lägg till nummer')
            ->icon('heroicon-o-plus')
            ->size('sm')
            ->color('gray')
            ->disabled(fn (): bool => ! $this->record)
            ->modalHeading('Lägg till telefonnummer')
            ->modalSubmitActionLabel('Spara nummer')
            ->schema([
                Repeater::make('phone_numbers')
                    ->label('Telefonnummer')
                    ->default(function (): array {
                        if (! $this->record) {
                            return [['number' => '']];
                        }

                        $existingNumbers = is_array($this->record->telfonnummer)
                            ? $this->record->telfonnummer
                            : [];

                        if ($existingNumbers === []) {
                            return [['number' => '']];
                        }

                        return collect($existingNumbers)
                            ->map(fn (mixed $value): array => ['number' => (string) $value])
                            ->values()
                            ->all();
                    })
                    ->minItems(1)
                    ->maxItems(5)
                    ->schema([
                        TextInput::make('number')
                            ->label('Nummer')
                            ->required()
                            ->maxLength(30),
                    ])
                    ->columnSpanFull(),
            ])
            ->action(function (array $data): void {
                if (! $this->record) {
                    Notification::make()
                        ->title('Ingen post vald')
                        ->warning()
                        ->send();

                    return;
                }

                $rows = $data['phone_numbers'] ?? [];

                $numbers = collect($rows)
                    ->pluck('number')
                    ->map(fn (mixed $number): string => trim((string) $number))
                    ->filter(fn (string $number): bool => $number !== '')
                    ->unique()
                    ->take(5)
                    ->values()
                    ->all();

                if ($numbers === []) {
                    Notification::make()
                        ->title('Inga nummer att spara')
                        ->warning()
                        ->send();

                    return;
                }

                $this->record->update([
                    'telfonnummer' => $numbers,
                    'is_telefon' => true,
                ]);

                $this->record->refresh();

                Notification::make()
                    ->title('Telefonnummer sparade')
                    ->success()
                    ->send();
            });
    }

    public function updateRecord(int $recordId): void
    {
        $this->recordId = $recordId;
        $this->record = RingaData::query()->find($recordId);
        logger('RingaDataOutcomeWidget updated record via event', ['recordId' => $recordId]);
    }

    public function selectOutcome(string $outcomeValue): void
    {
        if (! $this->record) {
            Notification::make()
                ->title('No record selected')
                ->body('Please select a record first.')
                ->warning()
                ->send();

            return;
        }

        $outcome = Outcomes::tryFrom($outcomeValue);
        if (! $outcome) {
            Notification::make()
                ->title('Invalid outcome')
                ->body('The selected outcome is not valid.')
                ->danger()
                ->send();

            return;
        }

        $this->record->update([
            'outcome' => $outcome,
            'attempts' => ($this->record->attempts ?? 0) + 1,
        ]);

        RingaDataOutcome::query()->create([
            'ringa_data_id' => $this->record->id,
            'user_id' => Auth::user()?->id,
            'coutcome' => $outcome->value,
        ]);

        $affectedRecords = $this->updateSameAddressRecords($outcome);

        Notification::make()
            ->title('Ok')
            ->body("➤ {$outcome->getLabel()}".($affectedRecords > 0 ? " ({$affectedRecords} andra med samma adress uppdaterade)" : ''))
            ->icon($outcome->getIcon())
            ->color($outcome->getColor())
            ->send();

        $this->record->refresh();
    }

    private function isFinalOutcome(Outcomes $outcome): bool
    {
        return in_array($outcome, [
            Outcomes::DMC,
            Outcomes::Klickad,
            Outcomes::EjIntresserad,
            Outcomes::Felnummer,
            Outcomes::NyligenGjort,
            Outcomes::Yes,
            Outcomes::Offert,
            Outcomes::Aterkommer,
            Outcomes::RingTillbaka,
        ], true);
    }

    private function updateSameAddressRecords(Outcomes $outcome): int
    {
        if (! $this->isFinalOutcome($outcome)) {
            logger('Address outcome: not final, skipping', ['outcome' => $outcome->value]);

            return 0;
        }

        $gatuadress = trim((string) $this->record->gatuadress);

        if (empty($gatuadress)) {
            logger('Address outcome: empty address', ['record_id' => $this->record->id]);

            return 0;
        }

        $teamId = $this->record->team_id;

        logger('Address outcome: updating same address', [
            'gatuadress' => $gatuadress,
            'team_id' => $teamId,
            'record_id' => $this->record->id,
            'outcome' => $outcome->value,
        ]);

        // Update records with same address - match by team_id OR records with no team_id
        $updated = RingaData::query()
            ->whereRaw('TRIM(gatuadress) = ?', [$gatuadress])
            ->where('id', '!=', $this->record->id)
            ->where(function ($q) use ($teamId) {
                $q->where('team_id', $teamId)
                    ->orWhereNull('team_id');
            })
            ->whereNull('outcome')
            ->update([
                'outcome' => $outcome->value,
                'outcome_category' => 'CO',
                'started_at' => now(),
                'expires_at' => now()->addYear(),
            ]);

        logger('Address outcome: updated count', ['count' => $updated]);

        return $updated;
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                // The form will be handled in the Blade view with action buttons
            ])
            ->statePath('data');
    }
}
