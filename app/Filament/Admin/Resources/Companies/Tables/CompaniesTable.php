<?php

namespace App\Filament\Admin\Resources\Companies\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class CompaniesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('owner.name')
                    ->label('Main Owner')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('owners.name')
                    ->label('Owners')
                    ->badge()
                    ->separator(', ')
                    ->toggleable(),
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('website')
                    ->url(fn ($record) => $record->website)
                    ->openUrlInNewTab()
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('teams_count')
                    ->counts('teams')
                    ->label('Teams')
                    ->sortable(),
                TextColumn::make('users_count')
                    ->counts('users')
                    ->label('Users')
                    ->sortable(),
                IconColumn::make('personal_company')
                    ->label('Personal')
                    ->boolean(),
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
