<?php

declare(strict_types=1);

use App\Filament\Widgets\KommunViewPostorterMapWidget;
use App\Models\RatsitPostort;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('it shows all postort pins for current kommun', function () {
    RatsitPostort::query()->create([
        'post_ort' => 'Gävle',
        'post_nummer' => '801 00',
        'personer_count' => 100,
        'foretag_count' => 15,
        'personer_kommun' => 'Gävle',
        'foretag_kommun' => 'Gävle',
        'kommun' => 'Gävle',
        'lat' => 60.6749,
        'lng' => 17.1413,
    ]);

    RatsitPostort::query()->create([
        'post_ort' => 'Valbo',
        'post_nummer' => '818 30',
        'personer_count' => 50,
        'foretag_count' => 7,
        'personer_kommun' => 'Gävle',
        'foretag_kommun' => 'Gävle',
        'kommun' => 'Gävle',
        'lat' => 60.6522,
        'lng' => 17.0024,
    ]);

    RatsitPostort::query()->create([
        'post_ort' => 'Uppsala',
        'post_nummer' => '750 00',
        'personer_count' => 99,
        'foretag_count' => 12,
        'personer_kommun' => 'Uppsala',
        'foretag_kommun' => 'Uppsala',
        'kommun' => 'Uppsala',
        'lat' => 59.8586,
        'lng' => 17.6389,
    ]);

    $widget = new class extends KommunViewPostorterMapWidget
    {
        public function exposedMarkers(): array
        {
            return $this->getMarkers();
        }

        public function exposedMapCenter(): array
        {
            return $this->getMapCenter();
        }
    };

    $widget->kommunName = 'Gävle';
    $widget->kommunLatitude = '60.6749';
    $widget->kommunLongitude = '17.1413';

    $markers = collect($widget->exposedMarkers())->map(fn ($marker) => $marker->toArray());

    expect($markers)->toHaveCount(2)
        ->and($markers->pluck('title')->all())->toContain('801 00 - Gävle')
        ->toContain('818 30 - Valbo')
        ->not()->toContain('750 00 - Uppsala')
        ->and($widget->exposedMapCenter())->toBe([60.6749, 17.1413]);
});
