<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class RetryOutcomeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Personlig information')
                    ->schema([
                        TextInput::make('fornamn')
                            ->label('Förnamn')
                            ->maxLength(100),
                        TextInput::make('efternamn')
                            ->label('Efternamn')
                            ->maxLength(100),
                        TextInput::make('personnamn')
                            ->label('Fullständigt namn')
                            ->maxLength(200),
                        TextInput::make('personnummer')
                            ->label('Personnummer')
                            ->maxLength(20),
                    ])
                    ->columns(2),

                Section::make('Kontaktinformation')
                    ->schema([
                        TextInput::make('telefon')
                            ->label('Telefon')
                            ->tel()
                            ->maxLength(50),
                        TextInput::make('epost_adress')
                            ->label('E-post')
                            ->email()
                            ->maxLength(255),
                    ])
                    ->columns(2),

                Section::make('Adress')
                    ->schema([
                        TextInput::make('gatuadress')
                            ->label('Gatuadress')
                            ->maxLength(255),
                        TextInput::make('postnummer')
                            ->label('Postnummer')
                            ->maxLength(20),
                        TextInput::make('postort')
                            ->label('Postort')
                            ->maxLength(100),
                        TextInput::make('kommun')
                            ->label('Kommun')
                            ->maxLength(100),
                    ])
                    ->columns(2),

                Section::make('Anteckningar')
                    ->schema([
                        Textarea::make('user_notes')
                            ->label('Anteckningar')
                            ->rows(4),
                    ])
                    ->columns(1),
            ]);
    }
}
