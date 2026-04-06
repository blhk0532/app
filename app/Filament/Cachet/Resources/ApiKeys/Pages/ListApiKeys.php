<?php

namespace App\Filament\Cachet\Resources\ApiKeys\Pages;

use App\Filament\Cachet\Resources\ApiKeys\ApiKeyResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListApiKeys extends ListRecords
{
    protected string $view = 'cachet::filament.pages.api-key.index';

    protected static string $resource = ApiKeyResource::class;

    protected function getHeaderActions(): array
    {
        return [CreateAction::make()];
    }
}
