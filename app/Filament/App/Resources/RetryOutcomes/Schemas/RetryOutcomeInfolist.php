<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes\Schemas;

use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class RetryOutcomeInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make('Personlig information')
                    ->schema([
                        TextEntry::make('fornamn')
                            ->label('Förnamn'),
                        TextEntry::make('efternamn')
                            ->label('Efternamn'),
                        TextEntry::make('personnamn')
                            ->label('Namn'),
                        TextEntry::make('personnummer')
                            ->label('Personnummer'),
                        TextEntry::make('alder')
                            ->label('Ålder'),
                    ])
                    ->columns(3),

                Section::make('Kontaktinformation')
                    ->schema([
                        TextEntry::make('telefon')
                            ->label('Telefon'),
                        TextEntry::make('epost_adress')
                            ->label('E-post'),
                    ])
                    ->columns(2),

                Section::make('Adress')
                    ->schema([
                        TextEntry::make('gatuadress')
                            ->label('Gatuadress'),
                        TextEntry::make('postnummer')
                            ->label('Postnummer'),
                        TextEntry::make('postort')
                            ->label('Postort'),
                        TextEntry::make('kommun')
                            ->label('Kommun'),
                    ])
                    ->columns(2),

                Section::make('Utfall')
                    ->schema([
                        TextEntry::make('outcome')
                            ->label('Utfall')
                            ->badge(),
                        TextEntry::make('outcome_category')
                            ->label('Kategori')
                            ->badge()
                            ->color(fn (?string $state): string => match ($state) {
                                'Retry' => 'warning',
                                'Later' => 'info',
                                default => 'gray',
                            }),
                        TextEntry::make('aterkom_at')
                            ->label('Återkom')
                            ->dateTime('d M Y H:i'),
                    ])
                    ->columns(3),

                Section::make('Anteckningar')
                    ->schema([
                        TextEntry::make('user_notes')
                            ->label('Anteckningar')
                            ->columnSpanFull(),
                    ])
                    ->columns(1),

                Section::make('System')
                    ->schema([
                        TextEntry::make('user.name')
                            ->label('Ansvarig'),
                        TextEntry::make('attempts')
                            ->label('Försök'),
                        TextEntry::make('created_at')
                            ->label('Skapad')
                            ->dateTime('d M Y H:i'),
                    ])
                    ->columns(3),
            ]);
    }
}
