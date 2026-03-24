<?php

namespace App\Filament\Resources\SwedenGators\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SwedenGatorsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('gata')
                    ->label('Gatunamn')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('postnummer')
                    ->label('Postnr')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('postort')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('kommun')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('lan')
                    ->label('Landskap')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('personer')
                    ->label('Pers')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('företag')
                    ->hidden()
                    ->numeric()
                    ->sortable(),
                TextColumn::make('adresser')
                    ->label('Adrs')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('ratsit_link')
                    ->label('Ratsit')
                    ->limit(50)
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean(),
                IconColumn::make('is_queue')
                    ->label('Queue')
                    ->boolean(),
                IconColumn::make('is_done')
                    ->label('Done')
                    ->boolean(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
