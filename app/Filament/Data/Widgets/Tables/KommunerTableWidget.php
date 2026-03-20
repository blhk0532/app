<?php

declare(strict_types=1);

namespace App\Filament\Data\Widgets\Tables;

use App\Models\RatsitKommun;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Livewire\Attributes\On;

class KommunerTableWidget extends TableWidget
{
    protected static ?int $sort = 2;

    protected static ?string $heading = 'Swedish Kommuner';

    protected int|string|array $columnSpan = 'full';

    #[On('kommun-selected')]
    public function handleKommunSelection(?string $kommun): void {}

    public function table(Table $table): Table
    {
        return $table
            ->query(RatsitKommun::query()->whereNotNull('lat')->whereNotNull('lng'))
            ->columns([
                TextColumn::make('kommun')
                    ->label('Kommun')
                    ->searchable()
                    ->sortable()
                    ->url(fn ($record) => '#')
                    ->action(function ($record) {
                        $this->dispatch('show-postorter', kommun: $record->kommun);
                    }),
                TextColumn::make('personer_count')
                    ->label('Personer')
                    ->numeric()
                    ->sortable()
                    ->formatStateUsing(fn ($state) => number_format($state)),
                TextColumn::make('foretag_count')
                    ->label('Företag')
                    ->numeric()
                    ->sortable()
                    ->formatStateUsing(fn ($state) => number_format($state)),
                TextColumn::make('personer_postorter')
                    ->label('Postorter (Pers)')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('foretag_postorter')
                    ->label('Postorter (Företag)')
                    ->numeric()
                    ->sortable(),
            ])
            ->filters([
                Filter::make('personer_count')
                    ->label('Min antal personer')
                    ->schema([
                        TextInput::make('min_personer')
                            ->numeric()
                            ->label('Min personer'),
                    ])
                    ->query(function ($query, array $data) {
                        return $query->when(
                            $data['min_personer'] ?? null,
                            fn ($q, $min) => $q->where('personer_count', '>=', $min),
                        );
                    }),
                SelectFilter::make('kommun')
                    ->label('Kommun')
                    ->searchable()
                    ->options(fn () => RatsitKommun::pluck('kommun', 'kommun')->toArray()),
            ])
            ->defaultSort('personer_count', 'desc')
            ->paginated([10, 25, 50, 100, 200])
            ->emptyStateHeading('Inga kommuner hittades')
            ->emptyStateDescription('Det finns inga kommuner att visa.');
    }
}
