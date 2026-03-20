<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaData;

use App\Filament\App\Resources\RingaData\Pages\CreateRingaData;
use App\Filament\App\Resources\RingaData\Pages\EditRingaData;
use App\Filament\App\Resources\RingaData\Pages\ListRingaData;
use App\Filament\App\Resources\RingaData\Pages\ViewRingaData;
use App\Filament\App\Resources\RingaData\Schemas\RingaDataForm;
use App\Filament\App\Resources\RingaData\Schemas\RingaDataInfolist;
use App\Filament\App\Resources\RingaData\Tables\RingaDataTable;
use App\Filament\App\Resources\RingaDatas\Pages\QueueRingaData;
use App\Filament\App\Resources\RingaListan\RingaListanResource;
use App\Models\RingaData;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Novius\LaravelFilamentActionPreview\Filament\Actions\PreviewAction;
use UnitEnum;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;

class RingaDataResource extends Resource
{
    protected static ?string $model = RingaData::class;

    protected static ?string $title = 'Ringadata';

    protected static string|BackedEnum|null $navigationIcon = Remix::RiStackLine;

    protected static string|BackedEnum|null $activeNavigationIcon = Remix::RiStackFill;

    protected static ?string $navigationLabel = 'Nummer';

    protected static UnitEnum|string|null $navigationGroup = '';

    protected static ?string $slug = 'nummer/lista';

    protected static ?int $navigationSort = 2;

    // Make this resource global (not tenant-scoped) since Ringa data is public information
    protected static ?string $tenantOwnershipRelationshipName = null;

    protected static bool $isScopedToTenant = false;

    public static function getNavigationGroup(): ?string
    {
        return 'Team Admin';
        // return filament()->getTenant()?->name ? filament()->getTenant()?->name : 'Administration';
    }

    public static function shouldRegisterNavigation(): bool
    {
        //  $teneant = filament()->getTenant();
        //  if (filament()->getTenant()->getAttribute('is_admin') !== true) {
        //      return true;
        //  }
        //   if (auth()->user()->role === 'admin' || auth()->user()->role === 'super' || auth()->user()->role === 'manager') {
        //       return true;
        //   }

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

    public static function getGloballySearchableAttributes(): array
    {
        return ['personnamn', 'telefon', 'gatuadress'];
    }

    public static function getGlobalSearchResultDetails(Model $record): array
    {
        /** @var RingaData $record */

        return [
            'Adress' => $record->gatuadress,
            'PostOrt' => $record->postort.' '.$record->postnummer,
        ];
    }

    public static function getGlobalSearchResultActions(Model $record): array
    {
        return [
            Action::make('view')
                ->icon('heroicon-m-eye')
                ->url(fn (RingaData $record) => RingaListanResource::getUrl('view', ['record' => $record])),
            PreviewAction::make()
                ->label('Edit'),
            Action::make('ring')
                ->label('Ring')
                ->icon('heroicon-m-phone-arrow-up-right')
                ->color('success')
                ->url(fn (RingaData $record) => 'tel:'.$record->telefon),
        ];
    }

    public static function getGlobalSearchEloquentQuery(): Builder
    {
        return parent::getGlobalSearchEloquentQuery()->where('user_id', auth()->id());
    }

    public static function getGlobalSearchResultTitle(Model $record): string|Htmlable
    {
        return $record->personnamn;
    }

    public static function getGlobalSearchResultUrl(Model $record): string
    {
        return RingaDataResource::getUrl('view', ['record' => $record]);
    }

    public static function getEloquentQuery(): Builder
    {
        $query = parent::getEloquentQuery();
        $user = auth()->user();

        if ($user && in_array($user->role, ['super'])) {
            return $query;
        }

        // Everyone else (booking users, regular users) see only their own records or team records
        $userId = $user?->id;
        $tenantId = filament()->getTenant()?->id;

        // Filter by current tenant's team_id
        if ($tenantId && $user && in_array($user->role, ['super', 'admin', 'manager'])) {
            $query->where('team_id', $tenantId);

            return $query;
        }

        $userIdString = (string) $user->id;

        $query->where('team_id', $tenantId)
            ->where(function (Builder $builder) use ($userIdString) {
                $builder->where('user_id', $userIdString)
                    ->orWhereRaw('FIND_IN_SET(?, user_id)', [$userIdString]);
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

    public static function getNavigationBadgeColor(): ?string
    {
        return 'warning';
    }

    public static function getNavigationBadge(): ?string
    {
        if (! auth()->check()) {
            return null;
        }

        $userId = auth()->id();
        $tenantId = filament()->getTenant()?->id ?? 'none';

        return (string) Cache::remember(
            "filament:ringa-data:navigation-badge:{$userId}:{$tenantId}",
            now()->addSeconds(30),
            fn (): int => self::getEloquentQuery()->count(),
        );
    }
}
