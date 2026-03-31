<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\Bookings\Tables;

use Adultdate\FilamentBooking\Enums\BookingStatus;
use Adultdate\FilamentBooking\Models\Booking\Booking;
use App\Filament\Admin\Resources\Bookings\BookingResource;
use Webbingbrasil\FilamentCopyActions\Tables\CopyableTextColumn;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Grouping\Group;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Shreejan\ActionableColumn\Tables\Columns\ActionableColumn;
use Zvizvi\UserFields\Components\UserColumn;

class BookingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->query(fn () => Booking::query()->with(['client', 'serviceUser', 'bookingUser'])->where('booking_user_id', Auth::id()))
            ->extraAttributes(['class' => 'my-booking-table min-h-[400px]'])
            ->columns([
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
                    ->toggleable(),
                CopyableTextColumn::make('phone')
                    ->label('Telefon')
                    ->searchable()
                    ->toggleable()
                    ->sortable(),
                UserColumn::make('bookingUser')
                    ->label('Bokare')
                    ->toggleable()
                    ->searchable(),
                 TextColumn::make('created_at')
                    ->limit(10)
                    ->label('Skapad')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                TextColumn::make('number')
                    ->label('Bokningsnummer')
                    ->limit(48)
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable()
                    ->sortable(),
                TextColumn::make('serviceUser.name')
                    ->label('Tekniker')
                    ->searchable()
                    ->toggleable()
                    ->sortable(),
                ActionableColumn::make('status')
                    ->badge()
                    ->sortable()
                    ->toggleable(false)
                    ->label('Status')
                    ->color(static fn ($state) => $state instanceof BookingStatus
                            ? $state->getColor()
                            : (is_string($state) ? BookingStatus::tryFrom($state)?->getColor() ?? 'gray' : 'gray')
                    )
                    ->actionIcon(
                        static fn ($state) => $state instanceof BookingStatus
                            ? $state->getIcon()
                            : (is_string($state) ? BookingStatus::tryFrom($state)?->getIcon() ?? 'heroicon-o-calendar-days' : 'heroicon-m-check-circle')
                    )
                    ->actionIconColor(
                        static fn ($state) => $state instanceof BookingStatus
                            ? $state->getColor()
                            : (is_string($state) ? BookingStatus::tryFrom($state)?->getColor() ?? 'gray' : 'gray')
                    )
                    ->clickableColumn()
                    ->tapAction(
                        Action::make('changeOutcome')
                            ->label('Uppdatera Status')
                            ->tooltip('Click to update status')
                            ->schema([
                                Select::make('status')
                                    ->options(fn () => collect(BookingStatus::cases())->mapWithKeys(
                                        fn (BookingStatus $status) => [$status->value => $status->getLabel()]
                                    )->toArray())
                                    ->required(),
                            ])
                            ->fillForm(fn ($record) => [
                                'status' => $record->status,
                            ])
                            ->action(function ($record, array $data) {
                                $record->update($data);
                            })
                    ),
                TextColumn::make('starts_at')
                    ->label('Datum')
                    ->date()
                    ->searchable()
                    ->sortable()
                    ->toggleable(),
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
