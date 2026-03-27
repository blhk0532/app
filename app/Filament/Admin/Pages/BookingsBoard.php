<?php

namespace App\Filament\Admin\Pages;

use App\Models\Booking\Booking;
use Illuminate\Database\Eloquent\Builder;
use Relaticle\Flowforge\Board;
use Relaticle\Flowforge\BoardPage;
use Relaticle\Flowforge\Column;
use UnitEnum;

class BookingsBoard extends BoardPage
{
    protected static string|null|\BackedEnum $navigationIcon = 'heroicon-o-view-columns';

    protected static ?string $navigationLabel = 'Boknigar Status';

    protected static ?string $title = ' ';

    //   protected static string|UnitEnum|null $navigationGroup = 'Tasks Queue';

    public function board(Board $board): Board
    {
        return $board
            ->query($this->getEloquentQuery())
            ->recordTitleAttribute('title')
            ->columnIdentifier('status')
            ->positionIdentifier('position') // Enable drag-and-drop with position field
            ->columns([
                Column::make('booked')->label('Bokad')->color('gray'),
                Column::make('confirmed')->label('Bekräftad')->color('info'),
                Column::make('cancelled')->label('Avbokad')->color('danger'),
                Column::make('complete')->label('Genomförd')->color('success'),

            ]);
    }

    public function getEloquentQuery(): Builder
    {
        return Booking::query();
    }

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }
}
