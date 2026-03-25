<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Bookings\Pages;

use Adultdate\FilamentBooking\Enums\BookingStatus;
use App\Filament\App\Resources\Bookings\BookingResource;
use Filament\Actions\CreateAction;
use Filament\Pages\Concerns\ExposesTableToWidgets;
use Filament\Resources\Pages\ListRecords;
use Filament\Schemas\Components\Tabs\Tab;
use Illuminate\Contracts\Support\Htmlable;

class ListBookings extends ListRecords
{
    use ExposesTableToWidgets;

    protected static string $resource = BookingResource::class;

    public function getTabs(): array
    {
        return [
            null => Tab::make('Visa Alla'),
            'bokad' => Tab::make('Väntande')->query(fn ($query) => $query->where('status', BookingStatus::Booked->value)),
                    'bekräftad' => Tab::make('Bekräftad')->query(fn ($query) => $query->where('status', BookingStatus::Confirmed->value)),
            'avbokad' => Tab::make('Avbokade')->query(fn ($query) => $query->where('status', BookingStatus::Cancelled->value)),

            'genomförd' => Tab::make('Genomförda')->query(fn ($query) => $query->where('status', BookingStatus::Complete->value)),
        ];
    }

    protected function getActions(): array
    {
        return [
        ];
    }

public function getHeading(): string|Htmlable|null
{
    return null;
}

    public function getBreadcrumbs(): array
    {
        return [];
    }
}
