<?php

namespace App\Filament\App\Resources\OutgoingSms\Pages;

use App\Filament\App\Resources\OutgoingSms\OutgoingSmsResource;
use App\Filament\App\Widgets\OutgoingSmsWidget;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Contracts\Support\Htmlable;

class ListOutgoingSms extends ListRecords
{
    protected static string $resource = OutgoingSmsResource::class;

    protected function getHeaderActions(): array
    {
        return [

        ];
    }

    public function getBreadcrumbs(): array
    {
        return [

        ];
    }

    public function getHeading(): string|Htmlable|null
    {
        return null;
    }

    protected function getHeaderWidgets(): array
    {
        return [
            OutgoingSmsWidget::class,
        ];
    }
}
