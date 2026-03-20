<?php

namespace App\Filament\Admin\Resources\WhatsappAgents\Pages;

use App\Filament\Admin\Resources\WhatsappAgents\WhatsappAgentResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListWhatsappAgents extends ListRecords
{
    protected static string $resource = WhatsappAgentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
