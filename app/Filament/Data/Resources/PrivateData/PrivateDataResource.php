<?php

namespace App\Filament\Data\Resources\PrivateData;

use App\Filament\Data\Resources\PrivateData\Pages\CreatePrivateData;
use App\Filament\Data\Resources\PrivateData\Pages\EditPrivateData;
use App\Filament\Data\Resources\PrivateData\Pages\ListPrivateData;
use App\Filament\Data\Resources\PrivateData\Schemas\PrivateDataForm;
use App\Filament\Data\Resources\PrivateData\Tables\PrivateDataTable;
use App\Models\PrivateData;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PrivateDataResource extends Resource
{
    protected static ?string $model = PrivateData::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static bool $isScopedToTenant = false;

    protected static ?int $navigationSort = 6;

    public static function form(Schema $schema): Schema
    {
        return PrivateDataForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PrivateDataTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPrivateData::route('/'),
            'create' => CreatePrivateData::route('/create'),
            'edit' => EditPrivateData::route('/{record}/edit'),
        ];
    }
}
