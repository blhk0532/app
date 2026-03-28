<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\Teams\Schemas;

use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class TeamInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Section::make()
                    ->schema([
                        TextEntry::make('owner.name')
                            ->label(__('Owner')),
                        TextEntry::make('company.name')
                            ->label(__('Company')),
                        TextEntry::make('name'),
                        TextEntry::make('email'),
                        TextEntry::make('phone'),
                        TextEntry::make('website')
                            ->url(fn ($record) => $record->website)
                            ->openUrlInNewTab(),
                        IconEntry::make('personal_team')
                            ->boolean(),
                    ]),
            ]);
    }
}
