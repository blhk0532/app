<?php

namespace App\Filament\Resources\People\Tables;

use App\Exports\PeopleExporter;
use App\Models\Person;
use App\Services\GoogleSheets\PeopleSheetsSyncService;
use App\Services\Import\PeopleImportService;
use Filament\Actions\Action;
use Filament\Actions\ActionGroup;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ExportAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class PeopleTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('personnamn')
                    ->label('Namn')
                    ->searchable()
                    ->sortable()
                    ->sortable(),
                TextColumn::make('personnummer')
                    ->label('Personnummer')
                    ->searchable()
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('fornamn')
                    ->label('Förnamn')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                TextColumn::make('efternamn')
                    ->label('Efternamn')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                TextColumn::make('gatuadress')
                    ->label('Adress')
                    ->searchable()
                    ->wrap()
                    ->sortable(),
                TextColumn::make('postnummer')
                    ->label('Postnr')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('postort')
                    ->label('Postort')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('kommun')
                    ->label('Kommun')
                    ->searchable()
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('bostadstyp')
                    ->label('Bostadstyp')
                    ->badge()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                TextColumn::make('telefonnummer')
                    ->label('Telefon')
                    ->formatStateUsing(function (mixed $state): string {
                        // Ensure we're working with an array
                        if (is_string($state)) {
                            $decoded = json_decode($state, true);
                            if (is_array($decoded)) {
                                $state = $decoded;
                            } elseif (str_contains($state, ',')) {
                                $state = array_map('trim', explode(',', $state));
                            } else {
                                return trim($state);
                            }
                        }

                        if (! is_array($state) || count($state) === 0) {
                            return '';
                        }

                        // Get the first phone number
                        $firstNumber = trim((string) $state[0]);

                        if ($firstNumber === '') {
                            return '';
                        }

                        // Show indicator if more exist
                        $moreCount = count($state) - 1;

                        return $moreCount > 0 ? "{$firstNumber} (+{$moreCount} more)" : $firstNumber;
                    })
                    ->searchable()
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('sources')
                    ->label('Sources')
                    ->formatStateUsing(fn(mixed $state): string => is_array($state) ? implode(', ', array_filter($state)) : (string) ($state ?? ''))
                    ->badge()
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
            ])
            ->filters([
                Filter::make('has_personnummer')
                    ->label('Has personnummer')
                    ->query(fn(Builder $query): Builder => $query
                        ->whereNotNull('personnummer')
                        ->where('personnummer', '<>', '')),
                Filter::make('has_telefonnummer')
                    ->label('Has phone')
                    ->query(fn(Builder $query): Builder => $query
                        ->whereNotNull('telefonnummer')
                        ->whereRaw('JSON_LENGTH(telefonnummer) > 0')),
                SelectFilter::make('kommun')
                    ->label('Kommun')
                    ->searchable()
                    ->multiple()
                    ->preload()
                    ->options(fn(): array => Person::query()
                        ->whereNotNull('kommun')
                        ->where('kommun', '<>', '')
                        ->orderBy('kommun')
                        ->pluck('kommun', 'kommun')
                        ->all()),
                SelectFilter::make('postort')
                    ->label('Postort')
                    ->searchable()
                    ->multiple()
                    ->preload()
                    ->options(fn(): array => Person::query()
                        ->whereNotNull('postort')
                        ->where('postort', '<>', '')
                        ->orderBy('postort')
                        ->pluck('postort', 'postort')
                        ->all()),
                SelectFilter::make('bostadstyp')
                    ->label('Bostadstyp')
                    ->searchable()
                    ->multiple()
                    ->options(fn(): array => Person::query()
                        ->whereNotNull('bostadstyp')
                        ->where('bostadstyp', '<>', '')
                        ->orderBy('bostadstyp')
                        ->pluck('bostadstyp', 'bostadstyp')
                        ->all()),
                Filter::make('created_between')
                    ->label('Created between')
                    ->schema([
                        DatePicker::make('created_from')->label('From'),
                        DatePicker::make('created_until')->label('To'),
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when($data['created_from'] ?? null, fn(Builder $query, string $date): Builder => $query->whereDate('created_at', '>=', $date))
                            ->when($data['created_until'] ?? null, fn(Builder $query, string $date): Builder => $query->whereDate('created_at', '<=', $date));
                    }),
            ])
            ->defaultSort('created_at', 'desc')
            ->recordActions([
                ActionGroup::make([
                    ViewAction::make(),
                    EditAction::make(),
                    DeleteAction::make(),
                    Action::make('openMap')
                        ->label('Open map')
                        ->icon('heroicon-o-map')
                        ->url(fn(Person $record): string => "https://www.google.com/maps?q={$record->latitud},{$record->longitude}")
                        ->openUrlInNewTab()
                        ->visible(fn(Person $record): bool => filled($record->latitud) && filled($record->longitude)),
                ]),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    BulkAction::make('syncToGoogleSheets')
                        ->label('Sync to Sheets')
                        ->icon('heroicon-o-table-cells')
                        ->color('success')
                        ->requiresConfirmation()
                        ->modalHeading('Sync selected people to Google Sheets')
                        ->modalDescription('Syncs the selected records to Google Sheets.')
                        ->schema([
                            TextInput::make('spreadsheet_id')
                                ->label('Spreadsheet ID')
                                ->default(config('services.google_sheets.default_spreadsheet_id'))
                                ->required(),
                            TextInput::make('sheet_name')
                                ->label('Sheet tab name')
                                ->default(config('services.google_sheets.default_sheet_name', 'People'))
                                ->required(),
                        ])
                        ->action(function (Collection $records, array $data): void {
                            try {
                                $count = app(PeopleSheetsSyncService::class)->syncRecords(
                                    records: $records,
                                    spreadsheetId: (string) ($data['spreadsheet_id'] ?? ''),
                                    sheetName: (string) ($data['sheet_name'] ?? 'People'),
                                );

                                Notification::make()
                                    ->success()
                                    ->title('Google Sheets sync completed')
                                    ->body("Synced {$count} people to Google Sheets.")
                                    ->send();
                            } catch (\Throwable $exception) {
                                report($exception);

                                Notification::make()
                                    ->danger()
                                    ->title('Google Sheets sync failed')
                                    ->body($exception->getMessage())
                                    ->send();
                            }
                        })
                        ->deselectRecordsAfterCompletion(),
                    BulkAction::make('selectionSummary')
                        ->label('Selection summary')
                        ->icon('heroicon-o-chart-bar')
                        ->color('info')
                        ->action(function (Collection $records): void {
                            $total = $records->count();
                            $withPin = $records->filter(fn(Person $record): bool => filled($record->personnummer))->count();
                            $withPhone = $records->filter(function (Person $record): bool {
                                $phones = $record->telefonnummer;

                                return is_array($phones) && count(array_filter($phones)) > 0;
                            })->count();

                            Notification::make()
                                ->title('Selection Summary')
                                ->success()
                                ->body("Total: {$total} · With personnummer: {$withPin} · With phone: {$withPhone}")
                                ->send();
                        })
                        ->deselectRecordsAfterCompletion(),
                ]),
                Action::make('importFromFile')
                    ->label('Import')
                    ->icon('heroicon-o-document-arrow-up')
                    ->color('warning')
                    ->schema([
                        FileUpload::make('import_file')
                            ->label('CSV or XLSX file')
                            ->required()
                            ->acceptedFileTypes(['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'])
                            ->maxSize(50 * 1024), // 50MB
                    ])
                    ->action(function (array $data): void {
                        try {
                            $filePath = $data['import_file'];

                            if (! is_string($filePath)) {
                                throw new \Exception('Invalid file upload');
                            }

                            $count = app(PeopleImportService::class)->importFromFile(
                                storage_path("app/{$filePath}")
                            );

                            Notification::make()
                                ->success()
                                ->title('Import completed')
                                ->body("Imported/updated {$count} people into personer.")
                                ->send();
                        } catch (\Throwable $exception) {
                            report($exception);

                            Notification::make()
                                ->danger()
                                ->title('Import failed')
                                ->body($exception->getMessage())
                                ->send();
                        }
                    }),
                Action::make('importFromGoogleSheets')
                    ->label('Import')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->color('info')
                    ->requiresConfirmation()
                    ->modalHeading('Import people from Google Sheets')
                    ->modalDescription('Reads rows from the sheet and upserts into personer using personnummer or name+address+postnummer.')
                    ->schema([
                        TextInput::make('spreadsheet_id')
                            ->label('Spreadsheet ID')
                            ->default(config('services.google_sheets.default_spreadsheet_id'))
                            ->required(),
                        TextInput::make('sheet_name')
                            ->label('Sheet tab name')
                            ->default(config('services.google_sheets.default_sheet_name', 'People'))
                            ->required(),
                    ])
                    ->action(function (array $data): void {
                        try {
                            $count = app(PeopleSheetsSyncService::class)->importIntoDatabase(
                                spreadsheetId: (string) ($data['spreadsheet_id'] ?? ''),
                                sheetName: (string) ($data['sheet_name'] ?? 'People'),
                            );

                            Notification::make()
                                ->success()
                                ->title('Google Sheets import completed')
                                ->body("Imported {$count} people into personer.")
                                ->send();
                        } catch (\Throwable $exception) {
                            report($exception);

                            Notification::make()
                                ->danger()
                                ->title('Google Sheets import failed')
                                ->body($exception->getMessage())
                                ->send();
                        }
                    }),
                ExportAction::make()
                    ->label('Export')
                    ->exporter(PeopleExporter::class)
                    ->icon('heroicon-o-arrow-up-tray'),
            ]);
    }
}
