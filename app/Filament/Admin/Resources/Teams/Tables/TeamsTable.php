<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\Teams\Tables;

use Filament\Actions\DeleteAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;

class TeamsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('owner.name')
                    ->label(__('Owner'))
                    ->searchable()
                    ->sortable(),
                TextColumn::make('company.name')
                    ->label(__('Company'))
                    ->searchable()
                    ->sortable(),
                TextColumn::make('name')
                    ->searchable(),
                TextColumn::make('email')
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('phone')
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('website')
                    ->url(fn ($record) => $record->website)
                    ->openUrlInNewTab()
                    ->toggleable(),
                TextColumn::make('users_count')
                    ->counts('users')
                    ->label(__('Users'))
                    ->sortable(),
                ToggleColumn::make('personal_team'),
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
                ViewAction::make(),
                EditAction::make(),
                DeleteAction::make()
                 ->visible(fn () => auth()->user()->role === 'super'),
            ]);
    }
}
