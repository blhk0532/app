<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaData\Widgets;

use App\Enums\Outcomes;
use App\Models\RingaData;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Forms\Components\Select;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Collection;

class OutcomeHistoryWidget extends BaseWidget
{
    protected static ?string $heading = ' ';

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        $userId = auth()->id();

        return $table
            ->query(fn () => RingaData::query()
                ->where('user_id', $userId)
                ->whereNotNull('outcome')
                ->where('outcome', '!=', ''))
            ->columns([
                TextColumn::make('personnamn')
                    ->label('Namn')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('gatuadress')
                    ->label('Adress')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('outcome')
                    ->label('Utfall')
                    ->badge()
                    ->sortable()
                    ->color(static fn ($state) => $state instanceof Outcomes
                        ? $state->getColor()
                        : (is_string($state) ? Outcomes::tryFrom($state)?->getColor() ?? 'primary' : 'primary')
                    ),
                IconColumn::make('ring')
                    ->label('Ring')
                    ->icon('heroicon-m-phone-arrow-up-right')
                    ->color('success')
                    ->url(fn (RingaData $record) => 'tel:'.$record->telefon),
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
            ->paginated(true)
            ->emptyStateHeading('Inga resultat hittades')
            ->emptyStateDescription('Du har ingen utfallshistorik.');
    }
}
