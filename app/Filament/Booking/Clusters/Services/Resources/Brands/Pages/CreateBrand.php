<?php

declare(strict_types=1);

namespace App\Filament\Booking\Clusters\Services\Resources\Brands\Pages;

use App\Filament\Booking\Clusters\Services\Resources\Brands\BrandResource;
use Filament\Resources\Pages\CreateRecord;

class CreateBrand extends CreateRecord
{
    protected static string $resource = BrandResource::class;
}
