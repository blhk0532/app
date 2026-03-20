<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Widgets;

use App\Models\RingaData;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class RingaDataStatsWidget extends StatsOverviewWidget
{
    protected static ?int $sort = -1;

    protected int|string|array $columnSpan = 12;

    protected function getStats(): array
    {
        $connection = (new RingaData)->getConnectionName() ?: config('database.default');
        $driver = config('database.connections.'.$connection.'.driver');
        // Count records with phone (check actual telefon field, not just is_telefon flag)
        $telefonCount = RingaData::where(function ($query) {
            $query->where('user_id', auth()->id())
                ->whereNull('outcome');
        })->count();

        // Count sum of all attempts in the list
        $attemptCount = (int) RingaData::sum('attempts');

        // Count records with outcome is not null
        $outcomes = (int) RingaData::whereNotNull('outcome')->count();

        // Count records with booking_id not null
        $bookings = (int) RingaData::whereNotNull('booking_id')->count();

        return [
            Stat::make('Samtalskö', number_format($telefonCount))
                ->description('Samtalskön')
                ->color('success')
                ->icon('heroicon-o-phone'),

            Stat::make('Försök', number_format($attemptCount))
                ->description('Totala försök')
                ->color('primary')
                ->icon('heroicon-o-phone-arrow-up-right'),

            Stat::make('Utfall', number_format($outcomes))
                ->description('Utfall samtal')
                ->color('warning')
                ->icon('heroicon-o-check-badge'),

            Stat::make('Bokningar', number_format($bookings))
                ->description('Mina bokningar')
                ->color('gray')
                ->icon('heroicon-o-check-circle'),
        ];
    }
}
