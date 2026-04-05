<?php

declare(strict_types=1);

namespace App\Filament\Geo\Resources\Jobs\Pages;

use App\Filament\Geo\Resources\Jobs\JobResource;
use Filament\Resources\Pages\CreateRecord;

class CreateJob extends CreateRecord
{
    protected static string $resource = JobResource::class;
}
