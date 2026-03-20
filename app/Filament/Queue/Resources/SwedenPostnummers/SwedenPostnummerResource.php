<?php

namespace App\Filament\Queue\Resources\SwedenPostnummers;

use App\Filament\Queue\Resources\SwedenPostnummers\Pages\CreateSwedenPostnummer;
use App\Filament\Queue\Resources\SwedenPostnummers\Pages\EditSwedenPostnummer;
use App\Filament\Queue\Resources\SwedenPostnummers\Pages\ListSwedenPostnummers;
use App\Filament\Queue\Resources\SwedenPostnummers\Pages\ViewSwedenPostnummer;
use App\Filament\Queue\Resources\SwedenPostnummers\Schemas\SwedenPostnummerForm;
use App\Filament\Queue\Resources\SwedenPostnummers\Schemas\SwedenPostnummerInfolist;
use App\Filament\Queue\Resources\SwedenPostnummers\Tables\SwedenPostnummersTable;
use App\Models\SwedenPostnummer;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class SwedenPostnummerResource extends Resource
{
    protected static ?int $navigationSort = 3;

    protected static ?string $navigationLabel = 'Postnummer';

    //   protected static string|UnitEnum|null $navigationGroup = '';

    protected static ?string $model = SwedenPostnummer::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    //     protected static bool $shouldRegisterNavigation = false;

    public static function form(Schema $schema): Schema
    {
        return SwedenPostnummerForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return SwedenPostnummerInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return SwedenPostnummersTable::configure($table);
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
            'index' => ListSwedenPostnummers::route('/'),
            'create' => CreateSwedenPostnummer::route('/create'),
            'view' => ViewSwedenPostnummer::route('/{record}'),
            'edit' => EditSwedenPostnummer::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }
}
