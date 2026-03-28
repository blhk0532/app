<?php

declare(strict_types=1);

namespace Livewire\Mechanisms;

use Illuminate\Console\Events\CommandFinished;

class ClearCachedFiles extends Mechanism
{
    public function boot()
    {
        // Hook into Laravel's view:clear and optimize:clear command to also clear Livewire compiled files
        $eventCommands = [
            'view:clear',
            'optimize:clear',
        ];

        if (app()->runningInConsole()) {
            app('events')->listen(CommandFinished::class, function ($event) use ($eventCommands) {
                if (in_array($event->command, $eventCommands) && $event->exitCode === 0) {
                    app('livewire.compiler')->clearCompiled($event->output);
                }
            });
        }
    }
}
