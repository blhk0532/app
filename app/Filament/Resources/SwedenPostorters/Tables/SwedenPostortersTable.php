<?php

namespace App\Filament\Resources\SwedenPostorters\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use App\Exports\SwedenPostorterExporter;
use EightyNine\ExcelImport\ExcelImportAction;
use Filament\Actions\Action;
use Filament\Actions\ExportAction;
use Illuminate\Support\Facades\DB;
class SwedenPostortersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('post_ort')
                    ->searchable(),
                TextColumn::make('kommun')
                    ->searchable(),
                TextColumn::make('lan')
                    ->searchable(),
                TextColumn::make('latitude')
                  ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                TextColumn::make('longitude')
                  ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                TextColumn::make('personer')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('foretag')
                    ->numeric()
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
                Action::make('create')
                    ->label('Skapa Ny Postort')
                    ->color('')
                    ->icon('heroicon-o-plus-circle'),
                ExcelImportAction::make()
                    ->icon('heroicon-o-arrow-down-tray')
                    ->color('success')
                    ->label('CSV'),
                ExportAction::make()
                    ->label('CSV')
                    ->exporter(SwedenPostorterExporter::class)
                    ->icon('heroicon-o-arrow-up-tray')
                    ->color('danger'),
            ]);
    }
}
