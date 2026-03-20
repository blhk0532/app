<?php

namespace App\Filament\Queue\Resources\RatsitPostorts;

use App\Filament\Queue\Resources\RatsitPostorts\Pages\CreateRatsitPostort;
use App\Filament\Queue\Resources\RatsitPostorts\Pages\EditRatsitPostort;
use App\Filament\Queue\Resources\RatsitPostorts\Pages\ListRatsitPostorts;
use App\Filament\Queue\Resources\RatsitPostorts\Pages\ViewRatsitPostort;
use App\Filament\Queue\Resources\RatsitPostorts\Schemas\RatsitPostortForm;
use App\Filament\Queue\Resources\RatsitPostorts\Schemas\RatsitPostortInfolist;
use App\Filament\Queue\Resources\RatsitPostorts\Tables\RatsitPostortsTable;
use App\Models\RatsitPostort;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class RatsitPostortResource extends Resource
{
    protected static ?string $model = RatsitPostort::class;

    protected static bool $shouldRegisterNavigation = false;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return RatsitPostortForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return RatsitPostortInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return RatsitPostortsTable::configure($table);
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
            'index' => ListRatsitPostorts::route('/'),
            'create' => CreateRatsitPostort::route('/create'),
            'view' => ViewRatsitPostort::route('/{record}'),
            'edit' => EditRatsitPostort::route('/{record}/edit'),
        ];
    }
}
