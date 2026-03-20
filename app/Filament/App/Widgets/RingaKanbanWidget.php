<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Models\RingaData;
use Filament\Widgets\Widget;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class RingaKanbanWidget extends Widget
{
    protected int|string|array $columnSpan = 'full';

    public function getRecords(): array
    {
        $userId = Auth::id();
        $teamId = filament()->getTenant()?->id;

        $records = RingaData::query()
            ->where('is_outcome', false)
            ->where(function ($q) use ($userId, $teamId) {
                $q->where('user_id', $userId)
                    ->orWhere('team_id', $teamId);
            })
            ->orderBy('created_at', 'desc')
            ->limit(100)
            ->get()
            ->groupBy('outcome');

        return $records->toArray();
    }

    protected function getColumns(): array
    {
        return [
            'Ej Framkopplad' => 'Ej Framkopplad',
            'Upptagen' => 'Upptagen',
            'Inget Svar' => 'Inget Svar',
            'Voicemail' => 'Telefonsvar',
            'Ring Igen' => 'Ring Igen 3',
            'Återkommer' => 'Återkommer',
            'Ring Tillbaka' => 'Ring Tillbaka',
        ];
    }

    public function render(): View
    {
        return view('filament.app.widgets.ringa-kanban-widget', [
            'records' => $this->getRecords(),
            'columns' => $this->getColumns(),
        ]);
    }
}
