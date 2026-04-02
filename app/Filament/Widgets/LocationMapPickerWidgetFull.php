<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Models\MapPin;
use Cheesegrits\FilamentGoogleMaps\Fields\Map;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;
use Illuminate\Support\Collection;

class LocationMapPickerWidgetFull extends Widget implements HasForms
{
    use InteractsWithForms;

    public ?array $data = [];

    public int $mapRefreshKey = 0;

    protected string $view = 'filament.queue.widgets.location-map-picker-widget-full';

    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 1;

    public Collection $map_pins;

    protected array $extraWidgetAttributes = [
        'wire:poll.10s' => 'refreshMaps',
    ];

    public function mount(): void
    {
        $this->form->fill([
            'address_search' => null,
            'street' => null,
            'city' => null,
            'state' => null,
            'zip' => null,
            'location' => [
                'lat' => 62.5333,
                'lng' => 16.6667,
            ],
        ]);
    }

    protected $listeners = ['refresh-maps' => 'refreshMaps'];

    public function form(Schema $schema): Schema
    {
        return $schema
            ->extraAttributes(['class' => 'pb-0 mb-0'])
            ->schema([
                Grid::make(4)
                    ->gridContainer()
                    ->extraAttributes(['class' => 'gap-4'])
                    ->schema([
                        Map::make('location')
                            ->label('Map')
                            ->mapControls([
                                'mapTypeControl' => true,
                                'scaleControl' => true,
                                'streetViewControl' => true,
                                'rotateControl' => true,
                                'fullscreenControl' => true,
                                'searchBoxControl' => true,
                                'zoomControl' => true,
                            ])
                            ->height('450px')
                            ->defaultZoom(8)
                            ->autocomplete('address_search')
                            ->autocompleteReverse(true)
                            ->reverseGeocode([
                                'street' => '%S %n',
                                'city' => '%L',
                                'state' => '%A1',
                                'zip' => '%z',
                                'country' => '%c',
                                //    'lat' => 'lat',
                                //    'lng' => 'lng',
                            ])
                            ->debug(true)
                            ->defaultLocation([60.1282, 18.6435])
                            ->draggable(true)
                            ->clickable(true)
                            ->geolocate(true)
                            ->geoJson(function () {
                                $pins = MapPin::all();
                                $features = $pins->map(function ($pin) {
                                    $lat = (float) ($pin->latitude ?? $pin->data['lat'] ?? 0);
                                    $lng = (float) ($pin->longitude ?? $pin->data['lng'] ?? 0);

                                    return [
                                        'type' => 'Feature',
                                        'geometry' => [
                                            'type' => 'Point',
                                            'coordinates' => [$lng, $lat],
                                        ],
                                        'properties' => [
                                            'name' => $pin->name ?? 'Untitled Pin',
                                        ],
                                    ];
                                });

                                return json_encode([
                                    'type' => 'FeatureCollection',
                                    'features' => $features,
                                ]);
                            })
                            ->geoJsonVisible(true)
                            ->geolocateLabel('Get My Location')
                            ->reactive()
                            ->afterStateUpdated(function ($state, $set) {
                                // Optional: logic when map state changes
                            })
                            ->required()
                            ->columnSpanFull(),
                        TextInput::make('street')
                            ->label(' ')
                            ->hidden()
                            ->maxLength(255)
                            ->columnSpan(1)
                            ->readOnly(),
                        TextInput::make('zip')
                            ->label(' ')
                            ->columnSpan(1)
                            ->maxLength(50)
                            ->readOnly(),
                        TextInput::make('city')
                            ->label(' ')
                            ->maxLength(255)
                            ->columnSpan(1)
                            ->readOnly(),
                        TextInput::make('state')
                            ->label(' ')
                            ->maxLength(255)
                            ->columnSpan(1)
                            ->readOnly(),
                        //    TextInput::make('latitude')
                        //        ->label('...')
                        //        ->maxLength(255)
                        //        ->columnSpan(1)
                        //        ->readOnly(),
                        //    TextInput::make('longitude')
                        //        ->label('...')
                        //        ->maxLength(255)
                        //        ->columnSpan(1)
                        //        ->readOnly(),
                        TextInput::make('country')
                            ->label(' ')
                            ->maxLength(255)
                            ->columnSpan(1)
                            ->readOnly(),
                        TextInput::make('address_search')
                            ->label('Sök address eller område')
                            ->extraAttributes(['class' => 'sok-adress'])
                            ->placeholder('Search by street, city, or postal code')
                            ->maxLength(255)
                            ->columnSpan(2),

                        TextInput::make('pin_name')
                            ->label('Pin Name / Note')
                            ->placeholder('Enter a name for this location')
                            ->columnSpan(1),
                        ColorPicker::make('pin_color')
                            ->label('Pin Color')
                            ->placeholder('Enter a color for this pin')
                            ->columnSpan(1),
                    ])
                    ->columns(4),

            ])
            ->statePath('data');
    }

    public function refreshMaps(): void
    {
        $this->map_pins = $this->loadMapPins();
    }

    protected function loadMapPins(): Collection
    {
        return MapPin::all();
    }

    public function savePin(): void
    {
        $payload = $this->form->getState();

        $lat = data_get($payload, 'location.lat') ?? data_get($this->data, 'location.lat');
        $lng = data_get($payload, 'location.lng') ?? data_get($this->data, 'location.lng');

        if (! $lat || ! $lng) {
            Notification::make()
                ->title('Error')
                ->body('Location coordinates are missing.')
                ->danger()
                ->send();

            return;
        }

        MapPin::create([
            'name' => data_get($payload, 'pin_name') ?? data_get($payload, 'address_search') ?? 'Saved Location',
            'latitude' => $lat,
            'longitude' => $lng,
            'description' => data_get($payload, 'address_search'),
            'color' => data_get($payload, 'pin_color'),
            'data' => $payload,
        ]);

        // Keep the current coordinates in state so the map marker remains where the user saved it.
        $this->form->fill([
            ...$payload,
            'pin_name' => null,
            'location' => [
                'lat' => (float) $lat,
                'lng' => (float) $lng,
            ],
        ]);

        // Force the map field to remount so GeoJSON is reloaded with the new pin immediately.
        $this->mapRefreshKey++;
        $this->refreshMaps();

        Notification::make()
            ->title('Success')
            ->body('Location pinned successfully!')
            ->success()
            ->send();

        //    \Log::info('LocationMapPickerWidgetFull: dispatching refresh-pins');
        $this->dispatch('refresh-pins');
        $this->dispatch('refresh-maps');
    }

    public function submit(): void
    {
        $data = $this->form->getState();

        // Here you can dispatch an event or emit the selected location
        $this->dispatch('location-selected', [
            'latitude' => $data['location']['lat'],
            'longitude' => $data['location']['lng'],
        ])->self();
    }
}
