<?php

declare(strict_types=1);

namespace App\Livewire;

use Livewire\Component;

class Toast extends Component
{
    public function render(): \Illuminate\View\View
    {
        return view('livewire.toast');
    }
}
