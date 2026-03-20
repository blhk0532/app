<?php

declare(strict_types=1);

namespace App\Filament\Data\Resources\RatsitStreets\Pages;

use App\Filament\Data\Resources\RatsitStreets\RatsitStreetResource;
use Filament\Resources\Pages\CreateRecord;

class CreateRatsitStreet extends CreateRecord
{
    protected static string $resource = RatsitStreetResource::class;
}
