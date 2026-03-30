<?php

declare(strict_types=1);

namespace App\Filament\Resources\MerinfoDatas\Tables;

use App\Actions\TransferMerinfoDataToRingaDataAction;
use App\Exports\MerinfoDataExporter;
use App\Models\MerinfoData;
use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ExportBulkAction;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class MerinfoDatasTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->sortable()
                    ->weight('bold'),
                TextColumn::make('personnamn')
                    ->label('Name')
                    ->searchable()
                    ->sortable()
                    ->weight('bold'),

                TextColumn::make('gatuadress')
                    ->label('Address')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('postnummer')
                    ->label('Zip')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('postort')
                    ->label('City')
                    ->searchable()
                    ->sortable(),

                TextColumn::make('alder')
                    ->label('Age')
                    ->sortable(),

                TextColumn::make('kon')
                    ->label('Sex')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Man' => 'info',
                        'Kvinna' => 'warning',
                        default => 'gray',
                    })
                    ->searchable()
                    ->sortable(),

                IconColumn::make('is_hus')
                    ->label('Hus')
                    ->boolean()
                    ->sortable(),

                TextColumn::make('telefon_preview')
                    ->label('Phone')
                    ->getStateUsing(fn ($record) => $record->telefon_preview)
                    ->copyable()
                    ->copyMessage('Full phone data copied')
                    ->copyableState(function ($record) {
                        $telefon = $record->telefon;
                        if (is_array($telefon)) {
                            $phones = [];
                            array_walk_recursive($telefon, function ($item) use (&$phones) {
                                if (is_string($item) || is_numeric($item)) {
                                    $phones[] = (string) $item;
                                }
                            });

                            return implode(' | ', $phones);
                        }

                        return (string) ($telefon ?? '');
                    })
                    ->color(function ($record): string {
                        $telefon = $record->telefon;
                        $phoneStr = '';

                        if (is_array($telefon)) {
                            $phones = [];
                            array_walk_recursive($telefon, function ($item) use (&$phones) {
                                if (is_string($item) || is_numeric($item)) {
                                    $phones[] = (string) $item;
                                }
                            });
                            $phoneStr = implode(' | ', $phones);
                        } else {
                            $phoneStr = (string) ($telefon ?? '');
                        }

                        $hasReal = $phoneStr && ! str_contains($phoneStr, 'Lägg till telefonnummer');

                        return $hasReal ? 'success' : 'gray';
                    })
                    ->tooltip(function ($record) {
                        $telefon = $record->telefon;
                        if (is_array($telefon)) {
                            $phones = [];
                            array_walk_recursive($telefon, function ($item) use (&$phones) {
                                if (is_string($item) || is_numeric($item)) {
                                    $phones[] = (string) $item;
                                }
                            });

                            return implode(' | ', $phones);
                        }

                        return (string) ($telefon ?? '');
                    }),

                IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                IconColumn::make('is_telefon')
                    ->label('Has Phone')
                    ->boolean()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('karta')
                    ->label('Map')
                    ->url(fn ($record) => $record->karta)
                    ->openUrlInNewTab()
                    ->limit(30)
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('link')
                    ->label('Profile')
                    ->url(fn ($record) => $record->link)
                    ->openUrlInNewTab()
                    ->limit(30)
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('created_at')
                    ->label('Created')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('updated_at')
                    ->label('Updated')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                TernaryFilter::make('is_active')
                    ->label('Active')
                    ->placeholder('All records')
                    ->trueLabel('Active only')
                    ->falseLabel('Inactive only'),

                TernaryFilter::make('is_telefon')
                    ->label('Telefon')
                    ->default(true)
                    ->placeholder('All records')
                    ->trueLabel('With phone')
                    ->falseLabel('Without phone'),

                TernaryFilter::make('is_hus')
                    ->label('Hus')
                    ->default(true)
                    ->placeholder('All records')
                    ->trueLabel('Is Hus')
                    ->falseLabel('Not Hus'),

                SelectFilter::make('kon')
                    ->label('Sex')
                    ->options([
                        'Man' => 'Man',
                        'Kvinna' => 'Kvinna',
                    ]),

                SelectFilter::make('postort')
                    ->label('City')
                    ->options(
                        fn (): array => MerinfoData::query()
                            ->whereNotNull('postort')
                            ->distinct()
                            ->pluck('postort', 'postort')
                            ->toArray()
                    )
                    ->searchable(),

                Filter::make('postnummer')
                    ->schema([
                        TextInput::make('postnummer')
                            ->label('Zip Code'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when(
                                $data['postnummer'] ?? null,
                                fn (Builder $query, $postnummer): Builder => $query->where('postnummer', 'like', "%{$postnummer}%")
                            );
                    }),
            ])
            ->recordActions([
                EditAction::make(),
                //    DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    ExportBulkAction::make()
                        ->exporter(MerinfoDataExporter::class),
                    DeleteBulkAction::make(),
                    BulkAction::make('transferToRingaData')
                        ->label('Transfer to Ringa Data')
                        ->icon('heroicon-o-arrow-right')
                        ->color('success')
                        ->requiresConfirmation()
                        ->action(function (Collection $records, array $data): void {
                            $action = new TransferMerinfoDataToRingaDataAction;
                            $action->handle($records, $data);

                            Notification::make()
                                ->title('Success')
                                ->body(count($records).' records transferred to Ringa Data')
                                ->success()
                                ->send();
                        }),
                    BulkAction::make('merinfoCount')
                        ->label('Merinfo Count')
                        ->icon('heroicon-o-calculator')
                        ->color('success')
                        ->requiresConfirmation()
                        ->modalHeading('Set Merinfo Count')
                        ->modalDescription('This will set merinfo_personer_count = 1 for all selected records.')
                        ->modalSubmitActionLabel('Set Count')
                        ->action(function (Collection $records): void {
                            $count = 0;
                            foreach ($records as $record) {
                                $record->update(['merinfo_personer_count' => 1]);
                                $count++;
                            }

                            Notification::make()
                                ->success()
                                ->title('Merinfo Count Updated')
                                ->body("Successfully set merinfo_personer_count = 1 for {$count} record(s).")
                                ->send();
                        })
                        ->deselectRecordsAfterCompletion(),
                    BulkAction::make('merinfoQueue')
                        ->label('Merinfo Queue')
                        ->icon('heroicon-o-queue-list')
                        ->color('warning')
                        ->requiresConfirmation()
                        ->modalHeading('Set Merinfo Queue')
                        ->modalDescription('This will set merinfo_personer_queue = 1 for all selected records.')
                        ->modalSubmitActionLabel('Set Queue')
                        ->action(function (Collection $records): void {
                            $count = 0;
                            foreach ($records as $record) {
                                $record->update(['merinfo_personer_queue' => 1]);
                                $count++;
                            }

                            Notification::make()
                                ->success()
                                ->title('Merinfo Queue Updated')
                                ->body("Successfully set merinfo_personer_queue = 1 for {$count} record(s).")
                                ->send();
                        })
                        ->deselectRecordsAfterCompletion(),
                ]),
                static::exportSqlAction(),
            ])
            ->defaultSort('created_at', 'desc')
            ->defaultPaginationPageOption(50)
            ->paginated([10, 25, 50, 100, 200, 500])
            ->striped()
            ->persistSearchInSession()
            ->persistColumnSearchesInSession()
            ->persistFiltersInSession()
            ->persistSortInSession();
    }

    private static function exportSqlAction(): Action
    {
        return Action::make('exportSql')
            ->label('SQL')
            ->icon('heroicon-o-arrow-up-on-square')
            ->color('danger')
            ->action(function () {
                return self::handleSqlExport();
            });
    }

    private static function handleSqlExport()
    {
        try {
            $tableName = 'ratsit_data';
            $rows = DB::table($tableName)->get();

            if ($rows->isEmpty()) {
                Notification::make()
                    ->warning()
                    ->title('Export Failed')
                    ->body('No data to export.')
                    ->send();

                return null;
            }

            // Exclude 'id' column if present
            $allColumns = array_keys((array) $rows->first());
            $columns = array_filter($allColumns, fn ($col) => $col !== 'id');

            $batchSize = 500;
            $sql = '';
            $values = [];
            $rowCount = 0;
            foreach ($rows as $row) {
                $rowValues = [];
                foreach ($columns as $column) {
                    $value = $row->{$column} ?? null;
                    if ($value === null) {
                        $rowValues[] = 'NULL';
                    } elseif (is_numeric($value)) {
                        $rowValues[] = $value;
                    } else {
                        $rowValues[] = "'".addslashes($value)."'";
                    }
                }
                $values[] = '    ('.implode(', ', $rowValues).')';
                $rowCount++;
                if ($rowCount % $batchSize === 0) {
                    $sql .= "INSERT IGNORE INTO `{$tableName}` (`".implode('`, `', $columns)."`) VALUES\n";
                    $sql .= implode(",\n", $values).";\n";
                    $values = [];
                }
            }
            // Write remaining values
            if (! empty($values)) {
                $sql .= "INSERT IGNORE INTO `{$tableName}` (`".implode('`, `', $columns)."`) VALUES\n";
                $sql .= implode(",\n", $values).";\n";
            }

            $filename = "{$tableName}_export_".now()->format('Y-m-d_H-i-s').'.sql';
            $filepath = storage_path('app/'.$filename);

            file_put_contents($filepath, $sql);

            return response()->download($filepath, $filename)->deleteFileAfterSend(true);

        } catch (\Exception $e) {
            Notification::make()
                ->danger()
                ->title('Export Failed')
                ->body($e->getMessage())
                ->send();

            return null;
        }
    }
}
