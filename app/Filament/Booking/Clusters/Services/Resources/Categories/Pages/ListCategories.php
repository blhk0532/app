<?php

declare(strict_types=1);

namespace App\Filament\Booking\Clusters\Services\Resources\Categories\Pages;

use App\Filament\Booking\Clusters\Services\Resources\Categories\CategoryResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Contracts\Support\Htmlable;

class ListCategories extends ListRecords
{
    protected static string $resource = CategoryResource::class;

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
