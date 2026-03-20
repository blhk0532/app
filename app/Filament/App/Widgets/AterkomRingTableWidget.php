<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Enums\Outcomes;
use App\Models\RingaData;
use Carbon\Carbon;
use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Forms\Components\Select;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Collection;

class AterkomRingTableWidget extends BaseWidget
{
    protected static ?string $heading = ' ';

    protected int|string|array $columnSpan = 'full';

    public string $filter = 'all';

    protected $listeners = ['updateRingaFilter' => 'updateFilter'];

    public function updateFilter(string $value): void
    {
        //   $this->filter = $value;
    }

    public function table(Table $table): Table
    {
        $userId = auth()->id();

        $query = RingaData::query()
            ->where('user_id', $userId);

        $filter = $this->filter;

        match ($filter) {
            'aterkom' => $query->whereIn('outcome', ['Aterkommer', 'RingTillbaka']),
            default => $query->whereIn('outcome', ['Aterkommer', 'RingTillbaka']),
        };

        $query->orderBy('aterkom_at', 'asc');

        return $table
            ->query($query->whereIn('outcome', ['Aterkommer', 'RingTillbaka'])->whereNotNull('aterkom_at'))
            ->paginated(false)
            ->toolbarActions([])
            ->extraAttributes(['style' => 'height: 420px'])
            ->columns([
                TextColumn::make('personnamn')
                    ->label('Namn')
                    ->sortable()
                    ->size('sm'),
                TextColumn::make('aterkom_at')
                    ->label('Återkom')
                    ->formatStateUsing(fn ($state) => $state ? Carbon::parse($state)->diffForHumans() : '-')
                    ->sortable()
                    ->size('sm'),
                TextColumn::make('gatuadress')
                    ->label('Adress')
                    ->hidden()
                    ->sortable()
                    ->size('sm')
                    ->limit(20),
                TextColumn::make('telefon')
                    ->label('Tel')
                    ->hidden()
                    ->size('sm')
                    ->formatStateUsing(fn ($state) => $state ?? '-'),
            ])
            ->recordActions([
                Action::make('view')
                    ->icon('heroicon-m-eye'),
                Action::make('ring')
                    ->label('Ring')
                    ->icon('heroicon-m-phone-arrow-up-right')
                    ->color('success')
                    ->size('sm')
                    ->url(fn (RingaData $record) => $record->telefon ? 'tel:'.$record->telefon : null)
                    ->disabled(fn (RingaData $record) => ! $record->telefon),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('changeOutcome')
                        ->label('Ändra Utfall')
                        ->icon('heroicon-o-pencil')
                        ->color('warning')
                        ->modalHeading('Ändra Utfall')
                        ->modalDescription('Välj nytt utfall för de markerade posterna.')
                        ->modalSubmitActionLabel('Spara')
                        ->schema([
                            Select::make('outcome')
                                ->label('Nytt Utfall')
                                ->options(fn () => collect(Outcomes::cases())->mapWithKeys(
                                    fn (Outcomes $outcome) => [$outcome->value => $outcome->getLabel()]
                                )->toArray())
                                ->required()
                                ->native(false)
                                ->searchable(),
                        ])
                        ->action(function (Collection $records, array $data): void {
                            $records->each(function ($record) use ($data) {
                                $record->update(['outcome' => $data['outcome']]);
                            });

                            Notification::make()
                                ->title('Utfall uppdaterat')
                                ->success()
                                ->body(count($records).' post(er) uppdaterade.')
                                ->send();
                        }),
                ]),
            ])
            ->emptyStateHeading('Inga resultat hittades')
            ->emptyStateDescription('Inga poster matchar filtret.')
            ->striped();
    }
}
