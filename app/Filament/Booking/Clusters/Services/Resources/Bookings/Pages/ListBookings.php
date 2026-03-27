<?php

declare(strict_types=1);

namespace App\Filament\Booking\Clusters\Services\Resources\Bookings\Pages;

use Adultdate\FilamentBooking\Enums\BookingStatus;
use App\Filament\Booking\Clusters\Services\Resources\Bookings\BookingResource;
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
            null => Tab::make('Show All'),
            'booked' => Tab::make()->query(fn ($query) => $query->where('status', BookingStatus::Booked->value)),
            'confirmed' => Tab::make()->query(fn ($query) => $query->where('status', BookingStatus::Confirmed->value)),

            'cancelled' => Tab::make()->query(fn ($query) => $query->where('status', BookingStatus::Cancelled->value)),

            'completed' => Tab::make()->query(fn ($query) => $query->where('status', BookingStatus::Complete->value)),
        ];
    }

    protected function getActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return BookingResource::getWidgets();
    }

    protected function getFooterWidgets(): array
    {
        return [];
    }

    public function getColumns(): int|array
    {
        return 1;
    }

    public function getHeaderWidgetsColumns(): int|array
    {
        return 1;
    }
}
