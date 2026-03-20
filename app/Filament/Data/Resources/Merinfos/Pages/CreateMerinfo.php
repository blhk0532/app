<?php

declare(strict_types=1);

namespace App\Filament\Data\Resources\Merinfos\Pages;

use App\Filament\Data\Resources\Merinfos\MerinfoResource;
use Filament\Resources\Pages\CreateRecord;

class CreateMerinfo extends CreateRecord
{
    protected static string $resource = MerinfoResource::class;
}
