<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Widgets;

use App\Models\RingaData;
use Filament\Widgets\Widget;

class RingaDataDisplayWidget extends Widget
{
    public ?RingaData $record = null;

    public ?int $recordId = null;

    protected string $view = 'filament.app.resources.ringa-data.widgets.ringa-data-display-widget';

    protected int|string|array $columnSpan = 'md';

    protected static ?string $heading = 'Record Details';

    protected $listeners = ['record-selected' => 'updateRecord'];

    public function mount(): void
    {
        logger('RingaDataDisplayWidget mount', [
            'record_id' => $this->recordId,
            'record_present' => (bool) $this->record,
        ]);

        // If record is missing but recordId is provided, load it
        if (! $this->record && $this->recordId) {
            $this->record = RingaData::query()->find($this->recordId);
            logger('RingaDataDisplayWidget loaded record from recordId', [
                'recordId' => $this->recordId,
                'found' => (bool) $this->record,
            ]);
        }
    }

    public function updateRecord(int $recordId): void
    {
        $this->record = RingaData::query()->find($recordId);
        logger('RingaDataDisplayWidget updated record via event', ['recordId' => $recordId]);
    }
}
