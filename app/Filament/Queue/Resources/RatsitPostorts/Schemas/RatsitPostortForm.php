<?php

namespace App\Filament\Queue\Resources\RatsitPostorts\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class RatsitPostortForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('post_ort')
                    ->required(),
                TextInput::make('kommun'),
                TextInput::make('lat')
                    ->numeric(),
                TextInput::make('lng')
                    ->numeric(),
                TextInput::make('post_nummer')
                    ->required(),
                TextInput::make('personer_count')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('foretag_count')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('personer_link'),
                Toggle::make('personer_link_status')
                    ->required(),
                TextInput::make('foretag_link'),
                TextInput::make('personer_kommun'),
                TextInput::make('foretag_kommun'),
                Toggle::make('foretag_link_status')
                    ->required(),
            ]);
    }
}
