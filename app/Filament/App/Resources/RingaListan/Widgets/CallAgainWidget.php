<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Widgets;

use App\Filament\App\Resources\RingaListan\RingaListanResource;
use App\Filament\App\Resources\RingaListan\Tables\RingaDataTable;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class CallAgainWidget extends BaseWidget
{
    protected static ?string $heading = 'Ring tillbaka';

    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 10;

    public function table(Table $table): Table
    {
        return RingaDataTable::configure($table)
            ->query(RingaListanResource::getRingAgainQuery());
    }
}
