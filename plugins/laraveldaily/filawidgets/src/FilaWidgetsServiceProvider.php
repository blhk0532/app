<?php

namespace LaravelDaily\FilaWidgets;

use Illuminate\Support\ServiceProvider;
use LaravelDaily\FilaWidgets\Commands\MakeFilaWidgetCommand;

class FilaWidgetsServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'filawidgets');

        if ($this->app->runningInConsole()) {
            $this->commands([
                MakeFilaWidgetCommand::class,
            ]);
        }
    }
}
