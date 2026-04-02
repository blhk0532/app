<?php

namespace App\Filament\Admin\Resources\OutgoingSms;

use App\Filament\Admin\Resources\OutgoingSms\Pages\CreateOutgoingSms;
use App\Filament\Admin\Resources\OutgoingSms\Pages\EditOutgoingSms;
use App\Filament\Admin\Resources\OutgoingSms\Pages\ListOutgoingSms;
use App\Filament\Admin\Resources\OutgoingSms\Schemas\OutgoingSmsForm;
use App\Filament\Admin\Resources\OutgoingSms\Tables\OutgoingSmsTable;
use App\Models\OutgoingSms;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;

class OutgoingSmsResource extends Resource
{
    protected static ?string $model = OutgoingSms::class;

    protected static ?string $navigationLabel = 'Skicka SMS';

    protected static ?int $navigationSort = 1;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-chat-bubble-left';

    public static function getNavigationGroup(): ?string
    {
       // return 'Administration | TEAM';
        $team = filament()->getTenant()?->name;
        $name = \Illuminate\Support\Str::ucwords($team);

         return $name ? ' TEAM | ' . $name : 'TEAM | Administration';
           }

    public static function form(Schema $schema): Schema
    {
        return OutgoingSmsForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return OutgoingSmsTable::configure($table);
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
            'index' => ListOutgoingSms::route('/'),
            'create' => CreateOutgoingSms::route('/create'),
            'edit' => EditOutgoingSms::route('/{record}/edit'),
        ];
    }
}
