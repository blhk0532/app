<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Users;

use App\Filament\App\Resources\Users\Pages\CreateUser;
use App\Filament\App\Resources\Users\Pages\EditUser;
use App\Filament\App\Resources\Users\Pages\ListUsers;
use App\Filament\App\Resources\Users\Pages\ViewUser;
use App\Filament\App\Resources\Users\RelationManagers\OwnedTeamsRelationManager;
use App\Filament\App\Resources\Users\RelationManagers\TeamsRelationManager;
use App\Filament\App\Resources\Users\Schemas\UserForm;
use App\Filament\App\Resources\Users\Schemas\UserInfolist;
use App\Filament\App\Resources\Users\Tables\UsersTable;
use App\Models\User;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use UnitEnum;

use function __;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $tenantOwnershipRelationshipName = null;

    protected static bool $isScopedToTenant = false;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::User;

    protected static bool $isGloballySearchable = true;

    protected static ?string $navigationLabel = 'Användare';

    protected static ?int $navigationSort = 0;

    protected static ?string $recordTitleAttribute = 'name';

    public static function shouldRegisterNavigation(): bool
    {
        $teneant = filament()->getTenant();

        //  if (filament()->getTenant()->getAttribute('is_admin') !== true) {
        //      return false;
        //  }

         if (auth()->user()->role === 'admin' || auth()->user()->role === 'super' || auth()->user()->role === 'manager') {
             return true;
         }

        return false;

    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'email'];
    }

    public static function getGlobalSearchResultUrl($record): string
    {
        return self::getUrl('view', ['record' => $record]);
    }

    public static function getModelLabel(): string
    {
        return __('User');
    }

    public static function getPluralModelLabel(): string
    {
        return __('Users');
    }

    public static function getNavigationLabel(): string
    {
        return __('Användare');
    }

      public static function getNavigationGroup(): ?string
    {
        $team = filament()->getTenant()?->name;
        $name = Str::ucwords($team);

        return $name ? ' TEAM | '.$name : 'TEAM | Administration';
        // return filament()->getTenant()?->name ? filament()->getTenant()?->name : 'Administration';
    }

    public static function getNavigationBadge(): ?string
    {
        if (! auth()->check()) {
            return null;
        }

        $userId = auth()->id();
        $tenantId = filament()->getTenant()?->id ?? auth()->user()?->current_team_id ?? 'none';

        return (string) Cache::remember(
            "filament:users:navigation-badge:{$userId}:{$tenantId}",
            now()->addSeconds(30),
            fn (): int => self::getEloquentQuery()->count(),
        );
    }

    public static function form(Schema $schema): Schema
    {
        return UserForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return UserInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return UsersTable::configure($table);
    }

    public static function getEloquentQuery(): Builder
    {
        $tenantId = filament()->getTenant()?->id
            ?? auth()->user()?->current_team_id;

        return parent::getEloquentQuery()
            ->when($tenantId, function (Builder $query) use ($tenantId) {
                $query->where(function (Builder $query) use ($tenantId) {
                    $query->where('current_team_id', $tenantId)
                        ->orWhereExists(function ($sub) use ($tenantId) {
                            $sub->selectRaw(1)
                                ->from('membership')
                                ->whereColumn('membership.user_id', 'users.id')
                                ->where('membership.team_id', $tenantId);
                        })
                        ->orWhereExists(function ($sub) use ($tenantId) {
                            $sub->selectRaw(1)
                                ->from('teams')
                                ->whereColumn('teams.user_id', 'users.id')
                                ->where('teams.id', $tenantId);
                        });
                });
            })
            ->when(! $tenantId, fn (Builder $query) => $query->whereRaw('1 = 0'));
    }

    //  public static function getRelations(): array
    //  {
    //      return [
    //          OwnedTeamsRelationManager::class,
    //          TeamsRelationManager::class,
    //      ];
    //  }

    public static function getPages(): array
    {
        return [
            'index' => ListUsers::route('/'),
            'create' => CreateUser::route('/create'),
            'view' => ViewUser::route('/{record}'),
            'edit' => EditUser::route('/{record}/edit'),
        ];
    }


    public static function getNavigationBadgeTooltip(): string|Htmlable|null
    {
        return parent::getNavigationBadgeTooltip();
    }

    public static function getNavigationBadgeColor(): string|array|null
    {
        return 'warning';
    }
}
