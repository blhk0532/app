<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDataOutcomes\Tables;

use App\Delius\Patches\UserField\UserColumn;
use Filament\Actions;
use Filament\Support\Enums\Size;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RingaDataOutcomesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([

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
                TextColumn::make('coutcome')
                    ->label('Outcome')
                    ->searchable()
                    ->badge()
                    ->sortable(),
                UserColumn::make('id')
                    ->showActiveState() // Show active/inactive indicator
                    ->hidden()
                    ->avatarUrl('')
                    ->size(Size::Small) // Set avatar size
                    ->label('User'),
                TextColumn::make('created_at')
                    ->label('Timestamp')
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
