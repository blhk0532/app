<?php

declare(strict_types=1);

namespace App\Filament\Booking\Widgets;

use App\Filament\Admin\Pages\BookingsBoard;
use App\Models\Booking\Booking;
use Filament\Widgets\Widget;
use Illuminate\Database\Eloquent\Builder;
use Relaticle\Flowforge\Board;
use Relaticle\Flowforge\Column;

class KanbanWidget extends Widget
{
    protected static bool $isLazy = false;

    protected static ?int $sort = -3;

    protected int|string|array $columnSpan = 'full';

    /**
     * @var view-string
     */
    protected string $view = 'filament.widgets.kanban';

    public function board(?Board $board): Board
    {
        return $board
            ->query($this->getEloquentQuery())
            ->recordTitleAttribute('title')
            ->columnIdentifier('status')
            ->positionIdentifier('position') // Enable drag-and-drop with position field
            ->columns([
                Column::make('booked')->label('Bokad')->color('gray'),
                Column::make('confirmed')->label('Bekräftad')->color('primary'),
                Column::make('cancelled')->label('Avbokad')->color('danger'),
                Column::make('complete')->label('Genomförd')->color('success'),

            ]);
    }

    public function getEloquentQuery(): Builder
    {
        return Booking::query();
    }

    protected function kanbanWidget(): array
    {
        return [
            BookingsBoard::class,
        ];
    }

    protected function getViewData(): array
    {
        return [
            'kanbanWidget' => $this->kanbanWidget(),
        ];
    }

    public function getColumnSpan(): int|string|array
    {
        return 'full';
    }
}
