<?php

namespace App\Filament\Cachet\Resources\IncidentTemplates\Pages;

use App\Filament\Cachet\Resources\IncidentTemplates\IncidentTemplateResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListIncidentTemplates extends ListRecords
{
    protected static string $resource = IncidentTemplateResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
