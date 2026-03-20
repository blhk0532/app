<?php

declare(strict_types=1);

namespace App\Filament\Super\Resources\PanelAccesses;

use App\Filament\Super\Resources\PanelAccesses\Pages\CreatePanelAccess;
use App\Filament\Super\Resources\PanelAccesses\Pages\EditPanelAccess;
use App\Filament\Super\Resources\PanelAccesses\Pages\ListPanelAccesses;
use App\Filament\Super\Resources\PanelAccesses\Pages\ViewPanelAccess;
use App\Filament\Super\Resources\PanelAccesses\Schemas\PanelAccessForm;
use App\Filament\Super\Resources\PanelAccesses\Schemas\PanelAccessInfolist;
use App\Filament\Super\Resources\PanelAccesses\Tables\PanelAccessesTable;
use App\Models\PanelAccess;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PanelAccessResource extends Resource
{
    protected static ?string $model = PanelAccess::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $navigationLabel = 'Panel Accesses';

    protected static ?int $navigationSort = 3;

    public static function form(Schema $schema): Schema
    {
        return PanelAccessForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return PanelAccessInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PanelAccessesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) PanelAccess::query()->count();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPanelAccesses::route('/'),
            'create' => CreatePanelAccess::route('/create'),
            'view' => ViewPanelAccess::route('/{record}'),
            'edit' => EditPanelAccess::route('/{record}/edit'),
        ];
    }
}
