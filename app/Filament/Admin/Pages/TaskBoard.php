<?php

namespace App\Filament\Admin\Pages;

use App\Models\Booking\Booking;
use Illuminate\Database\Eloquent\Builder;
use Relaticle\Flowforge\Board;
use Relaticle\Flowforge\BoardPage;
use Relaticle\Flowforge\Column;
use UnitEnum;

class TaskBoard extends BoardPage
{
    protected static string|null|\BackedEnum $navigationIcon = 'heroicon-o-view-columns';

    protected static ?string $navigationLabel = 'Booking Board';

    protected static ?string $title = ' ';

    protected static string|UnitEnum|null $navigationGroup = 'Bookings';

    public function board(Board $board): Board
    {
        return $board
            ->query($this->getEloquentQuery())
            ->recordTitleAttribute('title')
            ->columnIdentifier('status')
            ->positionIdentifier('position')
            ->columns([
                Column::make('booked')->label('Bokad')->color('gray'),
                Column::make('confirmed')->label('Bekräftad')->color('blue'),
                Column::make('cancelled')->label('Avbokad')->color('red'),
                Column::make('complete')->label('Genomförd')->color('green'),
            ]);
    }

    public function getEloquentQuery(): Builder
    {
        return Booking::query();
    }
}
