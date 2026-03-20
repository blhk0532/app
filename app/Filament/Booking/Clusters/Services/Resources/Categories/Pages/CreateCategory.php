<?php

declare(strict_types=1);

namespace App\Filament\Booking\Clusters\Services\Resources\Categories\Pages;

use App\Filament\Booking\Clusters\Services\Resources\Categories\CategoryResource;
use Filament\Resources\Pages\CreateRecord;

class CreateCategory extends CreateRecord
{
    protected static string $resource = CategoryResource::class;
}
