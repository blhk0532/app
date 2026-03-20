<?php

namespace App\Filament\Data\Resources\SverigePostnummers;

use App\Filament\Data\Resources\SverigePostnummers\Pages\CreateSverigePostnummer;
use App\Filament\Data\Resources\SverigePostnummers\Pages\EditSverigePostnummer;
use App\Filament\Data\Resources\SverigePostnummers\Pages\ListSverigePostnummers;
use App\Filament\Data\Resources\SverigePostnummers\Pages\ViewSverigePostnummer;
use App\Filament\Data\Resources\SverigePostnummers\Schemas\SverigePostnummerForm;
use App\Filament\Data\Resources\SverigePostnummers\Schemas\SverigePostnummerInfolist;
use App\Filament\Data\Resources\SverigePostnummers\Tables\SverigePostnummersTable;
use App\Models\SverigePostnummer;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class SverigePostnummerResource extends Resource
{
    protected static ?string $model = SverigePostnummer::class;

    protected static ?string $slug = 'sverige-postnummer';

    protected static string|\BackedEnum|null $navigationIcon = Heroicon::OutlinedMap;

    protected static ?string $navigationLabel = 'Sweden postal codes';

    protected static bool $shouldRegisterNavigation = false;

    protected static ?int $navigationSort = 4;

    public static function form(Schema $schema): Schema
    {
        return SverigePostnummerForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return SverigePostnummerInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return SverigePostnummersTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListSverigePostnummers::route('/'),
            'create' => CreateSverigePostnummer::route('/create'),
            'view' => ViewSverigePostnummer::route('/{record}'),
            'edit' => EditSverigePostnummer::route('/{record}/edit'),
        ];
    }
}
