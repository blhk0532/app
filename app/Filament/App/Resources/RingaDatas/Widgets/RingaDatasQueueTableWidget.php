<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Widgets;

use App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData;
use App\Filament\App\Resources\RingaDatas\Tables\RingaDatasTable;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;
use Livewire\Attributes\On;

class RingaDatasQueueTableWidget extends BaseWidget
{
    public ?int $selectedRecordId = null;

    protected static ?string $heading = '';

    protected int|string|array $columnSpan = 'full';

    public function mount(): void
    {
        $this->loadInitialRecord();
    }

    #[On('record-selected')]
    public function updateRecordId(int $recordId): void
    {
        $this->selectedRecordId = $recordId;
        $this->dispatch('refresh-table');
    }

    public function table(Table $table): Table
    {
        return RingaDatasTable::configure($table)
            ->query(function () {
                $query = QueueRingaData::getQuery();

                if (! $this->selectedRecordId) {
                    return $query->whereRaw('1=0');
                }

                $selectedGatuadress = (clone $query)->where('id', $this->selectedRecordId)->value('gatuadress');

                return $query->where('gatuadress', $selectedGatuadress);
            })
            ->paginated(false)
            ->extraAttributes([
                'class' => 'queue-table-widget',
            ])
            ->emptyStateHeading('Ingen aktuell post vald')
            ->emptyStateDescription('Välj en post från listan eller kalendern för att se detaljer.');
    }

    protected function loadInitialRecord(): Builder
    {
        $query = QueueRingaData::getQuery();
        $this->selectedRecordId = $query->first()?->id;

        return $query;
    }
}
