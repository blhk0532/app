<?php

declare(strict_types=1);

namespace App\Filament\Booking\Clusters\Services\Resources\Services\Pages;

use App\Filament\Booking\Clusters\Services\Resources\Services\ServiceResource;
use Filament\Actions;
use Filament\Pages\Concerns\ExposesTableToWidgets;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Contracts\Support\Htmlable;

class ListServices extends ListRecords
{
    use ExposesTableToWidgets;

    protected static string $resource = ServiceResource::class;

    protected function getHeaderWidgets(): array
    {
        return ServiceResource::getWidgets();
    }

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
