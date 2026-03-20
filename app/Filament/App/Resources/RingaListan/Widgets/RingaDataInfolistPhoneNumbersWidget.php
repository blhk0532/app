<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Widgets;

use App\Filament\App\Resources\RingaListan\Schemas\RingaDataInfolistPhoneNumbers;
use App\Models\RingaData;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;

class RingaDataInfolistPhoneNumbersWidget extends Widget implements HasActions, HasSchemas
{
    use InteractsWithActions;
    use InteractsWithSchemas;

    public ?RingaData $record = null;

    public ?int $recordId = null;

    protected string $view = 'filament.app.resources.ringa-data.widgets.ringa-data-infolist-phone-numbers-widget';

    protected int|string|array $columnSpan = '1/2';

    protected static ?string $heading = null;

    protected $listeners = ['record-selected' => 'updateRecord'];

    public function mount(): void
    {
        if (! $this->record && $this->recordId) {
            $this->record = RingaData::query()->find($this->recordId);
        }
    }

    public function updateRecord(int $recordId): void
    {
        $this->record = RingaData::query()->find($recordId);
    }

    public function infolist(Schema $schema): Schema
    {
        if (! $this->record) {
            return $schema->components([]);
        }

        $phoneNumbersSection = RingaDataInfolistPhoneNumbers::make($this->record);

        if (! $phoneNumbersSection) {
            return $schema->record($this->record)->components([]);
        }

        return $schema
            ->record($this->record)
            ->components([$phoneNumbersSection]);
    }
}
