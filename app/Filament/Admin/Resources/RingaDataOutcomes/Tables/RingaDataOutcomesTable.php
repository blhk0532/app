<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\RingaDataOutcomes\Tables;

use Filament\Actions;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RingaDataOutcomesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('ringa_data_id')
                    ->label('Ringa Data ID')
                    ->sortable(),
                TextColumn::make('ringaData.personnamn')
                    ->label('Person')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('ringaData.gatuadress')
                    ->label('Gatuadress')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('ringaData.postnummer')
                    ->label('Postnummer')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('ringaData.postort')
                    ->label('Postort')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('user.name')
                    ->label('User')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('coutcome')
                    ->label('Outcome')
                    ->searchable()
                    ->badge()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('Created')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
            ])
            ->recordActions([
                Actions\Action::make('ring')
                    ->label('Ring')
                    ->icon('heroicon-o-phone-arrow-up-right')
                    ->color('primary')
                    ->url(fn ($record) => $record->ringaData?->telefon ? 'tel:'.$record->ringaData->telefon : null),
            ])
            ->toolbarActions([
            ]);
    }
}
