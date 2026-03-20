<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use App\Filament\Resources\SwedenPostnummers\SwedenPostnummerResource;
use App\Filament\Resources\SwedenPostnummers\Widgets\MapPickerWidget;
use Illuminate\Contracts\Support\Htmlable;
use BackedEnum;
use Filament\Support\Icons\Heroicon;
use Filament\Resources\Resource;
use UnitEnum;

class SwedenPostnummer extends Page
{
    protected string $view = 'filament.pages.sweden-postnummer';

        protected static string|UnitEnum|null $navigationGroup = 'Sweden GEO';

            protected static ?string $navigationLabel = 'Postnummer';

              protected static ?int $navigationSort = 3;

    protected static ?string $model = SwedenPostnummer::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMapPin;

    protected function getHeaderWidgets(): array
    {
        return [
            MapPickerWidget::class,           // Table with map
        ];
    }

    public function getTitle(): string|Htmlable
    {
        return ' ';
    }


    public static function getNavigationBadge(): ?string
    {
        return (string) SwedenPostnummerResource::getModel()::count();
    }

    }
