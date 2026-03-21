<?php

declare(strict_types=1);

namespace App\Filament\Resources\SwedenPostnummers\Widgets;

use App\Filament\Resources\SwedenPostnummers\Actions\RunRatsitHittaAction;
use App\Filament\Resources\SwedenPostnummers\Actions\RunRatsitHittaBulkAction;
use App\Jobs\RunHittaDataScriptJob;
use App\Jobs\RunMerinfoDataScriptJob;
use App\Jobs\RunRatsitDataScriptJob;
use App\Jobs\RunScriptForPostnummerJob;
use App\Models\HittaData;
use App\Models\HittaSe;
use App\Models\Merinfo;
use App\Models\MerinfoData;
use App\Models\RatsitData;
use App\Models\SwedenPostnummer;
use Cheesegrits\FilamentGoogleMaps\Actions\GoToAction;
use Cheesegrits\FilamentGoogleMaps\Filters\MapIsFilter;
use Cheesegrits\FilamentGoogleMaps\Widgets\MapTableWidget;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\HtmlString;

class MapPickerWidget extends MapTableWidget
{
    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 2;

    public function table(Table $table): Table
    {
        return $table->toolbarActions($this->getToolbarActions());
    }

    protected function getTableQuery(): Builder
    {
        return SwedenPostnummer::query();
    }

    protected function paginateTableQuery(Builder $query): Paginator
    {
        return $query->paginate($this->getTableRecordsPerPage() == 'all' ? $query->count() : $this->getTableRecordsPerPage());
    }

