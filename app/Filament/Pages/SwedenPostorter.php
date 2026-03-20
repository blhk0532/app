<?php

namespace App\Filament\Pages;

use Filament\Pages\Page;
use App\Filament\Resources\SwedenPostorters\SwedenPostorterResource;
use App\Filament\Resources\SwedenPostnummers\Widgets\MapPickerWidget;
use App\Filament\Widgets\SwedenPostorterWidget;
use Illuminate\Contracts\Support\Htmlable;
use BackedEnum;
use Filament\Support\Icons\Heroicon;
use Filament\Resources\Resource;
use UnitEnum;
use App\Actions\ImportSwedenKommunerCountsFromRatsit;
use App\Filament\Resources\SwedenKommuners\SwedenKommunerResource;
use App\Filament\Widgets\KommunerMapWidget2;
use App\Filament\Widgets\LocationMapPickerWidget;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ListRecords;
use Throwable;

class SwedenPostorter extends Page
{
     protected static string $resource = SwedenPostorterResource::class;

         protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMapPin;

               protected static string|UnitEnum|null $navigationGroup = 'Sweden GEO';

                 protected static ?string $navigationLabel = 'Postorter';

    protected function getHeaderActions(): array
    {
        return [

        ];
    }

    public function getTitle(): string|Htmlable
    {
        return ' ';
    }

    protected function getHeaderWidgets(): array
    {
        return [

        ];
    }

    protected function getFooterWidgets(): array
    {
        return [

              KommunerMapWidget2::make(),
            LocationMapPickerWidget::class,   // Interactive picker
            SwedenPostorterWidget::class,     // Table with map
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) SwedenPostorterResource::getModel()::count();
    }

    }
