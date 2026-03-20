<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Pages;

use Anish\TextInputEntry\Traits\TextInputEntryTrait;
use App\Filament\App\Resources\RingaDatas\Widgets\RingaDataCalendar;
use App\Filament\App\Resources\RingaListan\RingaListanResource;
use App\Models\RingaData;
use Filament\Resources\Pages\ViewRecord;
use Filament\Support\Enums\Width;

class ViewRingaData extends ViewRecord
{
    use TextInputEntryTrait;

    public ?int $selectedRecordId = null;

    protected static string $resource = RingaListanResource::class;

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

    protected function getFooterWidgets(): array
    {
        return [
            //   RingaDataCalendar::class,
        ];
    }

    protected function getHeaderWidgetsData(): array
    {
        return [
            'record' => $this->selectedRecordId ? RingaData::find($this->selectedRecordId) : null,
        ];
    }
}
