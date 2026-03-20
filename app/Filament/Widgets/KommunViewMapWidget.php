<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Models\RatsitPostort;
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;
use EduardoRibeiroDev\FilamentLeaflet\Widgets\MapWidget;
use Filament\Support\Colors\Color;

class KommunViewMapWidget extends MapWidget
{
    protected static ?int $sort = 1;

    protected ?string $heading = 'Sweden Kommuner Map';

    protected array $mapCenter = [62.5333, 16.6667];

    protected int $defaultZoom = 6;

    protected int $mapHeight = 660;

    protected int|string|array $columnSpan = 'full';

    public ?string $kommunName = null;

    public int|float|string|null $kommunLatitude = null;

    public int|float|string|null $kommunLongitude = null;

    public function getHeading(): ?string
    {
        if ($this->kommunName !== null && $this->kommunName !== '') {
            return "Karta för {$this->kommunName}";
        }

        return 'Kommun karta';
    }

    protected function getMarkers(): array
    {
        $kommunMarker = $this->getCurrentKommunMarker();
        $postorterMarkers = $this->getPostorterMarkersForCurrentKommun();

        return array_values(array_filter([
            $kommunMarker,
            ...$postorterMarkers,
        ]));
    }

    protected function getCurrentKommunMarker(): ?Marker
    {
        $latitude = $this->parseCoordinate($this->kommunLatitude);
        $longitude = $this->parseCoordinate($this->kommunLongitude);

        if ($latitude === null || $longitude === null) {
            return null;
        }

        $kommunName = $this->kommunName !== null && $this->kommunName !== ''
            ? $this->kommunName
            : 'Kommun';

        return Marker::make($latitude, $longitude)
            ->title("Kommun: {$kommunName}")
            ->popupContent("{$kommunName}")
            ->color(Color::Red);
    }

    protected function getPostorterMarkersForCurrentKommun(): array
    {
        $kommunName = trim((string) $this->kommunName);

        if ($kommunName === '') {
            return [];
        }

        $normalizedKommun = mb_strtolower($kommunName);
        $like = '%'.$normalizedKommun.'%';

        $postorter = RatsitPostort::query()
            ->whereNotNull('lat')
            ->whereNotNull('lng')
            ->where(function ($query) use ($like): void {
                $query->whereRaw('LOWER(kommun) LIKE ?', [$like])
                    ->orWhereRaw('LOWER(personer_kommun) LIKE ?', [$like])
                    ->orWhereRaw('LOWER(foretag_kommun) LIKE ?', [$like]);
            })
            ->selectRaw('post_nummer, post_ort, lat, lng, SUM(personer_count) as personer_count, SUM(foretag_count) as foretag_count')
            ->groupBy('post_nummer', 'post_ort', 'lat', 'lng')
            ->get();

        $markers = [];

        foreach ($postorter as $postort) {
            $markers[] = Marker::make((float) $postort->lat, (float) $postort->lng)
                ->title($postort->post_nummer.' - '.$postort->post_ort)
                ->popupContent($postort->post_nummer.' '.$postort->post_ort.'<br>Personer: '.number_format((int) $postort->personer_count).'<br>Företag: '.number_format((int) $postort->foretag_count))
                ->color(Color::Blue);
        }

        return $markers;
    }

    protected function parseCoordinate(int|float|string|null $value): ?float
    {
        if ($value === null || $value === '') {
            return null;
        }

        $normalizedValue = is_string($value)
            ? str_replace(',', '.', trim($value))
            : $value;

        if (! is_numeric($normalizedValue)) {
            return null;
        }

        return (float) $normalizedValue;
    }
}
