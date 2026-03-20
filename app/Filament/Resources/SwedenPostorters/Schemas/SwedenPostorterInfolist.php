<?php

namespace App\Filament\Resources\SwedenPostorters\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;

class SwedenPostorterInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Group::make()
                    ->schema([
                        Section::make('Kommun Information')
                            ->schema([
                TextEntry::make('post_ort'),
                TextEntry::make('kommun')
                    ->placeholder('-'),
                TextEntry::make('lan')
                    ->placeholder('-'),
                TextEntry::make('personer')
                    ->numeric()
                    ->placeholder('-'),
                            ])
                            ->columnSpan('full')
                            ->columns(4),
                    ])
                    ->columnSpan('full'),
            ]);
    }
}

