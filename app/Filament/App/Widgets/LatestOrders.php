<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use Adultdate\FilamentBooking\Models\Booking\Booking;
use App\Filament\App\Resources\Bookings\BookingResource;
use Filament\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Support\Facades\Auth;
use Shreejan\ActionableColumn\Tables\Columns\ActionableColumn;
use Zvizvi\UserFields\Components\UserColumn;
use Webbingbrasil\FilamentCopyActions\Tables\CopyableTextColumn;

class LatestOrders extends BaseWidget
{
    protected int|string|array $columnSpan = 'full';

    protected static bool $isDiscovered = false;

    protected static ?string $heading = '';

    protected static ?int $sort = 0;

    public function table(Table $table): Table
    {
        return $table
            ->query(Booking::query()->when(Auth::id(), function ($q, $userId) {
                $q->where(function ($q2) use ($userId) {
                    $q2->where('booking_user_id', $userId)
                        ->orWhere('service_user_id', $userId);
                });
            }))
            ->defaultPaginationPageOption(5)
            ->defaultSort('created_at', 'desc')
            ->columns([

                TextColumn::make('number')
                ->hidden()
                    ->searchable()
                    ->sortable(),
                TextColumn::make('client.name')
                    ->label('Fastighetsägare')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('client.street')
                    ->label('Gatuadress')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('client.city')
                    ->label('Postort')
                    ->searchable()
                    ->sortable()
                                      ->toggleable(isToggledHiddenByDefault: true),
                CopyableTextColumn::make('phone')
                    ->label('Telefon')
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->searchable()
                    ->toggleable()
                    ->sortable(),
              TextColumn::make('created_at')
                    ->label('Order date')
                      ->toggleable(isToggledHiddenByDefault: true)
                    ->date()
                    ->sortable(),
                TextColumn::make('serviceUser.name')
                    ->label('Tekniker')
                      ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable()
                    ->sortable(),
                TextColumn::make('service_date')
                    ->label('Service date')
                    ->date()
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('status')
                ->toggleable()
                    ->badge(),
                TextColumn::make('total_price')
                    ->label('Total (SEK)')
                    ->money('SEK', locale: 'sv')
                    ->toggleable()
                    ->searchable()
                    ->sortable(),
                TextColumn::make('service_date')
                    ->label('Service date')
                    ->toggleable()
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
                    ->url(fn (Booking $record): string => BookingResource::getUrl('edit', ['record' => $record], panel: 'app')),
            ]);
    }
}
