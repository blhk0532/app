<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Contacts\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ContactInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Kontaktinformation')
                    ->schema([
                        TextEntry::make('name')
                            ->label('Namn'),
                        TextEntry::make('phone')
                            ->label('Telefon'),
                        TextEntry::make('email')
                            ->label('E-post'),
                    ])
                    ->columns(3),

                Section::make('Adress')
                    ->schema([
                        TextEntry::make('address')
                            ->label('Adress'),
                        TextEntry::make('postnummer')
                            ->label('Postnummer'),
                        TextEntry::make('postort')
                            ->label('Postort'),
                    ])
                    ->columns(3),

                Section::make('Anteckningar')
                    ->schema([
                        TextEntry::make('notes')
                            ->label('Anteckningar')
                            ->columnSpanFull(),
                    ])
                    ->columns(1),

                Section::make('System')
                    ->schema([
                        TextEntry::make('user.name')
                            ->label('Skapad av'),
                        TextEntry::make('created_at')
                            ->label('Skapad')
                            ->dateTime('d M Y H:i'),
                    ])
                    ->columns(2),
            ]);
    }
}
