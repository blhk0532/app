<?php

declare(strict_types=1);

namespace Adultdate\FilamentUser\Resources\UserResource\Tables;

use Filament\Tables\Actions\DeleteBulkAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class UsersTable
{
    public static function configure(Table $table): Table
    {
        return $table->columns([
            TextColumn::make('id')->sortable(),
            TextColumn::make('name')->searchable()->sortable(),
            TextColumn::make('email')->searchable(),
            TextColumn::make('phone'),
            TextColumn::make('role')->sortable(),
            TextColumn::make('type.label')->label('Type'),
            TextColumn::make('team'),
        ])->filters([
            // add filters here
        ])->actions([
            EditAction::make(),
        ])->bulkActions([
            DeleteBulkAction::make(),
        ]);
    }
}
