<?php

namespace App\Filament\Data\Resources\SverigePostnummers\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class SverigePostnummerInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            TextEntry::make('post_nummer'),
            TextEntry::make('post_ort'),
            TextEntry::make('post_lan'),
            TextEntry::make('kommun'),
            TextEntry::make('personer_count')->numeric()->placeholder('-'),
            TextEntry::make('foretag_count')->numeric()->placeholder('-'),
            TextEntry::make('updated_at')->dateTime()->placeholder('-'),
        ]);
    }
}
