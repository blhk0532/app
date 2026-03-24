<?php

namespace App\Filament\Super\Resources\ResourceAccesses;

use App\Filament\Super\Resources\ResourceAccesses\Pages\CreateResourceAccess;
use App\Filament\Super\Resources\ResourceAccesses\Pages\EditResourceAccess;
use App\Filament\Super\Resources\ResourceAccesses\Pages\ListResourceAccesses;
use App\Filament\Super\Resources\ResourceAccesses\Schemas\ResourceAccessForm;
use App\Filament\Super\Resources\ResourceAccesses\Tables\ResourceAccessesTable;
use App\Models\ResourceAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ResourceAccessResource extends Resource
{
    protected static ?string $model = ResourceAccess::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return ResourceAccessForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ResourceAccessesTable::configure($table);
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
            'index' => ListResourceAccesses::route('/'),
            'create' => CreateResourceAccess::route('/create'),
            'edit' => EditResourceAccess::route('/{record}/edit'),
        ];
    }
}
