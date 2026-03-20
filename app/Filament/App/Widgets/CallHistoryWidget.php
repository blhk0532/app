<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Filament\App\Resources\RingaListan\Tables\RingaDataTable;
use App\Models\RingaData;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

class CallHistoryWidget extends BaseWidget
{
    protected static ?string $heading = 'Samtalshistorik';

    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 10;

    public static function getBaseQuery(): Builder
    {
        $userId = Auth::id();
        $tenantId = filament()->getTenant()?->id;

        if (! $userId) {
            return RingaData::query()->whereRaw('1 = 0');
        }

        return RingaData::query()
            ->where(function (Builder $query) use ($userId, $tenantId): void {
                $query->where('user_id', $userId);

                if ($tenantId) {
                    $query->orWhere('team_id', $tenantId);
                }
            })
            ->whereNotNull('outcome')
            ->latest('updated_at');
    }

    public function table(Table $table): Table
    {
        return RingaDataTable::configure($table, showScheduleColumns: false)
            ->query(self::getBaseQuery());
        //    ->heading('Samtalshistorik')
        //    ->description('Registrerade utfall');
    }
}
