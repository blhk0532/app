<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\RatsitPostorter;

use App\Filament\Queue\Resources\RatsitPostorter\Pages\ListRatsitPostorter;
use App\Jobs\RunRatsitPersonAdressJob;
use App\Models\RatsitPostort;
use BackedEnum;
use Filament\Actions\BulkAction;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use UnitEnum;

class RatsitPostortResource extends Resource
{
    protected static ?string $model = RatsitPostort::class;

    protected static ?int $navigationSort = 5;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMap;

    protected static ?string $navigationLabel = 'Ratsit Postort';

    protected static UnitEnum|string|null $navigationGroup = 'Ratsit Databas';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('post_ort')->searchable()->sortable(),
                TextColumn::make('post_nummer')->searchable()->sortable(),
                TextColumn::make('kommun')->searchable()->sortable(),
                TextColumn::make('personer_count')->label('Personer')->numeric()->sortable(),
                TextColumn::make('foretag_count')->label('Företag')->numeric()->sortable(),
                TextColumn::make('personer_link')->label('Personer Link')->sortable()->url(fn ($record) => $record->personer_link)->openUrlInNewTab()->toggleable()->weight('medium')->limit(32),
                TextColumn::make('foretag_link')->label('Företag Link')->sortable()->url(fn ($record) => $record->foretag_link)->openUrlInNewTab()->toggleable()->weight('medium')->limit(32),
                TextColumn::make('personer_link_status')->label('P Adress')->sortable()->hidden(),
                TextColumn::make('updated_at')->dateTime()->since()->sortable()->toggleable(),
            ])
            ->filters([
                SelectFilter::make('kommun')
                    ->label('Kommun')
                    ->searchable()
                    ->options(fn () => RatsitPostort::query()
                        ->whereNotNull('kommun')
                        ->where('kommun', '<>', '')
                        ->select('kommun')
                        ->distinct()
                        ->orderBy('kommun')
                        ->pluck('kommun', 'kommun')
                        ->filter()
                        ->all()),
                SelectFilter::make('post_ort')
                    ->label('Post Ort')
                    ->searchable()
                    ->options(fn () => RatsitPostort::query()
                        ->select('post_ort')
                        ->distinct()
                        ->orderBy('post_ort')
                        ->pluck('post_ort', 'post_ort')
                        ->all()),
            ])
            ->toolbarActions([
                BulkAction::make('run_ratsit_person_adresser')
                    ->label('Run Ratsit Scraper')
                    ->requiresConfirmation()
                    ->action(function (Collection $records) {
                        foreach ($records as $record) {
                            $url = $record->personer_link ?: null;
                            RunRatsitPersonAdressJob::dispatch($record->id, $url)->onQueue('ratsit');
                        }

                        Notification::make()
                            ->title('Queued Ratsit jobs')
                            ->body('Ratsit scraping jobs have been queued for selected rows.')
                            ->success()
                            ->send();
                    })
                    ->color('primary'),
            ])
            ->defaultSort('updated_at', 'desc')
            ->paginated([10, 25, 50, 100, 200, 500, 1000])
            ->defaultPaginationPageOption(25);
    }

    public static function form(Schema $schema): Schema
    {
        return Schema::make();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListRatsitPostorter::route('/'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }
}
