<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class RingaDataInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('user_notes')
                    ->label('Anteckningar')
                    ->columnSpanFull()
                    ->html(),
            ]);
    }
}
