<?php

declare(strict_types=1);

namespace App\Filament\Booking\Widgets;

use Adultdate\FilamentBooking\Filament\Clusters\Services\Resources\Bookings\BookingResource;
use Adultdate\FilamentBooking\Models\Booking\Booking;
use Filament\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestBookings extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    protected static bool $isDiscovered = false;

    protected static ?string $heading = '';

    protected static ?int $sort = 0;

    public function table(Table $table): Table
    {
        return $table
            ->query(Booking::query())
            ->defaultPaginationPageOption(5)
            ->defaultSort('created_at', 'desc')
            ->columns([
                TextColumn::make('created_at')
                    ->label('Order date')
                    ->date()
                    ->sortable(),
                TextColumn::make('number')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('client.name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('status')
                    ->badge(),
                TextColumn::make('total_price')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('service_date')
                    ->label('Datum')
                    ->date()
                    ->sortable(),
            ])
            ->emptyStateHeading('(¬_¬")')
            ->emptyStateDescription('Inga Bokningar')
            ->emptyStateActions([
                Action::make('RingaListan')
                    ->label('Ringlista')
                    ->url(route('spa.user-dashboard'))
                    ->icon('heroicon-m-phone-arrow-up-right')
                    ->button(),
            ])
            ->recordActions([
                Action::make('open')
                    ->url(fn (Booking $record): string => BookingResource::getUrl('edit', ['record' => $record])),
            ]);
    }
}
