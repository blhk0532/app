<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Models\RatsitPostort;
use App\Models\SwedenPostorter;
use EduardoRibeiroDev\FilamentLeaflet\Support\Markers\Marker;
use EduardoRibeiroDev\FilamentLeaflet\Widgets\MapWidget;
use Filament\Support\Colors\Color;
use Illuminate\Database\Eloquent\Builder;

class KommunViewPostorterMapWidget extends MapWidget
{
    protected static ?int $sort = 1;

    protected ?string $heading = 'Sweden Postorter Map';

    protected int $defaultZoom = 9;

    protected int $mapHeight = 660;

    protected int|string|array $columnSpan = '1/2';

    public ?string $kommunName = null;

    public int|float|string|null $kommunLatitude = null;

    public int|float|string|null $kommunLongitude = null;

    public function getHeading(): ?string
    {
        if ($this->kommunName !== null && $this->kommunName !== '') {
            return "Postorter i {$this->kommunName}";
        }

        return 'Postorter för kommun';
    }

    protected function getMarkers(): array
    {
        return $this->getPostorterMarkersForKommun();
    }

    protected function getMapCenter(): array
    {
        $latitude = $this->parseCoordinate($this->kommunLatitude);
        $longitude = $this->parseCoordinate($this->kommunLongitude);

        if ($latitude !== null && $longitude !== null) {
            return [$latitude, $longitude];
        }

        $firstPostort = $this->getRelatedPostorterQuery()
            ->select('lat', 'lng')
            ->first();

        if ($firstPostort !== null) {
            return [(float) $firstPostort->lat, (float) $firstPostort->lng];
        }

        $searchTerms = $this->getKommunSearchTerms();

        $fallbackPostort = SwedenPostorter::query()
            ->whereNotNull('latitude')
            ->whereNotNull('longitude')
            ->when($searchTerms !== [], function (Builder $query) use ($searchTerms): void {
                $query->where(function (Builder $query) use ($searchTerms): void {
                    foreach ($searchTerms as $index => $term) {
                        $like = '%'.$term.'%';

                        if ($index === 0) {
                            $query->whereRaw('LOWER(kommun) LIKE ?', [$like]);

                            continue;
                        }

                        $query->orWhereRaw('LOWER(kommun) LIKE ?', [$like]);
                    }
                });
            })
            ->select('latitude', 'longitude')
            ->first();

        if ($fallbackPostort !== null) {
            $fallbackLatitude = $this->parseCoordinate($fallbackPostort->latitude);
            $fallbackLongitude = $this->parseCoordinate($fallbackPostort->longitude);

            if ($fallbackLatitude !== null && $fallbackLongitude !== null) {
                return [$fallbackLatitude, $fallbackLongitude];
            }
        }

        return parent::getMapCenter();
    }

    protected function getPostorterMarkersForKommun(): array
    {
        $searchTerms = $this->getKommunSearchTerms();

        $postorter = $this->getRelatedPostorterQuery()
            ->selectRaw('post_nummer, post_ort, lat, lng, SUM(personer_count) as personer_count, SUM(foretag_count) as foretag_count')
            ->groupBy('post_nummer', 'post_ort', 'lat', 'lng')
            ->get();

        $markers = [];

        foreach ($postorter as $postort) {
            $markers[] = Marker::make((float) $postort->lat, (float) $postort->lng)
                ->title($postort->post_nummer.' - '.$postort->post_ort)
                ->tooltipContent('Personer: '.number_format((int) $postort->personer_count))
                ->popupContent($postort->post_nummer.' '.$postort->post_ort.'<br>Personer: '.number_format((int) $postort->personer_count).'<br>Företag: '.number_format((int) $postort->foretag_count))
                ->color(Color::Blue);
        }

        if ($markers === []) {
            $fallbackPostorter = SwedenPostorter::query()
                ->whereNotNull('latitude')
                ->whereNotNull('longitude')
                ->when($searchTerms !== [], function (Builder $query) use ($searchTerms): void {
                    $query->where(function (Builder $query) use ($searchTerms): void {
                        foreach ($searchTerms as $index => $term) {
                            $like = '%'.$term.'%';

                            if ($index === 0) {
                                $query->whereRaw('LOWER(kommun) LIKE ?', [$like]);

                                continue;
                            }

                            $query->orWhereRaw('LOWER(kommun) LIKE ?', [$like]);
                        }
                    });
                })
                ->select('post_ort', 'latitude', 'longitude', 'personer', 'foretag')
                ->get();

            foreach ($fallbackPostorter as $postort) {
                $latitude = $this->parseCoordinate($postort->latitude);
                $longitude = $this->parseCoordinate($postort->longitude);

                if ($latitude === null || $longitude === null) {
                    continue;
                }

                $markers[] = Marker::make($latitude, $longitude)
                    ->title((string) $postort->post_ort)
                    ->tooltipContent('Personer: '.number_format((int) ($postort->personer ?? 0)))
                    ->popupContent((string) $postort->post_ort.'<br>Personer: '.number_format((int) ($postort->personer ?? 0)).'<br>Företag: '.number_format((int) ($postort->foretag ?? 0)))
                    ->color(Color::Blue);
            }
        }

        return $markers;
    }

    protected function getRelatedPostorterQuery(): Builder
    {
        $searchTerms = $this->getKommunSearchTerms();

        return RatsitPostort::query()
            ->whereNotNull('lat')
            ->whereNotNull('lng')
            ->when($searchTerms !== [], function ($query) use ($searchTerms): void {
                $query->where(function ($query) use ($searchTerms): void {
                    foreach ($searchTerms as $index => $term) {
                        $like = '%'.$term.'%';

                        if ($index === 0) {
                            $query->whereRaw('LOWER(kommun) LIKE ?', [$like])
                                ->orWhereRaw('LOWER(personer_kommun) LIKE ?', [$like])
                                ->orWhereRaw('LOWER(foretag_kommun) LIKE ?', [$like]);

                            continue;
                        }

                        $query->orWhereRaw('LOWER(kommun) LIKE ?', [$like])
                            ->orWhereRaw('LOWER(personer_kommun) LIKE ?', [$like])
                            ->orWhereRaw('LOWER(foretag_kommun) LIKE ?', [$like]);
                    }
                });
            });
    }

    protected function getKommunSearchTerms(): array
    {
        $normalizedKommun = mb_strtolower(trim((string) $this->kommunName));

        if ($normalizedKommun === '') {
            return [];
        }

        $baseKommun = preg_replace('/\s+kommun$/u', '', $normalizedKommun) ?? $normalizedKommun;
        $baseKommun = trim($baseKommun);

        return array_values(array_unique(array_filter([
            $normalizedKommun,
            $baseKommun,
        ])));
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
