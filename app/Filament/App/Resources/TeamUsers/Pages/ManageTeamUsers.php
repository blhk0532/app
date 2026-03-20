<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\TeamUsers\Pages;

use App\Filament\App\Resources\TeamUsers\TeamUserResource;
use Filament\Resources\Pages\ManageRecords;
use Filament\Support\Assets\Css;
use Filament\Support\Facades\FilamentAsset;

class ManageTeamUsers extends ManageRecords
{
    protected static string $resource = TeamUserResource::class;

    protected function getHeaderActions(): array
    {
        FilamentAsset::register([
            Css::make('custom', __DIR__.'/../../resources/css/custom.css'),
        ]);

        return [

        ];
    }
}
