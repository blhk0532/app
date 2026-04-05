<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\SwedenKommuners\Tables;

use App\Actions\ImportSwedenKommunerCountsFromRatsit;
use App\Jobs\RunAdresserRatsitJob;
use App\Jobs\RunGatorRatsitJob;
use App\Jobs\RunPersonerRatsitJob;
use App\Models\SwedenPersoner;
use Devletes\FilamentProgressBar\Tables\Columns\ProgressBarColumn;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use Throwable;

class SwedenKommunersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('kommun')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('lan')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('personer')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                ProgressBarColumn::make('personer_count')
                    ->label('DB Progress (Persons)')
                    ->maxValue(fn ($record) => $record->personer ?: 1)
                    ->showProgressValue()
                    ->showPercentage()
                    ->textPosition('inside')
                    ->size('sm')
                    ->sortable(),
                TextColumn::make('sweden_postorter_count')
                    ->counts('swedenPostorter')
                    ->label('Postorter')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('sweden_postnummer_count')
                    ->counts('swedenPostnummer')
                    ->label('Postnummer')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('sweden_adresser_count')
                    ->counts('swedenAdresser')
                    ->label('Adresser')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('sweden_gator_count')
                    ->counts('swedenGator')
                    ->label('Gator')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
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
                ViewAction::make(),
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
                    BulkAction::make('runGatorRatsit')
                        ->label('Run Gator Ratsit')
                        ->icon('heroicon-o-map')
                        ->color('info')
                        ->requiresConfirmation()
                        ->modalHeading('Queue Gator Ratsit')
                        ->modalDescription('This will queue sweden_gator_ratsit.mjs --kommun for each selected kommun. Jobs will run asynchronously via the queue.')
                        ->action(function (Collection $records): void {
                            $queued = 0;

                            foreach ($records as $record) {
                                if (empty($record->kommun)) {
                                    continue;
                                }

                                dispatch(new RunGatorRatsitJob($record->kommun));
                                $queued++;
                            }

                            Notification::make()
                                ->success()
                                ->title('Gator Ratsit queued')
                                ->body("Queued {$queued} job(s).")
                                ->send();
                        })
                        ->deselectRecordsAfterCompletion(),
                    BulkAction::make('runAdresserRatsit')
                        ->label('Run Adresser Ratsit')
                        ->icon('heroicon-o-home')
                        ->color('warning')
                        ->requiresConfirmation()
                        ->modalHeading('Queue Adresser Ratsit')
                        ->modalDescription('This will queue sweden_adresser_ratsit.mjs --kommun for each selected kommun. Jobs will run asynchronously via the queue.')
                        ->action(function (Collection $records): void {
                            $queued = 0;

                            foreach ($records as $record) {
                                if (empty($record->kommun)) {
                                    continue;
                                }

                                dispatch(new RunAdresserRatsitJob($record->kommun));
                                $queued++;
                            }

                            Notification::make()
                                ->success()
                                ->title('Adresser Ratsit queued')
                                ->body("Queued {$queued} job(s).")
                                ->send();
                        })
                        ->deselectRecordsAfterCompletion(),
                    BulkAction::make('updatePersonerCount')
                        ->label('Update DB Persons Count')
                        ->icon('heroicon-o-calculator')
                        ->color('gray')
                        ->requiresConfirmation()
                        ->modalHeading('Update DB Persons Count')
                        ->modalDescription('This counts actual records in sweden_personer for each selected kommun and saves the total to personer_count.')
                        ->action(function (Collection $records): void {
                            $updated = 0;

                            foreach ($records as $record) {
                                if (empty($record->kommun)) {
                                    continue;
                                }

                                $count = SwedenPersoner::where('kommun', $record->kommun)->count();
                                $record->update(['personer_count' => $count]);
                                $updated++;
                            }

                            Notification::make()
                                ->success()
                                ->title('DB Persons Count Updated')
                                ->body("Updated {$updated} kommun(s).")
                                ->send();
                        })
                        ->deselectRecordsAfterCompletion(),
                    BulkAction::make('runPersonerRatsit')
                        ->label('Run Personer Ratsit')
                        ->icon('heroicon-o-users')
                        ->color('primary')
                        ->requiresConfirmation()
                        ->modalHeading('Queue Personer Ratsit')
                        ->modalDescription('This will queue sweden_personer_ratsit.mjs --kommun for each selected kommun. Jobs will run asynchronously via the queue.')
                        ->action(function (Collection $records): void {
                            $queued = 0;

                            foreach ($records as $record) {
                                if (empty($record->kommun)) {
                                    continue;
                                }

                                dispatch(new RunPersonerRatsitJob($record->kommun));
                                $queued++;
                            }

                            Notification::make()
                                ->success()
                                ->title('Personer Ratsit queued')
                                ->body("Queued {$queued} job(s).")
                                ->send();
                        })
                        ->deselectRecordsAfterCompletion(),
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ])
            ->defaultSort('updated_at', 'desc')
            ->paginated([10, 25, 50, 100, 200, 500])
            ->defaultPaginationPageOption(25);
    }
}
