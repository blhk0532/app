<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\RingaDataOutcomes;

use App\Filament\Admin\Resources\RingaDataOutcomes\Pages\ListRingaDataOutcomes;
use App\Filament\Admin\Resources\RingaDataOutcomes\Schemas\RingaDataOutcomesForm;
use App\Filament\Admin\Resources\RingaDataOutcomes\Tables\RingaDataOutcomesTable;
use App\Models\RingaDataOutcome;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class RingaDataOutcomesResource extends Resource
{
    protected static ?string $model = RingaDataOutcome::class;

    protected static ?string $navigationLabel = 'Outcome Log';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static UnitEnum|string|null $navigationGroup = 'System LOGS';

    protected static bool $isScopedToTenant = false;

    protected static ?string $tenantOwnershipRelationshipName = null;

    public static function form(Schema $schema): Schema
    {
        return RingaDataOutcomesForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return RingaDataOutcomesTable::configure($table);
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
