<?php

namespace App\Filament\Admin\Resources\OutgoingOfferts;

use App\Filament\Admin\Resources\OutgoingOfferts\Pages\CreateOutgoingOffert;
use App\Filament\Admin\Resources\OutgoingOfferts\Pages\EditOutgoingOffert;
use App\Filament\Admin\Resources\OutgoingOfferts\Pages\ListOutgoingOfferts;
use App\Filament\Admin\Resources\OutgoingOfferts\Schemas\OutgoingOffertForm;
use App\Filament\Admin\Resources\OutgoingOfferts\Tables\OutgoingOffertsTable;
use App\Models\OutgoingOffert;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class OutgoingOffertResource extends Resource
{
    protected static ?string $model = OutgoingOffert::class;

      protected static ?string $navigationLabel = 'Skickad Offert';

    protected static string|BackedEnum|null $navigationIcon =  'heroicon-o-question-mark-circle';

      protected static ?int $navigationSort = 3;

        protected static string|UnitEnum|null $navigationGroup = 'Outgoing';

    public static function form(Schema $schema): Schema
    {
        return OutgoingOffertForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return OutgoingOffertsTable::configure($table);
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
            'index' => ListOutgoingOfferts::route('/'),
            'create' => CreateOutgoingOffert::route('/create'),
            'edit' => EditOutgoingOffert::route('/{record}/edit'),
        ];
    }
}
