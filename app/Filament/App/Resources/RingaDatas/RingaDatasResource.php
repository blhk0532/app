<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas;

use App\Filament\App\Resources\RingaDatas\Pages\CreateRingaData;
use App\Filament\App\Resources\RingaDatas\Pages\EditRingaData;
use App\Filament\App\Resources\RingaDatas\Pages\ListRingaData;
use App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData;
use App\Filament\App\Resources\RingaDatas\Pages\ViewRingaData;
use App\Filament\App\Resources\RingaDatas\Schemas\RingaDataForm;
use App\Filament\App\Resources\RingaDatas\Schemas\RingaDataInfolist;
use App\Filament\App\Resources\RingaDatas\Tables\RingaDataTable;
use App\Models\RingaData;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;

class RingaDatasResource extends Resource
{
    public static bool $shouldRegisterNavigation = false;

    protected static ?string $model = RingaData::class;

    protected static string|BackedEnum|null $navigationIcon = Remix::RiTimerFlashLine;

    protected static string|BackedEnum|null $activeNavigationIcon = Remix::RiTimerFlashFill;

    protected static ?string $navigationLabel = 'Ringa Data';

    protected static UnitEnum|string|null $navigationGroup = ' ';

    protected static ?string $slug = 'ringa/data';

    protected static ?int $navigationSort = 2;

    // Make this resource global (not tenant-scoped) since Ringa data is public information
    protected static ?string $tenantOwnershipRelationshipName = null;

    protected static bool $isScopedToTenant = false;

    public static function shouldRegisterNavigation(): bool
    {

        return false;
    }

    public static function form(Schema $schema): Schema
    {
        return RingaDataForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return RingaDataInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return RingaDataTable::configure($table);
    }

    public static function getEloquentQuery(): Builder
    {
        $query = parent::getEloquentQuery();

        $user = auth()->user();

        if (! $user) {
            return $query;
        }

        if (in_array($user->role, ['super', 'admin'], true)) {
            return $query;
        }

        $userId = $user->id;
        $tenantId = filament()->getTenant()?->id;
        $teamIds = $user->teams()->pluck('teams.id')->all();

        $query->where(function (Builder $query) use ($userId, $tenantId, $teamIds) {
            $hasAppliedCondition = false;

            if ($userId) {
                $query->where(function (Builder $userQuery) use ($userId) {
                    $userIdString = (string) $userId;

                    $userQuery->where('user_id', $userIdString)
                        ->orWhereRaw('FIND_IN_SET(?, user_id)', [$userIdString]);
                });

                $hasAppliedCondition = true;
            }

            if ($tenantId) {
                if ($hasAppliedCondition) {
                    $query->orWhere('team_id', $tenantId);
                } else {
                    $query->where('team_id', $tenantId);
                }

                $hasAppliedCondition = true;
            }

            if (! empty($teamIds)) {
                if ($hasAppliedCondition) {
                    $query->orWhereIn('team_id', $teamIds);
                } else {
                    $query->whereIn('team_id', $teamIds);
                }
            }
        });

        return $query;
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListRingaData::route('/'),
            'create' => CreateRingaData::route('/create'),
            'queue' => QueueRingaData::route('/queue'),
            'view' => ViewRingaData::route('/{record}'),
            'edit' => EditRingaData::route('/{record}/edit'),
        ];
    }
}