    protected function getTableColumns(): array
    {
        return [
            TextColumn::make('csv_id')
                ->hidden()
                ->numeric()
                ->sortable(),
            TextColumn::make('post_nummer')
                ->label('Postnr')
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: false)
                ->searchable(),
            TextColumn::make('post_ort')
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: false)
                ->searchable(),
            TextColumn::make('kommun')
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: false)
                ->label('Kommun')
                ->searchable(),
            TextColumn::make('lan')
                ->sortable()
                ->label('Landskap')
                ->toggleable(isToggledHiddenByDefault: false)
                ->searchable(),
            TextColumn::make('country')
                ->hidden()
                ->label('Land')
                ->toggleable(isToggledHiddenByDefault: false)
                ->searchable(),
            TextColumn::make('personer')
                ->numeric()
                ->toggleable(isToggledHiddenByDefault: false)
                ->label('Pers')
                ->sortable(),
            TextColumn::make('foretag')
                ->numeric()
                ->hidden()
                ->toggleable(isToggledHiddenByDefault: true)
                ->sortable(),
            TextColumn::make('personer_saved')
                ->label('Saved')
                ->hidden()
                ->dateTime()
                ->toggleable(isToggledHiddenByDefault: true)
                ->sortable(),
            TextColumn::make('personer_ratsit_saved')
                ->label('Ratsit')
                ->numeric()
                ->toggleable(isToggledHiddenByDefault: false)
                ->sortable(),
            TextColumn::make('personer_hitta_saved')
                ->label('Hitta')
                ->placeholder('-')
                ->default('-')
                ->numeric()
                ->toggleable(isToggledHiddenByDefault: false)
                ->sortable(),
            TextColumn::make('personer_merinfo_saved')
                ->label('Merinfo')
                ->placeholder('-')
                ->default('-')
                ->toggleable(isToggledHiddenByDefault: false)
                ->sortable(),
            ToggleColumn::make('personer_merinfo_queue')
                ->label('Queue')
                ->toggleable(isToggledHiddenByDefault: false)
                ->sortable(),
            TextColumn::make('latitude')
                ->numeric()
                ->hidden()
                ->toggleable(isToggledHiddenByDefault: true)
                ->sortable(),
            TextColumn::make('longitude')
                ->numeric()
                ->hidden()
                ->toggleable(isToggledHiddenByDefault: true)
                ->sortable(),
            TextColumn::make('created_at')
                ->dateTime()
                ->sortable()
                ->hidden()
                ->toggleable(isToggledHiddenByDefault: true),
            TextColumn::make('updated_at')
                ->dateTime()
                ->sortable()
                ->hidden()
                ->toggleable(isToggledHiddenByDefault: true),
        ];
    }

    protected function getTableFilters(): array
    {
        return [
            Filter::make('has_personer')
                ->label('Has Personer')
                ->default(true)
                ->query(fn (Builder $query) => $query->where('personer', '>', 0)),
            SelectFilter::make('post_nummer')
                ->label('Postnr')
                ->searchable()
                ->multiple()
                ->options(fn (): array => SwedenPostnummer::query()
                    ->whereNotNull('post_nummer')
                    ->where('post_nummer', '<>', '')
                    ->orderBy('post_nummer')
                    ->pluck('post_nummer', 'post_nummer')
                    ->all()),
            SelectFilter::make('post_ort')
                ->label('Postort')
                ->searchable()
                ->multiple()
                ->options(fn (): array => SwedenPostnummer::query()
                    ->whereNotNull('post_ort')
                    ->where('post_ort', '<>', '')
                    ->orderBy('post_ort')
                    ->pluck('post_ort', 'post_ort')
                    ->all()),
            SelectFilter::make('kommun')
                ->label('Kommun')
                ->searchable()
                ->multiple()
                ->options(fn (): array => SwedenPostnummer::query()
                    ->whereNotNull('kommun')
                    ->where('kommun', '<>', '')
                    ->orderBy('kommun')
                    ->pluck('kommun', 'kommun')
                    ->all()),
            SelectFilter::make('lan')
                ->label('Län')
                ->searchable()
                ->multiple()
                ->options(fn (): array => SwedenPostnummer::query()
                    ->whereNotNull('lan')
                    ->where('lan', '<>', '')
                    ->orderBy('lan')
                    ->pluck('lan', 'lan')
                    ->all()),
            MapIsFilter::make('map')
                ->label('Map Bounds'),
        ];
    }

    protected function getFilters(): ?array
    {
        return null;
    }

    public function getConfig(): array
    {
        $config = parent::getConfig();

        return array_merge($config, [
            'center' => [
                'lat' => 62.5333,
                'lng' => 16.6667,
            ],
            'zoom' => 8,
            'fit' => true,
        ]);
    }

    protected function getTableActions(): array
    {
        return [
            RunRatsitHittaAction::make(),
            //  ViewAction::make(),
            EditAction::make(),
            GoToAction::make()
                ->label('Map')
                ->alpineClickHandler(function (Model $record): HtmlString {
                    $latLngFields = $record::getLatLngAttributes();

                    return new HtmlString(sprintf(
                        "const section = document.getElementById('filament-google-maps-widget-on-table'); if (section) { section.classList.remove('is-collapsed'); section.classList.remove('fi-collapsed'); } \$dispatch('filament-google-maps::widget/setMapCenter', {lat: %f, lng: %f, zoom: %d});",
                        round((float) $record->{$latLngFields['lat']}, 8),
                        round((float) $record->{$latLngFields['lng']}, 8),
                        12,
                    ));
                })
                ->zoom(12),
        ];
    }

    protected function getToolbarActions(): array
    {
        return [
            BulkActionGroup::make([
                //    RunRatsitHittaBulkAction::make(),
                BulkAction::make('runScript')
                    ->label('Run Queue Script')
                    ->icon('heroicon-o-command-line')
                    ->color('success')
                    ->requiresConfirmation()
                    ->modalHeading('Run script from scripts folder')
                    ->modalDescription('Select a script from /scripts and run it now.')
                    ->schema([
                        Select::make('script_name')
                            ->label('Script')
                            ->options(function (): array {
                                $scriptPaths = glob(base_path('scripts/*')) ?: [];

                                return collect($scriptPaths)
                                    ->filter(fn (string $path): bool => is_file($path))
                                    ->map(fn (string $path): string => basename($path))
                                    ->sort()
                                    ->values()
                                    ->mapWithKeys(fn (string $name): array => [$name => $name])
                                    ->all();
                            })
                            ->searchable()
                            ->required(),
                    ])
                    ->action(function (Collection $records, array $data): void {
                        try {
                            $scriptName = trim((string) ($data['script_name'] ?? ''));

                            if ($scriptName === '' || ! preg_match('/^[A-Za-z0-9._-]+$/', $scriptName)) {
                                throw new \Exception('Invalid script name.');
                            }

                            $scriptPath = base_path("scripts/{$scriptName}");

                            if (! is_file($scriptPath)) {
                                throw new \Exception("Script not found: {$scriptName}");
                            }

                            $queued = 0;

                            foreach ($records as $record) {
                                dispatch(new RunScriptForPostnummerJob(
                                    scriptName: $scriptName,
                                    postNummer: (string) $record->post_nummer,
                                ));

                                $queued++;
                            }

                            Notification::make()
                                ->success()
                                ->title('Script jobs queued')
                                ->body("Queued {$queued} job(s) for {$scriptName} on queue: script.")
                                ->send();
                        } catch (\Throwable $exception) {
                            report($exception);

                            Notification::make()
                                ->danger()
                                ->title('Script failed')
                                ->body($exception->getMessage())
                                ->send();
                        }
                    })
                    ->deselectRecordsAfterCompletion(),
                BulkAction::make('setAllQueueFlags')
                    ->label('Set All Queue = 1')
                    ->icon('heroicon-o-queue-list')
                    ->color('warning')
                    ->requiresConfirmation()
                    ->modalHeading('Set Queue Columns')
                    ->modalDescription('This will set personer_hitta_queue, personer_merinfo_queue, and personer_ratsit_queue to 1 for all selected records.')
                    ->modalSubmitActionLabel('Set Queue = 1')
                    ->action(function (Collection $records): void {
                        $updated = 0;

                        foreach ($records as $record) {
                            SwedenPostnummer::query()
                                ->whereKey($record->getKey())
                                ->update([
                                    'personer_hitta_queue' => 1,
                                    'personer_merinfo_queue' => 1,
                                    'personer_ratsit_queue' => 1,
                                ]);

                            $updated++;
                        }

                        Notification::make()
                            ->success()
                            ->title('Queue Columns Updated')
                            ->body("Set all queue columns to 1 for {$updated} record(s).")
                            ->send();
                    })
                    ->deselectRecordsAfterCompletion(),
                BulkAction::make('checkDbCounts')
                    ->label('Check DB Counts')
                    ->icon('heroicon-o-calculator')
                    ->color('info')
                    ->requiresConfirmation()
                    ->modalHeading('Check Database Counts')
                    ->modalDescription('This will count matching rows in hitta_data, merinfo_data, and ratsit_data and update personer_hitta_saved, personer_merinfo_saved, and personer_ratsit_saved for selected records.')
                    ->modalSubmitActionLabel('Update Counts')
                    ->action(function (Collection $records): void {
                        $updated = 0;

                        foreach ($records as $record) {
                            $postNummer = (string) $record->post_nummer;
                            $normalizedPostNummer = $record->csv_id;

                            $hittaDataCount = HittaData::query()
                                ->where('postnummer', $postNummer)
                                ->count();

                            $hittaSeCount = HittaSe::query()
                                ->where('postnummer', $postNummer)
                                ->count();

                            $merinfoDataCount = MerinfoData::query()
                                ->where('postnummer', $postNummer)
                                ->count();

                            $merinfoCount = Merinfo::query()
                                ->whereLike('address', $postNummer)
                                ->count();

                            $ratsitDataCount = RatsitData::query()
                                ->where('postnummer', $postNummer)
                                ->count();

                            SwedenPostnummer::query()
                                ->whereKey($record->getKey())
                                ->update([
                                    'personer_hitta_saved' => $hittaDataCount > $hittaSeCount ? $hittaDataCount : $hittaSeCount,
                                    'personer_merinfo_saved' => $merinfoDataCount > $merinfoCount ? $merinfoDataCount : $merinfoCount,
                                    'personer_ratsit_saved' => $ratsitDataCount > 0 ? $ratsitDataCount : 0,
                                ]);

                            $updated++;
                        }

                        Notification::make()
                            ->success()
                            ->title('DB Counts Updated')
                            ->body("Updated saved counts for {$updated} record(s).")
                            ->send();
                    })
                    ->deselectRecordsAfterCompletion(),
                //    BulkAction::make('runAllData')
                //        ->label('Run All Data Scripts')
                //        ->icon('heroicon-o-play')
                //        ->color('success')
                //        ->requiresConfirmation()
                //        ->modalHeading('Run All Data Scripts')
                //        ->modalDescription('This will queue data collection jobs (Hitta, Merinfo, Ratsit) for all selected records.')
                //        ->modalSubmitActionLabel('Run All Scripts')
                //        ->action(function (Collection $records): void {
                //            $batchCount = 0;
                //            $totalJobs = 0;
                //            foreach ($records as $record) {
                //                $postNummer = (string) $record->post_nummer;
                //                $normalizedPostNummer = str_replace(' ', '', $postNummer);
                //                $batch = Bus::batch([
                //                    new RunHittaDataScriptJob($normalizedPostNummer),
                //                    new RunMerinfoDataScriptJob($normalizedPostNummer),
                //                    new RunRatsitDataScriptJob($postNummer),
                //                ])
                //                    ->name("SwedenPostnummer {$postNummer} data scripts")
                //                    ->onConnection(config('queue.default'))
                //                    ->onQueue('ratsit-hitta')
                //                    ->allowFailures()
                //                    ->dispatch();
                //                $batchCount++;
                //                $totalJobs += 3;
                //            }
                //            Notification::make()
                //                ->success()
                //                ->title('Batches Queued')
                //                ->body("Queued {$batchCount} batch(es) with {$totalJobs} total job(s) for data collection.")
                //                ->send();
                //        })
                //        ->deselectRecordsAfterCompletion(),
                //        DeleteBulkAction::make(),
            ]),
        ];
    }

    public function isMapPicker(): bool
    {
        return true;
    }

    protected function getMapFields(): array
    {
        return [
            'latitude',
            'longitude',
        ];
    }

    protected function getMapLabel(): string
    {
        return 'sverige';
    }

    public function mount(): void
    {
        $this->form->fill([
            'address_search' => null,
            'street' => null,
            'city' => null,
            'state' => null,
            'zip' => null,
            'location' => [
                'lat' => 62.5333,
                'lng' => 16.6667,
            ],
        ]);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Grid::make()
                    ->schema([
                        TextInput::make('address_search')
                            ->label('Address Search')
                            ->placeholder('Search by street, city, or postal code')
                            ->maxLength(255)
                            ->columnSpanFull(),

                    ]),

            ])
            ->statePath('data');
    }

    public function submit(): void
    {
        $data = $this->form->getState();

        // Here you can dispatch an event or emit the selected location
        $this->dispatch('location-selected', [
            'latitude' => $data['location']['lat'],
            'longitude' => $data['location']['lng'],
        ])->self();
    }
}
