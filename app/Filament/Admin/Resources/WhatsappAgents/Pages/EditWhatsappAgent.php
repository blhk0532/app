<?php

namespace App\Filament\Admin\Resources\WhatsappAgents\Pages;

use App\Filament\Admin\Resources\WhatsappAgents\WhatsappAgentResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditWhatsappAgent extends EditRecord
{
    protected static string $resource = WhatsappAgentResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
