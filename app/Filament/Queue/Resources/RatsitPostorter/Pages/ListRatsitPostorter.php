<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\RatsitPostorter\Pages;

use App\Filament\Queue\Resources\RatsitPostorter\RatsitPostortResource;
use Filament\Resources\Pages\ListRecords;

class ListRatsitPostorter extends ListRecords
{
    protected static string $resource = RatsitPostortResource::class;
}
