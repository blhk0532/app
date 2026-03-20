<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Bookings\Pages;

use Adultdate\FilamentBooking\Enums\BookingStatus;
use App\Filament\App\Resources\Bookings\BookingResource;
use Filament\Actions\CreateAction;
use Filament\Pages\Concerns\ExposesTableToWidgets;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;

class ListBookings extends ListRecords
{
    use ExposesTableToWidgets;

    protected static string $resource = BookingResource::class;

    public function getTabs(): array
    {
        return [
            null => Tab::make('Visa Alla'),
            'bokad' => Tab::make('Bokad')->query(fn ($query) => $query->where('status', BookingStatus::Booked->value)),
            'avbokad' => Tab::make('Avbokad')->query(fn ($query) => $query->where('status', BookingStatus::Cancelled->value)),
            'bekräftad' => Tab::make('Bekräftad')->query(fn ($query) => $query->where('status', BookingStatus::Confirmed->value)),
            'genomförd' => Tab::make('Genomförd')->query(fn ($query) => $query->where('status', BookingStatus::Complete->value)),
        ];
    }

    protected function getActions(): array
    {
        return [
            CreateAction::make()
                ->label('Ny Bokning')
                ->url(fn () => BookingResource::getUrl('create')),
        ];
    }

    //    protected function getHeaderWidgets(): array
    //    {
    //        return BookingResource::getWidgets();
    //    }
}
