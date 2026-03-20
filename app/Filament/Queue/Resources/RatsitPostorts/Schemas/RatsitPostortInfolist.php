<?php

namespace App\Filament\Queue\Resources\RatsitPostorts\Schemas;

use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class RatsitPostortInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('post_ort'),
                TextEntry::make('kommun')
                    ->placeholder('-'),
                TextEntry::make('lat')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('lng')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('post_nummer'),
                TextEntry::make('personer_count')
                    ->numeric(),
                TextEntry::make('foretag_count')
                    ->numeric(),
                TextEntry::make('personer_link')
                    ->placeholder('-'),
                IconEntry::make('personer_link_status')
                    ->boolean(),
                TextEntry::make('foretag_link')
                    ->placeholder('-'),
                TextEntry::make('personer_kommun')
                    ->placeholder('-'),
                TextEntry::make('foretag_kommun')
                    ->placeholder('-'),
                IconEntry::make('foretag_link_status')
                    ->boolean(),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
            ]);
    }
}
