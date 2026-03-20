<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\OutcomeSettings;

use App\Filament\Admin\Resources\OutcomeSettings\Pages\CreateOutcomeSetting;
use App\Filament\Admin\Resources\OutcomeSettings\Pages\EditOutcomeSetting;
use App\Filament\Admin\Resources\OutcomeSettings\Pages\ListOutcomeSettings;
use App\Filament\Admin\Resources\OutcomeSettings\Schemas\OutcomeSettingForm;
use App\Filament\Admin\Resources\OutcomeSettings\Tables\OutcomeSettingsTable;
use App\Models\OutcomeSetting;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class OutcomeSettingResource extends Resource
{
    protected static ?string $model = OutcomeSetting::class;

    protected static ?string $navigationLabel = 'Outcomes';

    protected static bool $isScopedToTenant = false;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCog6Tooth;

    protected static UnitEnum|string|null $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 10;

    public static function form(Schema $schema): Schema
    {
        return OutcomeSettingForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return OutcomeSettingsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListOutcomeSettings::route('/'),
            'create' => CreateOutcomeSetting::route('/create'),
            'edit' => EditOutcomeSetting::route('/{record}/edit'),
        ];
    }
}
