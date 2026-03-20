<?php

namespace App\Filament\Queue\Resources\PrivateData\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PrivateDataTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                TextColumn::make('personnamn')
                    ->label('Name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('personnummer')
                    ->label('Personal Number')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('gatuadress')
                    ->label('Address')
                    ->searchable(),
                TextColumn::make('postnummer')
                    ->label('Postal Code')
                    ->searchable(),
                TextColumn::make('postort')
                    ->label('City')
                    ->searchable(),
                TextColumn::make('kommun')
                    ->label('Municipality')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                TextColumn::make('lan')
                    ->label('County')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                TextColumn::make('fodelsedag')
                    ->label('Birth Date')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('alder')
                    ->label('Age')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('kon')
                    ->label('Gender')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('civilstand')
                    ->label('Civil Status')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('telfonnummer')
                    ->label('Phone Number')
                    ->formatStateUsing(fn ($state) => is_array($state) ? implode(', ', $state) : $state)
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('telefon')
                    ->label('Telefon')
                    ->formatStateUsing(fn ($state) => is_array($state) ? implode(', ', $state) : $state)
                    ->searchable()
                    ->hidden()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('ratsit_link')
                    ->label('Ratsit Link')
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('hitta_link')
                    ->label('Hitta Link')
                    ->searchable()
                    ->toggleable(),
                IconColumn::make('is_active')
                    ->label('Active')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->boolean(),
                IconColumn::make('is_update')
                    ->label('Update')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->boolean(),
                TextColumn::make('created_at')
                    ->label('Created')
                    ->dateTime()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->label('Updated')
                    ->dateTime()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
            ])
            ->paginated([10, 25, 50, 100, 250, 500, 1000])
            ->defaultPaginationPageOption(25)
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
