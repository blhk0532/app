<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Filament\Resources\SwedenKommuners\SwedenKommunerResource;
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

class SwedenKommunerWidget extends BaseWidget
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
           ->query(SwedenKommunerResource::getEloquentQuery())
           ->heading('')
            ->columns([
                TextColumn::make('kommun')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('lan')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('personer')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('foretag')
                    ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
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
                TextColumn::make('deleted_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                TrashedFilter::make(),
            ])
            ->recordActions([
                ViewAction::make()
                ->label('Visa')
                ->icon('heroicon-o-eye')
                ->url(fn (Model $record) => SwedenKommunerResource::getUrl('view', ['record' => $record])),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('importRatsitCounts')
                        ->label('Import Ratsit Counts')
                        ->icon('heroicon-o-arrow-down-tray')
                        ->color('success')
                        ->requiresConfirmation()
                        ->modalHeading('Import Ratsit counts')
                        ->modalDescription('This updates only the selected sweden_kommuner personer and foretag values from current ratsit_kommuner counts. No rows are deleted or recreated.')
                        ->action(function (Collection $records, ImportSwedenKommunerCountsFromRatsit $importAction): void {
                            try {
                                $stats = $importAction->handle($records->modelKeys());

                                Notification::make()
                                    ->success()
                                    ->title('Ratsit counts imported')
                                    ->body("Processed {$stats['processed']} selected rows, updated {$stats['updated']}, unchanged {$stats['unchanged']}, unmatched {$stats['unmatched']}.")
                                    ->send();
                            } catch (Throwable $throwable) {
                                Notification::make()
                                    ->danger()
                                    ->title('Import failed')
                                    ->body($throwable->getMessage())
                                    ->send();
                            }
                        })
                        ->deselectRecordsAfterCompletion(),
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ]);
    }
}
