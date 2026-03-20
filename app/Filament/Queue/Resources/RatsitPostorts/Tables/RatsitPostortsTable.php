<?php

namespace App\Filament\Queue\Resources\RatsitPostorts\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class RatsitPostortsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('post_ort')
                    ->searchable(),
                TextColumn::make('kommun')
                    ->searchable(),
                TextColumn::make('lat')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('lng')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('post_nummer')
                    ->searchable(),
                TextColumn::make('personer_count')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('foretag_count')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('personer_link')
                    ->searchable(),
                IconColumn::make('personer_link_status')
                    ->boolean(),
                TextColumn::make('foretag_link')
                    ->searchable(),
                TextColumn::make('personer_kommun')
                    ->searchable(),
                TextColumn::make('foretag_kommun')
                    ->searchable(),
                IconColumn::make('foretag_link_status')
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
