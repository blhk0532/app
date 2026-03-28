<?php

declare(strict_types=1);
use Livewire\Component;

new class extends Component
{
    public int $count = 1;

    public function increment()
    {
        $this->count++;
    }
};
