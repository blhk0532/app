<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Contacts\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ContactForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Kontaktinformation')
                    ->schema([
                        TextInput::make('name')
                            ->label('Namn')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('phone')
                            ->label('Telefon')
                            ->tel()
                            ->maxLength(50),
                        TextInput::make('email')
                            ->label('E-post')
                            ->email()
                            ->maxLength(255),
                    ])
                    ->columns(3),

                Section::make('Adress')
                    ->schema([
                        TextInput::make('address')
                            ->label('Adress')
                            ->maxLength(255),
                        TextInput::make('postnummer')
                            ->label('Postnummer')
                            ->maxLength(20),
                        TextInput::make('postort')
                            ->label('Postort')
                            ->maxLength(100),
                    ])
                    ->columns(3),

                Section::make('Anteckningar')
                    ->schema([
                        Textarea::make('notes')
                            ->label('Anteckningar')
                            ->rows(4),
                    ])
                    ->columns(1),
            ]);
    }
}
