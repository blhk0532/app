<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Widgets;

use App\Models\RingaData;
use Filament\Widgets\Widget;

class RingaDataOutcomeFormWidget extends Widget
{
    public ?RingaData $record = null;

    public ?string $tenant = null;

    protected static ?string $heading = 'Call Outcomes';

    protected int|string|array $columnSpan = '1/2';

    protected string $view = 'filament.app.resources.ringa-data.widgets.ringa-data-outcome-form-widget';

    protected static ?int $sort = 2;

    public function mount(): void
    {
        // Set tenant from filament context
        $this->tenant = filament()->getTenant()?->slug;

        // Load the first unprocessed record directly
        // This bypasses Filament's data-passing mechanism which isn't working
        $this->record = RingaData::whereNull('outcome')
            ->orderBy('id')
            ->first();
    }
}
