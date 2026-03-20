<?php

namespace App\Filament\Queue\Resources\JobBatches\Pages;

use App\Filament\Queue\Resources\JobBatches\JobBatchResource;
use Filament\Resources\Pages\CreateRecord;

class CreateJobBatch extends CreateRecord
{
    protected static string $resource = JobBatchResource::class;
}
