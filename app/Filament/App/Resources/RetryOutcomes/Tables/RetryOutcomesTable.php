<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes\Tables;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RetryOutcomesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('gatuadress')
                    ->label('Adress')
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('postnummer')
                    ->label('Postnr')
                    ->toggleable(),
                TextColumn::make('postort')
                    ->label('Ort')
                    ->toggleable(),
                TextColumn::make('personnamn')
                    ->label('Namn')
                    ->searchable(['fornamn', 'efternamn', 'personnamn']),
                TextColumn::make('outcome')
                    ->label('Utfall')
                    ->badge()
                    ->toggleable(),
                TextColumn::make('outcome_category')
                    ->label('Kategori')
                    ->badge()
                    ->color(fn (?string $state): string => match ($state) {
                        'Retry' => 'warning',
                        'Later' => 'info',
                        default => 'gray',
                    })
                    ->toggleable(),
                TextColumn::make('attempts')
                    ->label('Försök')
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('available_at')
                    ->label('Återkom')
                    ->dateTime('d M Y H:i')
                    ->sortable()
                    ->toggleable(),
            ])
            ->defaultSort('available_at', 'asc')
            ->filters([
                //
            ]);
    }
}
