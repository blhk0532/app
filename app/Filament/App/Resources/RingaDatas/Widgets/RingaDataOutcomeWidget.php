<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Widgets;

use App\Enums\Outcomes;
use App\Models\RingaData;
use App\Models\RingaDataOutcome;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;

class RingaDataOutcomeWidget extends Widget implements HasForms
{
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
            'user_id' => auth()->id(),
            'coutcome' => $outcome->value,
        ]);

        $affectedRecords = $this->updateSameAddressRecords($outcome);

        Notification::make()
            ->title('Utfall registrerat')
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
