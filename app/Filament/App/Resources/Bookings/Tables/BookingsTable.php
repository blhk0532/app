<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Bookings\Tables;

use Adultdate\FilamentBooking\Enums\BookingStatus;
use Adultdate\FilamentBooking\Models\Booking\Booking;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use App\Filament\App\Resources\Bookings\BookingResource;
use Filament\Actions\CreateAction;
class BookingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->query(fn () => Booking::query()->with(['client', 'serviceUser'])->where('booking_user_id', Auth::id()))
            ->extraAttributes(['class' => 'my-booking-table min-h-[400px]'])
            ->columns([
                TextColumn::make('client.name')
                    ->label('Fastighetsägare')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('client.street')
                    ->label('Adress')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('client.city')
                    ->label('Postort')
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('phone')
                    ->label('Telefon')
                    ->searchable()
                    ->toggleable()
                    ->sortable(),
                TextColumn::make('starts_at')
                    ->label('Datum')
                    ->date()
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
                TextColumn::make('serviceUser.name')
                    ->label('Tekniker')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('number')
                    ->label('Bokningsnummer')
                    ->limit(24)
                    ->hidden()
                    ->searchable()
                    ->sortable(),
                TextColumn::make('status')
                    ->badge()
                    ->color(static fn ($state) => $state instanceof BookingStatus
                            ? $state->getColor()
                            : (is_string($state) ? BookingStatus::tryFrom($state)?->getColor() ?? 'gray' : 'gray')
                    )
                    ->sortable(),

            ])
            ->filters([
                TrashedFilter::make(),

                Filter::make('created_at')
                    ->label('Booking date')
                    ->schema([
                        // keep simple - use Filament datepickers if desired
                    ])
                    ->query(function (Builder $query, array $data): Builder {
                        return $query;
                    })
                    ->indicateUsing(function (array $data): array {
                        return [];
                    }),
            ])
            ->recordActions([
                EditAction::make()
                    ->slideOver()
                    ->extraModalFooterActions([
                        DeleteAction::make()
                            ->record(fn ($record) => $record),
                    ]),
                DeleteAction::make(),
            ])
            ->groupedBulkActions([
                DeleteBulkAction::make(),
            ])
            ->toolbarActions([
                CreateAction::make()
                ->label('Ny Bokning')
                ->url(fn () => BookingResource::getUrl('create')),
            ])
            ->groups([
                Group::make('created_at')
                    ->label('Booking date')
                    ->date()
                    ->collapsible(),
            ])
            ->recordClasses(fn (Booking $record) => match (true) {
                $record->status === BookingStatus::Complete => 'bg-success-500/50 dark:bg-success-950/50 ',
                $record->status === BookingStatus::Cancelled => 'bg-danger-500/50 dark:bg-danger-950/50',
                default => null,
            });
    }
}
