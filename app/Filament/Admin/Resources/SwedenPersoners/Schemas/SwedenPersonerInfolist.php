<?php

namespace App\Filament\Admin\Resources\SwedenPersoners\Schemas;

use Filament\Infolists\Components\IconEntry;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class SwedenPersonerInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('adress')
                    ->placeholder('-'),
                TextEntry::make('postnummer')
                    ->placeholder('-'),
                TextEntry::make('postort')
                    ->placeholder('-'),
                TextEntry::make('fornamn')
                    ->placeholder('-'),
                TextEntry::make('efternamn')
                    ->placeholder('-'),
                TextEntry::make('personnamn')
                    ->placeholder('-'),
                TextEntry::make('alder')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('kommun')
                    ->placeholder('-'),
                TextEntry::make('lan')
                    ->placeholder('-'),
                TextEntry::make('personnummer')
                    ->placeholder('-'),
                TextEntry::make('kon')
                    ->placeholder('-'),
                TextEntry::make('telefon')
                    ->placeholder('-'),
                TextEntry::make('civilstand')
                    ->placeholder('-'),
                TextEntry::make('adressandring')
                    ->placeholder('-'),
                TextEntry::make('bostadstyp')
                    ->placeholder('-'),
                TextEntry::make('agandeform')
                    ->placeholder('-'),
                TextEntry::make('boarea')
                    ->placeholder('-'),
                TextEntry::make('byggar')
                    ->placeholder('-'),
                TextEntry::make('personer')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('ratsit_link')
                    ->placeholder('-'),
                TextEntry::make('hitta_link')
                    ->placeholder('-'),
                TextEntry::make('merinfo_link')
                    ->placeholder('-'),
                TextEntry::make('eniro_link')
                    ->placeholder('-'),
                TextEntry::make('upplysning_link')
                    ->placeholder('-'),
                TextEntry::make('mrkoll_link')
                    ->placeholder('-'),
                IconEntry::make('is_hus')
                    ->boolean(),
                IconEntry::make('is_owner')
                    ->boolean(),
                IconEntry::make('is_active')
                    ->boolean(),
                IconEntry::make('is_queue')
                    ->boolean(),
                IconEntry::make('is_done')
                    ->boolean(),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('latitude')
                    ->numeric()
                    ->placeholder('-'),
                TextEntry::make('longitude')
                    ->numeric()
                    ->placeholder('-'),
            ]);
    }
}
