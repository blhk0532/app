<?php

namespace App\Filament\Admin\Resources\OutgoingConfirmations;

use App\Filament\Admin\Resources\OutgoingConfirmations\Pages\CreateOutgoingConfirmation;
use App\Filament\Admin\Resources\OutgoingConfirmations\Pages\EditOutgoingConfirmation;
use App\Filament\Admin\Resources\OutgoingConfirmations\Pages\ListOutgoingConfirmations;
use App\Filament\Admin\Resources\OutgoingConfirmations\Schemas\OutgoingConfirmationForm;
use App\Filament\Admin\Resources\OutgoingConfirmations\Tables\OutgoingConfirmationsTable;
use App\Models\OutgoingConfirmation;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class OutgoingConfirmationResource extends Resource
{
    protected static ?string $model = OutgoingConfirmation::class;

    protected static string|UnitEnum|null $navigationGroup = 'Outgoing';

    protected static ?string $navigationLabel = 'Bekräftelser';


      protected static ?int $navigationSort = 4;

    protected static string|BackedEnum|null $navigationIcon =  'heroicon-o-check';

    public static function form(Schema $schema): Schema
    {
        return OutgoingConfirmationForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return OutgoingConfirmationsTable::configure($table);
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
            'index' => ListOutgoingConfirmations::route('/'),
            'create' => CreateOutgoingConfirmation::route('/create'),
            'edit' => EditOutgoingConfirmation::route('/{record}/edit'),
        ];
    }
}
