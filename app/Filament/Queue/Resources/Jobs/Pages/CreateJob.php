<?php

namespace App\Filament\Queue\Resources\Jobs\Pages;

use App\Filament\Queue\Resources\Jobs\JobResource;
use Filament\Resources\Pages\CreateRecord;

class CreateJob extends CreateRecord
{
    protected static string $resource = JobResource::class;
}
