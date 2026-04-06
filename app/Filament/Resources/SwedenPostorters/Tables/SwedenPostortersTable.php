<?php

namespace App\Filament\Resources\SwedenPostorters\Tables;

use App\Exports\SwedenPostorterExporter;
use App\Models\SwedenPostorter;
use EightyNine\ExcelImport\ExcelImportAction;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ExportAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class SwedenPostortersTable
{
    public static function configure(Table $table): Table
    {
        $maxPersoner = SwedenPostorter::max('personer') ?: 1;

        return $table
            ->columns([
                TextColumn::make('post_ort')
                    ->label('Postort')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('kommun')
                    ->label('Kommun')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('lan')
                    ->label('Län')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('personer')
                    ->label('Personer')
                    ->html()
                    ->sortable()
                    ->state(function (SwedenPostorter $record) use ($maxPersoner): string {
                        $val = $record->personer ?? 0;
                        $pct = (int) round(($val / $maxPersoner) * 100);
                        $formatted = number_format($val);

                        return '<div style="display:flex;align-items:center;gap:6px;min-width:130px">'
                            .'<div style="flex:1;background-color:rgb(229 231 235);border-radius:9999px;height:5px;overflow:hidden">'
                            .'<div style="background-color:rgb(99 102 241);height:5px;width:'.$pct.'%"></div>'
                            .'</div>'
                            .'<span style="font-size:0.75rem;min-width:3.5rem;text-align:right">'.$formatted.'</span>'
                            .'</div>';
                    }),
                TextColumn::make('postnummer')
                    ->label('Postnr')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('gator')
                    ->label('Gator')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('adresser')
                    ->label('Adresser')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('foretag')
                    ->label('Företag')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('latitude')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                TextColumn::make('longitude')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
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
            ])
            ->defaultSort('updated_at', 'desc')
            ->paginated([10, 25, 50, 100, 200, 500])
            ->defaultPaginationPageOption(25);
    }
}
