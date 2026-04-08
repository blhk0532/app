<?php

namespace App\Filament\Admin\Resources\SwedenPersoners;

use App\Filament\Admin\Resources\SwedenPersoners\Pages\CreateSwedenPersoner;
use App\Filament\Admin\Resources\SwedenPersoners\Pages\EditSwedenPersoner;
use App\Filament\Admin\Resources\SwedenPersoners\Pages\ListSwedenPersoners;
use App\Filament\Admin\Resources\SwedenPersoners\Pages\ViewSwedenPersoner;
use App\Filament\Admin\Resources\SwedenPersoners\Schemas\SwedenPersonerForm;
use App\Filament\Admin\Resources\SwedenPersoners\Schemas\SwedenPersonerInfolist;
use App\Filament\Admin\Resources\SwedenPersoners\Tables\SwedenPersonersTable;
use App\Models\SwedenPersoner;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class SwedenPersonerResource extends Resource
{
    protected static ?string $model = SwedenPersoner::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;


    protected static bool $isScopedToTenant = false;

    public static function form(Schema $schema): Schema
    {
        return SwedenPersonerForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return SwedenPersonerInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return SwedenPersonersTable::configure($table);
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
            'index' => ListSwedenPersoners::route('/'),
            'create' => CreateSwedenPersoner::route('/create'),
            'view' => ViewSwedenPersoner::route('/{record}'),
            'edit' => EditSwedenPersoner::route('/{record}/edit'),
        ];
    }
}
