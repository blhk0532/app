<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RetryOutcomes;

use App\Filament\App\Resources\RetryOutcomes\Pages\EditRetryOutcome;
use App\Filament\App\Resources\RetryOutcomes\Pages\ListRetryOutcomes;
use App\Filament\App\Resources\RetryOutcomes\Pages\ViewRetryOutcome;
use App\Filament\App\Resources\RetryOutcomes\Tables\RetryOutcomesTable;
use App\Models\RingaData;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class RetryOutcomeResource extends Resource
{
    public static bool $shouldRegisterNavigation = false;

    protected static ?string $model = RingaData::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-queue-list';

    protected static ?string $navigationLabel = 'Väntande';

    protected static UnitEnum|string|null $navigationGroup = 'Samtalslistor';

    protected static ?int $navigationSort = 40;

    //  protected static ?string $tenantOwnershipRelationshipName = null;
    //  protected static bool $isScopedToTenant = false;

    public static function form(Schema $schema): Schema
    {
        return $schema;
    }

    public static function infolist(Schema $schema): Schema
    {
        return $schema;
    }

    public static function table(Table $table): Table
    {
        return RetryOutcomesTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListRetryOutcomes::route('/'),
            'view' => ViewRetryOutcome::route('/{record}'),
            'edit' => EditRetryOutcome::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getEloquentQuery()->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return self::getEloquentQuery()->count() > 50 ? 'warning' : 'primary';
    }

    public static function getQuery(): Builder
    {
        return self::getEloquentQuery();
    }

    public static function getEloquentQuery(): Builder
    {
        $userId = auth()->id();

        if (! $userId) {
            return RingaData::query()->whereRaw('1 = 0');
        }

        return RingaData::query()
            ->where('user_id', $userId)
            ->where(function (Builder $query): void {
                $query->where('outcome_category', 'Retry')
                    ->orWhere('outcome', 'Upptagen')
                    ->orWhere('outcome', 'Inget Svar')
                    ->orWhere('outcome', 'Telefonsvarare')
                    ->orWhere('outcome', 'Ej Framkopplad');
            });
    }
}
