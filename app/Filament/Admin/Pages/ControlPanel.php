<?php

declare(strict_types=1);

namespace App\Filament\Admin\Pages;

use BackedEnum;
use Harvirsidhu\FilamentCards\CardItem;
use Harvirsidhu\FilamentCards\Filament\Pages\CardsPage;

class ControlPanel extends CardsPage
{
    protected static BackedEnum|string|null $navigationIcon = 'heroicon-o-squares-2x2';

    protected static ?string $title = '';

    protected static ?string $navigationLabel = 'Control Panel';

    protected static function getCards(): array
    {
        return [
            CardItem::make(TaskBoard::class),
               CardItem::make(SendWhatsapp::class),
        ];
    }

    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }
}
