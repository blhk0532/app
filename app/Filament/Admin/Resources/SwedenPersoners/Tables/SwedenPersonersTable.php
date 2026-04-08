<?php

namespace App\Filament\Admin\Resources\SwedenPersoners\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SwedenPersonersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('adress')
                    ->searchable(),
                TextColumn::make('postnummer')
                    ->searchable(),
                TextColumn::make('postort')
                    ->searchable(),
                TextColumn::make('fornamn')
                    ->searchable(),
                TextColumn::make('efternamn')
                    ->searchable(),
                TextColumn::make('personnamn')
                    ->searchable(),
                TextColumn::make('alder')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('kommun')
                    ->searchable(),
                TextColumn::make('lan')
                    ->searchable(),
                TextColumn::make('personnummer')
                    ->searchable(),
                TextColumn::make('kon')
                    ->searchable(),
                TextColumn::make('telefon')
                    ->searchable(),
                TextColumn::make('civilstand')
                    ->searchable(),
                TextColumn::make('adressandring')
                    ->searchable(),
                TextColumn::make('bostadstyp')
                    ->searchable(),
                TextColumn::make('agandeform')
                    ->searchable(),
                TextColumn::make('boarea')
                    ->searchable(),
                TextColumn::make('byggar')
                    ->searchable(),
                TextColumn::make('personer')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('ratsit_link')
                    ->searchable(),
                TextColumn::make('hitta_link')
                    ->searchable(),
                TextColumn::make('merinfo_link')
                    ->searchable(),
                TextColumn::make('eniro_link')
                    ->searchable(),
                TextColumn::make('upplysning_link')
                    ->searchable(),
                TextColumn::make('mrkoll_link')
                    ->searchable(),
                IconColumn::make('is_hus')
                    ->boolean(),
                IconColumn::make('is_owner')
                    ->boolean(),
                IconColumn::make('is_active')
                    ->boolean(),
                IconColumn::make('is_queue')
                    ->boolean(),
                IconColumn::make('is_done')
                    ->boolean(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('latitude')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('longitude')
                    ->numeric()
                    ->sortable(),
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
