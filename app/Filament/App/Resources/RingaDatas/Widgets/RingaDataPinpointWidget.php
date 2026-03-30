<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Widgets;

use App\Models\RingaData;
use Fahiem\FilamentPinpoint\Pinpoint;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;

class RingaDataPinpointWidget extends Widget implements HasForms
{
    use InteractsWithForms;

    public ?array $data = [];

    public ?RingaData $record = null;

    public ?int $recordId = null;

    protected string $view = 'filament.app.resources.ringa-data.widgets.ringa-data-pinpoint-widget';

    protected int|string|array $columnSpan = 'md';

    protected static ?string $heading = '';

    protected $listeners = ['record-selected' => 'updateRecord'];

    public function updateRecord(int $recordId): void
    {
        $this->recordId = $recordId;
        $this->record = RingaData::query()->find($recordId);
        logger('RingaDataPinpointWidget updated record via event', ['recordId' => $recordId, 'found' => (bool) $this->record]);
        if ($this->record && $this->record->latitud && $this->record->longitude) {
            $this->data = [
                'location' => null,
                'lat' => $this->record->latitud,
                'lng' => $this->record->longitude,
                'address' => $this->record->gatuadress ?? null,
            ];

            // Force Livewire to refresh the component
            $this->dispatch('$refresh');
        }
    }

    public function mount(): void
    {
        logger('RingaDataPinpointWidget mount', [
            'record_id' => $this->recordId,
            'record_present' => (bool) $this->record,
        ]);

        // If record is missing but recordId is provided, load it
        if (! $this->record && $this->recordId) {
            $this->record = RingaData::query()->find($this->recordId);
            logger('RingaDataPinpointWidget loaded record from recordId', [
                'recordId' => $this->recordId,
                'found' => (bool) $this->record,
            ]);
        }

        if ($this->record && ($this->record->latitud || $this->record->longitude)) {
            $this->data = [
                'location' => null,
                'lat' => $this->record->latitud ?? $this->getDefaultState()['lat'],
                'lng' => $this->record->longitude ?? $this->getDefaultState()['lng'],
                'address' => $this->record->gatuadress ?? null,
            ];
        } else {
            $this->data = [];
        }
    }

    public function form(Schema $schema): Schema
    {
        // Only show map when we have a record with coordinates
        if (! $this->record || (! $this->record->latitud && ! $this->record->longitude)) {
            return $schema->schema([]);
        }

        $defaults = config('filament-pinpoint.default');

        $lat = (float) ($defaults['lat'] ?? -0.5050);
        $lng = (float) ($defaults['lng'] ?? 117.1500);
        $label = $this->record ? ($this->record->id.' ⌗ '.$this->record->personnamn.' ⌗ '.$this->record->gatuadress.' '.$this->record->postort.' '.$this->record->lan) : null;

        return $schema
            ->schema([
                Pinpoint::make('location')
                    ->height(300)
                    ->label($label)
                    ->latField('lat')
                    ->lngField('lng')
                    ->addressField('address')
                    ->searchable(false)
                    ->defaultLocation($lat, $lng)
                    ->defaultZoom(18)
                    ->height(420)
                    ->columnSpanFull(),
            ])
            ->statePath('data')
            ->extraAttributes(['class' => 'filament-pinpoint-widget']);

    }

    public function save(): void
    {
        $state = $this->data ?? [];

        Notification::make()
            ->title('Coordinates captured')
            ->body(
                'Lat: '.($state['lat'] ?? '—').', Lng: '.($state['lng'] ?? '—'),
            )
            ->success()
            ->send();
    }

    public function resetForm(): void
    {
        $this->data = $this->getDefaultState();
    }

    protected function getDefaultState(): array
    {
        $defaults = config('filament-pinpoint.default');

        return [
            'location' => null,
            'lat' => $defaults['lat'] ?? -0.5050,
            'lng' => $defaults['lng'] ?? 117.1500,
            'address' => null,
        ];
    }
}
