<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDataOutcomes;

use App\Filament\App\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes;
use App\Filament\App\Resources\RingaDataOutcomes\Schemas\RingaDataOutcomesForm;
use App\Filament\App\Resources\RingaDataOutcomes\Tables\RingaDataOutcomesTable;
use App\Models\RingaDataOutcome;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class RingaDataOutcomesResource extends Resource
{
    protected static ?string $model = RingaDataOutcome::class;

    protected static ?string $navigationLabel = 'Ringhistorik';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static UnitEnum|string|null $navigationGroup = 'Samtalslistor';

    protected static bool $isScopedToTenant = false;

    protected static ?int $navigationSort = 150;

    protected static ?string $tenantOwnershipRelationshipName = null;

    public static function getNavigationBadge(): ?string
    {
        $modelClass = static::getModel();
        $count = $modelClass::query()->count();

        return (string) $count;
    }

    public static function shouldRegisterNavigation(): bool
    {

        //   $teneant = filament()->getTenant();
        //   if (auth()->user()->role !== 'admin' && auth()->user()->role !== 'super' && auth()->user()->role !== 'manager') {
        //       return true;
        //   }
        //   if (filament()->getTenant()->getAttribute('is_admin') === true) {
        //       return true;
        //   }

        return false;
    }

    public static function form(Schema $schema): Schema
    {
        return RingaDataOutcomesForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return RingaDataOutcomesTable::configure($table);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->where('user_id', auth()->id());
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
            'index' => ListRingaDataOutcomes::route('/'),
        ];
    }
}
