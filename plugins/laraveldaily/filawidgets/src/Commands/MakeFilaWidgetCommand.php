<?php

namespace LaravelDaily\FilaWidgets\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

use function Laravel\Prompts\select;
use function Laravel\Prompts\text;

class MakeFilaWidgetCommand extends Command
{
    protected $signature = 'make:filawidget
                            {name? : The name of the widget class}
                            {--type= : The widget type (SparklineTable, Breakdown, Progress, CompletionRate, HeatmapCalendar)}';

    protected $description = 'Create a new FilaWidgets widget class';

    protected array $types = [
        'SparklineTable' => 'A multi-row metric table with inline sparkline charts and trend badges',
        'Breakdown' => 'A ranked list showing each item\'s value, contribution %, and delta',
        'Progress' => 'A horizontal progress bar with goal tracking and projection',
        'CompletionRate' => 'An SVG arc gauge showing a completion rate with threshold coloring',
        'HeatmapCalendar' => 'A GitHub-style heatmap grid showing daily activity density',
    ];

    public function handle(Filesystem $files): int
    {
        $name = $this->argument('name') ?? text(
            label: 'What should the widget be named?',
            placeholder: 'e.g. RevenueByRegionWidget',
            required: true,
        );

        $type = $this->option('type') ?? select(
            label: 'Which widget type?',
            options: $this->types,
        );

        if (! array_key_exists($type, $this->types)) {
            $this->error("Invalid widget type [{$type}]. Valid types: ".implode(', ', array_keys($this->types)));

            return self::FAILURE;
        }

        $class = Str::studly(class_basename($name));
        $namespace = $this->resolveNamespace($name);

        $stubFile = match ($type) {
            'SparklineTable' => 'sparkline-table-widget.stub',
            'Breakdown' => 'breakdown-widget.stub',
            'Progress' => 'progress-widget.stub',
            'CompletionRate' => 'completion-rate-widget.stub',
            'HeatmapCalendar' => 'heatmap-calendar-widget.stub',
        };

        $stub = $files->get($this->resolveStubPath($stubFile));

        $label = (string) Str::of($class)
            ->classBasename()
            ->kebab()
            ->replace('-', ' ')
            ->title()
            ->replaceLast(' Widget', '');

        $content = str_replace(
            ['{{ namespace }}', '{{ class }}', '{{ label }}'],
            [$namespace, $class, $label],
            $stub,
        );

        $path = $this->resolveFilePath($name);

        if ($files->exists($path)) {
            $this->error("Widget [{$path}] already exists.");

            return self::FAILURE;
        }

        $files->ensureDirectoryExists(dirname($path));
        $files->put($path, $content);

        $this->components->info("Widget [{$namespace}\\{$class}] created successfully.");

        return self::SUCCESS;
    }

    protected function resolveStubPath(string $stub): string
    {
        $customPath = base_path("stubs/filawidgets/{$stub}");

        if (file_exists($customPath)) {
            return $customPath;
        }

        return dirname(__DIR__, 2)."/stubs/{$stub}";
    }

    protected function resolveNamespace(string $name): string
    {
        $name = str_replace('/', '\\', $name);

        if (Str::contains($name, '\\')) {
            return Str::beforeLast('App\\Filament\\Widgets\\'.$name, '\\');
        }

        return 'App\\Filament\\Widgets';
    }

    protected function resolveFilePath(string $name): string
    {
        $name = str_replace('/', '\\', $name);
        $class = Str::studly(class_basename($name));

        if (Str::contains($name, '\\')) {
            $directory = Str::beforeLast($name, '\\');

            return app_path('Filament/Widgets/'.str_replace('\\', '/', $directory).'/'.$class.'.php');
        }

        return app_path('Filament/Widgets/'.$class.'.php');
    }
}
