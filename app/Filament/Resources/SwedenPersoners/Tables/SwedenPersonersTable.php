<?php

declare(strict_types=1);

namespace App\Filament\Resources\SwedenPersoners\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class SwedenPersonersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('personnamn')
                    ->label('Namn')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('fornamn')
                    ->label('Förnamn')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('efternamn')
                    ->label('Efternamn')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('alder')
                    ->label('Ålder')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('kon')
                    ->label('Kön')
                    ->sortable(),
                TextColumn::make('adress')
                    ->label('Adress')
                    ->searchable(),
                TextColumn::make('postnummer')
                    ->label('Postnummer')
                    ->searchable(),
                TextColumn::make('postort')
                    ->label('Postort')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('kommun')
                    ->label('Kommun')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('telefon')
                    ->label('Telefon')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('civilstand')
                    ->label('Civilstånd')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('bostadstyp')
                    ->label('Bostadstyp')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('personer')
                    ->label('Hushåll')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                IconColumn::make('is_hus')
                    ->label('Hus')
                    ->boolean()
                    ->toggleable(isToggledHiddenByDefault: true),
                IconColumn::make('is_owner')
                    ->label('Ägare')
                    ->boolean()
                    ->toggleable(isToggledHiddenByDefault: true),
                IconColumn::make('is_active')
                    ->label('Aktiv')
                    ->boolean()
                    ->sortable(),
                IconColumn::make('is_done')
                    ->label('Klar')
                    ->boolean()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Filter::make('is_active')
                    ->label('Aktiva')
                    ->query(fn (Builder $query): Builder => $query->where('is_active', true))
                    ->default(),
                Filter::make('is_done')
                    ->label('Klara')
                    ->query(fn (Builder $query): Builder => $query->where('is_done', true)),
                Filter::make('is_owner')
                    ->label('Ägare')
                    ->query(fn (Builder $query): Builder => $query->where('is_owner', true)),
                Filter::make('is_hus')
                    ->label('Hus')
                    ->query(fn (Builder $query): Builder => $query->where('is_hus', true)),
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
