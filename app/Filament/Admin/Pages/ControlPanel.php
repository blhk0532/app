<?php

declare(strict_types=1);

namespace App\Filament\Admin\Pages;

use BackedEnum;
use Harvirsidhu\FilamentCards\CardItem;
use Harvirsidhu\FilamentCards\Filament\Pages\CardsPage;

class ControlPanel extends CardsPage
{
    protected static BackedEnum|string|null $navigationIcon = 'heroicon-o-squares-2x2';

    protected static function getCards(): array
    {
        return [
            CardItem::make(TaskBoard::class),
        ];
    }

    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }
}
