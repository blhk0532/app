<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Filament\Resources\BackupResource\Pages\ListBackups;
use App\Filament\Resources\CompanyResource\Pages\Overview;
use App\Filament\Resources\KommunerResource\Pages\ListKommuners;
use App\Filament\Resources\LogResource\Pages\ListLogs;
use App\Filament\Resources\PostorterResource\Pages\ListPostorters;
use App\Filament\Resources\UserResource\Pages\ListUsers;
use Filament\Widgets\Widget as CardWidget;
use Harvirsidhu\FilamentCards\CardGroup;
use Harvirsidhu\FilamentCards\CardItem;

class ControlPanelWidget extends CardWidget
{
    protected static ?string $heading = 'Control Panel';

    protected static ?int $sort = -2;

    protected static bool $isLazy = false;

    protected static function getCards(): array
    {
        return [
            CardGroup::make('General Settings')
                ->icon('heroicon-o-cog')
                ->schema([
                    CardItem::make(Overview::class)
                        ->label('Company Overview')
                        ->icon('heroicon-o-building-office')
                        ->color('primary'),

                    CardItem::make(ListUsers::class)
                        ->label('User Management')
                        ->icon('heroicon-o-users')
                        ->color('success'),
                ]),

            CardGroup::make('Data Management')
                ->icon('heroicon-o-database')
                ->schema([
                    CardItem::make(ListPostorters::class)
                        ->label('Postorter Management')
                        ->icon('heroicon-o-map-pin')
                        ->color('warning'),

                    CardItem::make(ListKommuners::class)
                        ->label('Kommuner Management')
                        ->icon('heroicon-o-map')
                        ->color('info'),
                ]),

            CardGroup::make('System')
                ->icon('heroicon-o-cpu-chip')
                ->schema([
                    CardItem::make(ListBackups::class)
                        ->label('Backups')
                        ->icon('heroicon-o-archive')
                        ->color('gray'),

                    CardItem::make(ListLogs::class)
                        ->label('System Logs')
                        ->icon('heroicon-o-document-text')
                        ->color('danger'),
                ]),
        ];
    }
}
