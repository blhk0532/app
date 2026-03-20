<?php

declare(strict_types=1);

namespace App\Filament\Data\Resources\RatsitKommuner;

use App\Filament\Data\Resources\RatsitKommuner\Pages\ListRatsitKommuner;
use App\Jobs\RunRatsitForetagKommunerJob;
use App\Jobs\RunRatsitPersonKommunerJob;
use App\Models\RatsitKommun;
use BackedEnum;
use Closure;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\DB;
use Throwable;
use UnitEnum;

class RatsitKommunResource extends Resource
{
    protected static ?string $model = RatsitKommun::class;

    protected static ?int $navigationSort = 4;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBuildingOffice2;

    protected static ?string $navigationLabel = 'Ratsit Kommun';

    protected static UnitEnum|string|null $navigationGroup = 'Ratsit Databas';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id'),
                TextColumn::make('kommun')
                    ->searchable()
                    ->sortable()
                    ->url(fn ($record) => url('/nds/data/ratsit-postorter/ratsit-postorts?search='.urlencode($record->kommun))),
                TextColumn::make('personer_count')->label('Personer')->numeric()->sortable(),
                TextColumn::make('foretag_count')->label('Företag')->numeric()->sortable(),
                TextColumn::make('personer_link')->label('Personer Link')->url(fn ($record) => $record->personer_link)->openUrlInNewTab()->toggleable()->weight('medium')->limit(32),
                TextColumn::make('foretag_link')->label('Företag Link')->url(fn ($record) => $record->foretag_link)->openUrlInNewTab()->toggleable()->weight('medium')->limit(32),
                TextColumn::make('updated_at')->dateTime()->since()->sortable()->toggleable(),
            ])
            ->filters([
                SelectFilter::make('kommun')
                    ->label('Kommun')
                    ->searchable()
                    ->options(fn () => RatsitKommun::query()
                        ->whereNotNull('kommun')
                        ->where('kommun', '<>', '')
                        ->select('kommun')
                        ->distinct()
                        ->orderBy('kommun')
                        ->pluck('kommun', 'kommun')
                        ->filter()
                        ->all()),
            ])
            ->defaultSort('updated_at', 'desc')
            ->paginated([10, 25, 50, 100, 200, 500])
            ->defaultPaginationPageOption(25)
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('run_ratsit_person_kommuner')
                        ->label('Run Ratsit Kommuner')
                        ->icon('heroicon-o-play')
                        ->color('primary')
                        ->requiresConfirmation()
                        ->modalHeading('Run Ratsit kommuner scraper')
                        ->modalDescription('This will start the background Node scraper that fetches municipality data from Ratsit. The process runs asynchronously.')
                        ->action(function (Collection $records): void {
                            try {
                                $jobs = $records->map(function ($record) {
                                    return new RunRatsitPersonKommunerJob([(string) $record->personer_link]);
                                })->toArray();

                                $maxJobIdBefore = DB::table('jobs')->max('id') ?? 0;

                                $batch = Bus::batch($jobs)
                                    ->name('Bulk Ratsit Person Kommuner - '.now()->format('Y-m-d H:i:s'))
                                    ->onQueue('ratsit')
                                    ->dispatch();

                                DB::table('job_batches')->where('id', $batch->id)->update(['status' => 'pending']);

                                $newJobs = DB::table('jobs')
                                    ->where('queue', 'ratsit')
                                    ->where('id', '>', $maxJobIdBefore)
                                    ->orderBy('id')
                                    ->get();

                                foreach ($records as $index => $record) {
                                    if (isset($newJobs[$index])) {
                                        DB::table('jobs')
                                            ->where('id', $newJobs[$index]->id)
                                            ->update(['name' => ($record->kommun ?? 'kommun').' - Ratsit Person Kommuner', 'status' => 'pending']);
                                    }
                                }

                                Notification::make()
                                    ->title('Bulk Ratsit Person Kommuner Started')
                                    ->info()
                                    ->body("Created job batch with {$records->count()} kommuner. Batch ID: {$batch->id}.")
                                    ->send();
                            } catch (Throwable $e) {
                                Notification::make()
                                    ->title('Failed to dispatch scraper jobs')
                                    ->danger()
                                    ->body($e->getMessage())
                                    ->send();
                            }
                        }),
                    BulkAction::make('run_ratsit_foretag_kommuner')
                        ->label('Run Ratsit Företag Kommuner')
                        ->icon('heroicon-o-play')
                        ->color('primary')
                        ->requiresConfirmation()
                        ->modalHeading('Run Ratsit företag kommuner scraper')
                        ->modalDescription('This will start the background Node scraper that fetches municipality data from Ratsit. The process runs asynchronously.')
                        ->action(function (Collection $records): void {
                            try {
                                $jobs = $records->map(function ($record) {
                                    return new RunRatsitForetagKommunerJob([(string) $record->foretag_link]);
                                })->toArray();

                                $maxJobIdBefore = DB::table('jobs')->max('id') ?? 0;

                                $batch = Bus::batch($jobs)
                                    ->name('Bulk Ratsit Företag Kommuner - '.now()->format('Y-m-d H:i:s'))
                                    ->onQueue('ratsit')
                                    ->dispatch();

                                DB::table('job_batches')->where('id', $batch->id)->update(['status' => 'pending']);

                                $newJobs = DB::table('jobs')
                                    ->where('queue', 'ratsit')
                                    ->where('id', '>', $maxJobIdBefore)
                                    ->orderBy('id')
                                    ->get();

                                foreach ($records as $index => $record) {
                                    if (isset($newJobs[$index])) {
                                        DB::table('jobs')
                                            ->where('id', $newJobs[$index]->id)
                                            ->update(['name' => ($record->kommun ?? 'kommun').' - Ratsit Företag Kommuner', 'status' => 'pending']);
                                    }
                                }

                                Notification::make()
                                    ->title('Bulk Ratsit Företag Kommuner Started')
                                    ->info()
                                    ->body("Created job batch with {$records->count()} kommuner. Batch ID: {$batch->id}.")
                                    ->send();
                            } catch (Throwable $e) {
                                Notification::make()
                                    ->title('Failed to dispatch scraper jobs')
                                    ->danger()
                                    ->body($e->getMessage())
                                    ->send();
                            }
                        }),
                ]),

            ]);
    }

    public static function form(Schema $schema): Schema
    {
        return Schema::make();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListRatsitKommuner::route('/'),
        ];
    }

    public static function getTableRecordUrlUsing(): ?Closure
    {
        return static fn ($record): string => url('/nds/data/ratsit-postorter/ratsit-postorts?search='.urlencode($record->kommun));
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }
}
