<?php

declare(strict_types=1);

namespace App\Filament\Admin\Pages;

use App\Filament\Admin\Resources\Users\UserResource;
use App\Filament\Admin\Widgets\CachetStatusWidget;
use BackedEnum;
use Harvirsidhu\FilamentCards\CardGroup;
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
            CardGroup::make('Administration')
                ->icon('heroicon-o-cog-6-tooth')
                ->collapsible()
                ->schema([
                    CardItem::make(TaskBoard::class)
                        ->description('Core application configuration')
                        ->icon('heroicon-o-clipboard-document-list')
                        ->label('Skrapning Queue')
                        ->color('primary')
                        ->badge('12')
                        ->badgeColor('info')
                        ->columnSpan('1/3'),
                    CardItem::make(SendWhatsapp::class)
                        ->description('Core application configuration')
                        ->icon('heroicon-o-chat-bubble-oval-left-ellipsis')
                        ->color('primary')
                        ->badge('Beta')
                        ->badgeColor('success')
                        ->columnSpan('1/3'),
                    CardItem::make(UserResource::class)
                        ->description('Core application configuration')
                        ->icon('heroicon-o-user-plus')
                        ->color('secondary')
                        ->badge('NEW')
                        ->badgeColor('success')
                        ->columnSpan('1/3'),
                ]),

        ];
    }

    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }

    protected function getFooterWidgets(): array
    {
        return [
            CachetStatusWidget::class,
        ];
    }
}
