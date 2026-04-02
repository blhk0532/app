<?php

namespace App\Filament\Admin\Resources\OutgoingSms\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class OutgoingSmsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('phone')->label('Phone'),
                TextColumn::make('message')->label('Message')->copyable(),
                TextColumn::make('record_id')->label('Record ID')->hidden(),
                TextColumn::make('user_id')->label('User ID')->hidden(),
                TextColumn::make('type')->label('Type'),
                TextColumn::make('status')->label('Status'),
                TextColumn::make('is_success')->label('Ok?')->hidden(),
                TextColumn::make('api_message')->label('API'),
            ])
            ->filters([
                //
            ])
            ->recordActions([
            ])
            ->paginated()
            ->paginationPageOptions([10, 25, 50, 100])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ])
            ->recordUrl(null);
    }
}
