<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\RatsitAdresser;

use App\Filament\Queue\Resources\RatsitAdresser\Pages\ListRatsitAdresser;
use App\Jobs\RunRatsitPersonsSearchJob;
use App\Models\RatsitAdress;
use BackedEnum;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;
use UnitEnum;

class RatsitAdressResource extends Resource
{
    protected static ?string $model = RatsitAdress::class;

    protected static ?int $navigationSort = 6;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMapPin;

    protected static ?string $navigationLabel = 'Ratsit Adress';

    protected static UnitEnum|string|null $navigationGroup = 'Ratsit Databas';

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('gatuadress_namn')->label('Gatuadress')->searchable()->sortable(),
                TextColumn::make('post_nummer')->searchable()->sortable(),
                TextColumn::make('post_ort')->searchable()->sortable(),
                TextColumn::make('kommun')->searchable()->sortable()->toggleable(),
                TextColumn::make('personer_count')->label('Personer')->numeric()->sortable(),
                TextColumn::make('foretag_count')->label('Företag')->numeric()->sortable(),
                TextColumn::make('personer_link')->label('Personer Link')->url(fn ($record) => $record->personer_link)->openUrlInNewTab()->toggleable(),
                TextColumn::make('foretag_link')->label('Företag Link')->url(fn ($record) => $record->foretag_link)->openUrlInNewTab()->toggleable(),
                TextColumn::make('updated_at')->dateTime()->since()->sortable()->toggleable(),
            ])
            ->filters([
                Filter::make('post_ort')
                    ->schema([
                        TextInput::make('post_ort')->label('Post Ort'),
                    ])
                    ->query(fn ($query, $data) => $query->when($data['post_ort'] ?? null, fn ($q, $value) => $q->where('post_ort', 'like', "%{$value}%"))),

                Filter::make('post_nummer')
                    ->schema([
                        TextInput::make('post_nummer')->label('Postnummer'),
                    ])
                    ->query(fn ($query, $data) => $query->when($data['post_nummer'] ?? null, fn ($q, $value) => $q->where('post_nummer', 'like', "%{$value}%"))),

                Filter::make('kommun')
                    ->schema([
                        TextInput::make('kommun')->label('Kommun'),
                    ])
                    ->query(fn ($query, $data) => $query->when($data['kommun'] ?? null, fn ($q, $value) => $q->where('kommun', 'like', "%{$value}%"))),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('run_ratsit_persons')
                        ->label('Run Ratsit Persons')
                        ->requiresConfirmation()
                        ->action(function (Collection $records) {
                            foreach ($records as $record) {
                                // Build exact search string: "gatuadress_namn,  post_nummer post_ort"
                                $gatuadress = $record->gatuadress_namn ?? '';
                                $postnummer = $record->post_nummer ?? '';
                                $postort = $record->post_ort ?? '';
                                $search = sprintf('"%s,  %s %s"', $gatuadress, str_replace(' ', '', $postnummer), $postort);

                                // Dispatch a queued job to run the Node scraper with the exact search param
                                RunRatsitPersonsSearchJob::dispatch($search)->onQueue('ratsit');
                            }

                            Notification::make()
                                ->title('Queued Ratsit Persons jobs')
                                ->body('Ratsit persons scraping jobs have been queued for selected rows.')
                                ->success()
                                ->send();
                        })
                        ->color('primary'),
                ]),
            ])
            ->defaultSort('updated_at', 'desc')
            ->deferFilters()
            ->defaultSort('created_at', 'desc')
            ->paginated([10, 25, 50, 100, 250, 500, 1000])
            ->defaultPaginationPageOption(25);
    }

    public static function form(Schema $schema): Schema
    {
        return Schema::make();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListRatsitAdresser::route('/'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }
}
