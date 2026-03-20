<?php

namespace App\Filament\Data\Resources\SverigePostnummers\Tables;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SverigePostnummersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('post_nummer')->sortable()->searchable(),
                TextColumn::make('post_ort')->sortable()->searchable(),
                TextColumn::make('post_lan')->sortable(),
                TextColumn::make('kommun')->sortable()->searchable(),
                TextColumn::make('personer_count')->sortable(),
                TextColumn::make('foretag_count')->sortable(),
            ])
            ->filters([
                // add filters if needed
            ])
            ->actions([
                // default view/edit
            ])
            ->toolbarActions([
                // none
            ]);
    }
}
