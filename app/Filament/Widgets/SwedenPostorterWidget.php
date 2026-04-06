<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Filament\Resources\SwedenPostorters\SwedenPostorterResource;
use App\Models\SwedenPostorter;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Model;

class SwedenPostorterWidget extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 2;

    public function getTableRecordTitle(Model $record): ?string
    {
        return ' ';
    }

    protected function getTableHeader(): View|Htmlable|null
    {
        return null;
    }

    public function getHeading(): ?string
    {
        return ' ';
    }

    protected function getTableHeading(): string|Htmlable|null
    {
        return null;
    }

    public function table(Table $table): Table
    {
        $maxPersoner = SwedenPostorter::max('personer') ?: 1;

        return $table
            ->query(SwedenPostorterResource::getEloquentQuery())
            ->heading('')
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
            ]);
    }
}
