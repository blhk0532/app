<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaData\Pages;

use App\Filament\App\Resources\RingaData\RingaDataResource;
use App\Filament\App\Resources\RingaData\Widgets\RingaDataDisplayWidget;
use App\Filament\App\Resources\RingaData\Widgets\RingaDataOutcomeFormWidget;
use App\Filament\App\Resources\RingaData\Widgets\RingaDataPinpointWidget;
use App\Models\RingaData;
use Filament\Resources\Pages\ViewRecord;
use Filament\Support\Enums\Width;

class ViewRingaData extends ViewRecord
{
    public ?int $selectedRecordId = null;

    protected static string $resource = RingaDataResource::class;

    public function getHeaderWidgetsColumns(): int|array
    {
        return 2;
    }

    public function selectRecord(int $recordId): void
    {
        $this->selectedRecordId = $recordId;
        $this->dispatch('record-selected', recordId: $recordId);
    }

    public function getMaxContentWidth(): Width
    {
        return Width::Full;
    }

    protected function getHeaderActions(): array
    {
        return [];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            //    RingaDataPinpointWidget::class,
            //    RingaDataDisplayWidget::class,
            //    RingaDataOutcomeFormWidget::class,
        ];
    }

    protected function getHeaderWidgetsData(): array
    {
        return [
            'record' => $this->selectedRecordId ? RingaData::find($this->selectedRecordId) : null,
        ];
    }
}
