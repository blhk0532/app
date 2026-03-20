<?php

namespace App\Filament\Queue\Resources\RatsitData;

use App\Filament\Queue\Resources\RatsitData\Pages\CreateRatsitData;
use App\Filament\Queue\Resources\RatsitData\Pages\EditRatsitData;
use App\Filament\Queue\Resources\RatsitData\Pages\ListRatsitData;
use App\Filament\Queue\Resources\RatsitData\Schemas\RatsitDataForm;
use App\Filament\Queue\Resources\RatsitData\Tables\RatsitDataTable;
use App\Models\RatsitData;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class RatsitDataResource extends Resource
{
    protected static ?string $model = RatsitData::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'personnamn';

    protected static ?int $navigationSort = 2;

    protected static string|UnitEnum|null $navigationGroup = 'Ratsit Databas';

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }

    public static function form(Schema $schema): Schema
    {
        return RatsitDataForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return RatsitDataTable::configure($table);
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
            'index' => ListRatsitData::route('/'),
            'create' => CreateRatsitData::route('/create'),
            'edit' => EditRatsitData::route('/{record}/edit'),
        ];
    }
}
