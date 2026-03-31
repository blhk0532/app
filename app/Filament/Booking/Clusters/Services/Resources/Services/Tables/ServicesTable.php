<?php

declare(strict_types=1);

namespace App\Filament\Booking\Clusters\Services\Resources\Services\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Filament\Actions\CreateAction;

class ServicesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                ->label('Service Tjänst')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('service_code')
                    ->label('Service Kod')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('brand.name')
                    ->label('Företag')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('price')
                    ->label('Pris (SEK)')
                    ->money('SEK', locale: 'sv')
                    ->sortable(),
                TextColumn::make('time_duration')
                    ->label('Tid')
                    ->suffix(' min')
                    ->sortable()
                    ->toggleable(),
                IconColumn::make('is_available')
                    ->label('Aktiv')
                    ->boolean()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('status')
                    ->badge(),
                TextColumn::make('created_at')
                    ->date()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                TernaryFilter::make('is_available')
                    ->label('Available'),
                TernaryFilter::make('is_visible')
                    ->label('Visible'),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
                CreateAction::make()
            ])
            ->defaultSort('created_at', 'desc');
    }
}
