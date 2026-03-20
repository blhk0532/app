<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Filament\Resources\SwedenPostorters\SwedenPostorterResource;
use App\Actions\ImportSwedenKommunerCountsFromRatsit;
use App\Models\Shop\Order;
use Filament\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Squire\Models\Currency;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Notifications\Notification;
use Filament\Tables\Filters\TrashedFilter;
use Illuminate\Contracts\View\View;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Throwable;

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
        return $table
           ->query(SwedenPostorterResource::getEloquentQuery())
           ->heading('')
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
            ]);
    }
}
