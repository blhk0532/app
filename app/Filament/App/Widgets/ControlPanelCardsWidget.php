<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Filament\Admin\Resources\Bookings\Resources\BookingsBoard;
use App\Filament\Admin\Resources\Tasks\Resources\TaskBoard;
use App\Filament\Admin\Resources\Users\UserResource;
use App\Filament\Admin\Resources\WhatsApp\Resources\SendWhatsapp;
use Filament\Widgets\Widget as BaseWidget;
use Harvirsidhu\FilamentCards\CardGroup;
use Harvirsidhu\FilamentCards\CardItem;

class ControlPanelCardsWidget extends BaseWidget
{
    protected static ?string $heading = 'Control Panel';

    protected static ?int $sort = -2;

    protected static bool $isLazy = false;

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
                        ->extraAttributes([
                            'style' => 'background:#18181b;padding-top:2rem;padding-bottom:2rem;',
                        ])
                        ->badgeColor('primary')
                        ->columnSpan('1/3'),
                    CardItem::make(SendWhatsapp::class)
                        ->description('Core application configuration')
                        ->icon('heroicon-o-chat-bubble-oval-left-ellipsis')
                        ->color('success')
                        ->badge('Beta')
                        ->badgeColor('success')
                        ->extraAttributes([
                            'style' => 'background:#18181b;padding-top:2rem;padding-bottom:2rem;',
                        ])
                        ->columnSpan('1/3'),
                    CardItem::make(UserResource::class)
                        ->description('Core application configuration')
                        ->icon('heroicon-o-user-plus')
                        ->color('danger')
                        ->badge('NEW')
                        ->badgeColor('danger')
                        ->extraAttributes([
                            'style' => 'background:#18181b;padding-top:2rem;padding-bottom:2rem;',
                        ])
                        ->columnSpan('1/3'),
                    CardItem::make(BookingsBoard::class)
                        ->description('Core application configuration')
                        ->icon('heroicon-o-clipboard-document-list')
                        ->label('Skrapning Queue')
                        ->color('warning')
                        ->badge('12')
                        ->extraAttributes([
                            'style' => 'background:#18181b;padding-top:2rem;padding-bottom:2rem;',
                        ])
                        ->badgeColor('warning')
                        ->columnSpan('1/3'),
                    CardItem::make(SendWhatsapp::class)
                        ->description('Core application configuration')
                        ->icon('heroicon-o-chat-bubble-oval-left-ellipsis')
                        ->color('gray')
                        ->badge('Beta')
                        ->extraAttributes([
                            'style' => 'background:#18181b;padding-top:2rem;padding-bottom:2rem;',
                        ])
                        ->badgeColor('gray')
                        ->columnSpan('1/3'),
                    CardItem::make(UserResource::class)
                        ->description('Core application configuration')
                        ->icon('heroicon-o-user-plus')
                        ->color('info')
                        ->badge('NEW')
                        ->extraAttributes([
                            'style' => 'background:#18181b;padding-top:2rem;padding-bottom:2rem;',
                        ])
                        ->badgeColor('info')
                        ->columnSpan('1/3'),
                ]),

        ];
    }
}
