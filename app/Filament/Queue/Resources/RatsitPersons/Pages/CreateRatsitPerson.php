<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\RatsitPersons\Pages;

use App\Filament\Queue\Resources\RatsitPersons\RatsitPersonResource;
use Filament\Resources\Pages\CreateRecord;

class CreateRatsitPerson extends CreateRecord
{
    protected static string $resource = RatsitPersonResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
