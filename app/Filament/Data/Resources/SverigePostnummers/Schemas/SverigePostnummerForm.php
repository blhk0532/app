<?php

namespace App\Filament\Data\Resources\SverigePostnummers\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class SverigePostnummerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->columns(1)
            ->schema([
                Section::make('General')
                    ->schema([
                        TextInput::make('post_nummer')->required()->maxLength(20),
                        TextInput::make('post_ort')->required()->maxLength(255),
                        TextInput::make('post_lan')->required()->maxLength(255),
                        TextInput::make('kommun')->maxLength(255),
                    ]),
                Section::make('Counts')
                    ->schema([
                        TextInput::make('personer_count')->type('number')->required(),
                        TextInput::make('foretag_count')->type('number')->required(),
                    ]),
            ]);
    }
}
