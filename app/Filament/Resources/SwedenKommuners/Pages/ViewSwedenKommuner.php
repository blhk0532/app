<?php

namespace App\Filament\Resources\SwedenKommuners\Pages;

use App\Filament\Resources\SwedenKommuners\SwedenKommunerResource;
use App\Filament\Widgets\KommunViewMapWidget;
use App\Filament\Widgets\KommunViewPostorterMapWidget;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewSwedenKommuner extends ViewRecord
{
    protected static string $resource = SwedenKommunerResource::class;

    protected static ?string $title = 'View Kommun';

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            KommunViewMapWidget::class,
            KommunViewPostorterMapWidget::class,
        ];
    }

    public function getWidgetData(): array
    {
        $record = $this->getRecord();

        return [
            'kommunName' => (string) ($record->kommun ?? ''),
            'kommunLatitude' => $record->latitude,
            'kommunLongitude' => $record->longitude,
            'kommunPersoner' => $record->personer,
        ];
    }
}
