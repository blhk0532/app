<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Announcement extends Component
{
    public function mount()
    {
        // Initialize any properties if needed
    }

    public function render()
    {
        $announcements = AnnouncementModel::where('is_active', true)
            ->where(function ($query) {
                $query->whereNull('starts_at')
                    ->orWhere('starts_at', '<=', now());
            })
            ->where(function ($query) {
                $query->whereNull('ends_at')
                    ->orWhere('ends_at', '>=', now());
            })
            ->orderBy('priority', 'desc')
            ->orderBy('created_at', 'desc')
            ->get();

        return view('livewire.announcement', compact('announcements'));
    }
}
