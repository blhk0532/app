<?php

declare(strict_types=1);

namespace App\Filament\Booking\Pages;

use BackedEnum;
use Filament\Pages\Page;
use Filament\Support\Enums\Width;
use UnitEnum;

class GoogleSheets extends Page
{
    protected string $view = 'filament.booking.pages.google-sheets';

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationLabel = 'Google Sheets';

    protected static ?string $title = '';

    protected static ?int $navigationSort = 10;

    protected static ?string $slug = 'google-sheets';

    protected static string|UnitEnum|null $navigationGroup = 'Google Services';

    public function getMaxContentWidth(): Width
    {
        return Width::Full;
    }
}
