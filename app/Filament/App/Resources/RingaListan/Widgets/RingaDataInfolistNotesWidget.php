<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Widgets;

use App\Filament\App\Resources\RingaListan\Schemas\RingaDataInfolistNotes;
use App\Models\RingaData;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;

class RingaDataInfolistNotesWidget extends Widget implements HasActions, HasSchemas
{
    use InteractsWithActions;
    use InteractsWithSchemas;

    public ?RingaData $record = null;

    public ?int $recordId = null;

    public ?string $user_notes = null;

    protected string $view = 'filament.app.resources.ringa-data.widgets.ringa-data-infolist-notes-widget';

    protected int|string|array $columnSpan = 'full';

    protected static ?string $heading = null;

    protected $listeners = ['record-selected' => 'updateRecord'];

    public function mount(): void
    {
        if (! $this->record && $this->recordId) {
            $this->record = RingaData::query()->find($this->recordId);
        }

        $this->syncUserNotesFromRecord();
    }

    public function updateRecord(int $recordId): void
    {
        $this->record = RingaData::query()->find($recordId);
        $this->syncUserNotesFromRecord();
    }

    private function syncUserNotesFromRecord(): void
    {
        $this->user_notes = $this->record?->user_notes;
    }

    public function infolist(Schema $schema): Schema
    {
        if (! $this->record) {
            return $schema->components([]);
        }

        return $schema
            ->record($this->record)
            ->components([
                RingaDataInfolistNotes::make(),
            ]);
    }
}
