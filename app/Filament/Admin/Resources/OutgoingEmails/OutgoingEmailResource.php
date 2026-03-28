<?php

namespace App\Filament\Admin\Resources\OutgoingEmails;

use App\Filament\Admin\Resources\OutgoingEmails\Pages\CreateOutgoingEmail;
use App\Filament\Admin\Resources\OutgoingEmails\Pages\EditOutgoingEmail;
use App\Filament\Admin\Resources\OutgoingEmails\Pages\ListOutgoingEmails;
use App\Filament\Admin\Resources\OutgoingEmails\Schemas\OutgoingEmailForm;
use App\Filament\Admin\Resources\OutgoingEmails\Tables\OutgoingEmailsTable;
use App\Models\OutgoingEmail;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use UnitEnum;

class OutgoingEmailResource extends Resource
{
    protected static ?string $model = OutgoingEmail::class;

    protected static ?string $navigationLabel = 'Epost Skickade';

    protected static string|BackedEnum|null $navigationIcon =  'heroicon-o-envelope';

      protected static ?int $navigationSort = 2;

        protected static string|UnitEnum|null $navigationGroup = 'Outgoing';

    public static function form(Schema $schema): Schema
    {
        return OutgoingEmailForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return OutgoingEmailsTable::configure($table);
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
            'index' => ListOutgoingEmails::route('/'),
            'create' => CreateOutgoingEmail::route('/create'),
            'edit' => EditOutgoingEmail::route('/{record}/edit'),
        ];
    }
}
