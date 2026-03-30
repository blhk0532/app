<?php

namespace App\Filament\Admin\Resources\OutgoingSms\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class OutgoingSmsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('phone')->label('Phone'),
                TextColumn::make('message')->label('Message'),
                TextColumn::make('record_id')->label('Record ID'),
                TextColumn::make('user_id')->label('User ID'),
                TextColumn::make('type')->label('Type'),
                TextColumn::make('status')->label('Status'),
                TextColumn::make('api_message')->label('API'),
                TextColumn::make('is_success')->label('Is Success'),
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
