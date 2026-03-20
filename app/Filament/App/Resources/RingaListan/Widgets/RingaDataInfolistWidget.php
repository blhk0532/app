<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Widgets;

use App\Filament\App\Resources\RingaListan\Schemas\RingaDataInfolist;
use App\Models\RingaData;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;

class RingaDataInfolistWidget extends Widget implements HasActions, HasSchemas
{
    use InteractsWithActions;
    use InteractsWithSchemas;

    public ?RingaData $record = null;

    public ?int $recordId = null;

    protected string $view = 'filament.app.resources.ringa-data.widgets.ringa-data-infolist-widget';

    protected int|string|array $columnSpan = 'full';

    protected static ?string $heading = null;

    protected $listeners = ['record-selected' => 'updateRecord'];

    public function mount(): void
    {
        logger('RingaDataInfolistWidget mount', [
            'record_id' => $this->recordId,
            'record_present' => (bool) $this->record,
        ]);

        if (! $this->record && $this->recordId) {
            $this->record = RingaData::query()->find($this->recordId);

            logger('RingaDataInfolistWidget loaded record from recordId', [
                'recordId' => $this->recordId,
                'found' => (bool) $this->record,
            ]);
        }
    }

    public function updateRecord(int $recordId): void
    {
        $this->record = RingaData::find($recordId);
    }

    public function infolist(Schema $schema): Schema
    {
        if (! $this->record) {
            return $schema->components([]);
        }

        $schema->record($this->record);

        return RingaDataInfolist::configure($schema, $this->record, $this);
    }
}
