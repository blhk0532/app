<?php

namespace App\Filament\Queue\Resources\SwedenPostorters;

use App\Filament\Queue\Resources\SwedenPostorters\Pages\CreateSwedenPostorter;
use App\Filament\Queue\Resources\SwedenPostorters\Pages\EditSwedenPostorter;
use App\Filament\Queue\Resources\SwedenPostorters\Pages\ListSwedenPostorters;
use App\Filament\Queue\Resources\SwedenPostorters\Pages\ViewSwedenPostorter;
use App\Filament\Queue\Resources\SwedenPostorters\Schemas\SwedenPostorterForm;
use App\Filament\Queue\Resources\SwedenPostorters\Schemas\SwedenPostorterInfolist;
use App\Filament\Queue\Resources\SwedenPostorters\Tables\SwedenPostortersTable;
use App\Models\SwedenPostorter;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class SwedenPostorterResource extends Resource
{
    protected static ?string $model = SwedenPostorter::class;

    protected static ?string $navigationLabel = 'Postorter';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?int $navigationSort = 2;

    protected static string|UnitEnum|null $navigationGroup = '';

    protected static bool $shouldRegisterNavigation = false;

    public static function form(Schema $schema): Schema
    {
        return SwedenPostorterForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return SwedenPostorterInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return SwedenPostortersTable::configure($table);
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
            'index' => ListSwedenPostorters::route('/'),
            'create' => CreateSwedenPostorter::route('/create'),
            'view' => ViewSwedenPostorter::route('/{record}'),
            'edit' => EditSwedenPostorter::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }
}
