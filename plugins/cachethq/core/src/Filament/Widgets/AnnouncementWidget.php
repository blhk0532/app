<?php

declare(strict_types=1);

namespace Cachet\Filament\Widgets;

use App\Models\Announcement;
use Filament\Widgets\Widget;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;

class AnnouncementWidget extends Widget
{
    protected static ?int $sort = 1;

    protected static bool $isLazy = false;

    protected string $view = 'cachet::filament.widgets.announcement-widget';

    public Collection $announcements;

    protected static bool $isDiscovered = true;

    protected array $extraWidgetAttributes = [
        'wire:poll.10s' => 'refreshAnnouncements',
    ];

    protected $listeners = ['refresh-announcement-widget' => 'refreshAnnouncements'];

    public function mount(): void
    {
        $this->announcements = $this->loadAnnouncements();
    }

    public function refreshAnnouncements(): void
    {
        $this->announcements = $this->loadAnnouncements();
    }

    protected function loadAnnouncements(): Collection
    {
        return Announcement::where('is_active', true)
            ->where('team_id', Auth::user()->current_team_id)
            ->with(['user', 'tekniker', 'component'])
            ->orderBy('starts_at', 'desc')
            ->get();
    }

    protected function getViewData(): array
    {
        return [
            'announcements' => $this->announcements,
        ];
    }
}
