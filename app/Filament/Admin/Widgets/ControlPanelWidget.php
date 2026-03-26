<?php

declare(strict_types=1);

namespace App\Filament\Admin\Widgets;

use App\Filament\Admin\Pages\SendWhatsapp;
use App\Filament\Admin\Pages\TaskBoard;
use App\Filament\Admin\Resources\Users\UserResource;
use Filament\Widgets\Widget;
use Harvirsidhu\FilamentCards\CardGroup;
use Harvirsidhu\FilamentCards\CardItem;

class ControlPanelWidget extends Widget
{
    protected static ?string $title = '';

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
}
