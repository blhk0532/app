<?php

namespace App\Http\Livewire;

use Livewire\Component;

class AnnouncementWidget extends Component
{
    public $announcements;

    public function mount($announcements)
    {
        $this->announcements = json_decode($announcements, true);
    }

    public function render()
    {
        return view('livewire.announcement-widget');
    }
}
