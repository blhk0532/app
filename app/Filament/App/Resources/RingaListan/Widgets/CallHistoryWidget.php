<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Widgets;

use App\Filament\App\Resources\RingaListan\Tables\RingaDataTable;
use App\Models\RingaData;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;

class CallHistoryWidget extends BaseWidget
{
    protected static ?string $heading = 'Samtalshistorik';

    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 10;

    public function table(Table $table): Table
    {
        $userId = auth()->id();
        $tenantId = filament()->getTenant()?->id;

        return RingaDataTable::configure($table)
            ->query(
                RingaData::query()
                    ->where(function (Builder $query) use ($userId, $tenantId) {
                        $query->where('user_id', $userId);

                        if ($tenantId) {
                            $query->orWhere('team_id', $tenantId);
                        }
                    })
                    ->whereNotNull('outcome')
                    ->latest('updated_at')
            )
            ->heading('Samtalshistorik')
            ->description('Registrerade utfall');
    }
}
