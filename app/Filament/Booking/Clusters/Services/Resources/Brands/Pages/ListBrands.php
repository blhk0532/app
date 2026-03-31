<?php

declare(strict_types=1);

namespace App\Filament\Booking\Clusters\Services\Resources\Brands\Pages;

use Adultdate\FilamentBooking\Filament\Exports\Booking\BrandExporter;
use App\Filament\Booking\Clusters\Services\Resources\Brands\BrandResource;
use Filament\Actions\CreateAction;
use Filament\Actions\ExportAction;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Contracts\Support\Htmlable;

class ListBrands extends ListRecords
{
    protected static string $resource = BrandResource::class;


        public function getBreadcrumbs(): array
    {
        return [];
    }
    protected function getHeaderActions(): array
    {
        return [];
    }
    public function getHeading(): string|Htmlable|null
    {
        return null;
    }
}
