<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Contacts;

use App\Filament\App\Resources\Contacts\Pages\CreateContact;
use App\Filament\App\Resources\Contacts\Pages\EditContact;
use App\Filament\App\Resources\Contacts\Pages\ListContacts;
use App\Filament\App\Resources\Contacts\Pages\ViewContact;
use App\Filament\App\Resources\Contacts\Schemas\ContactForm;
use App\Filament\App\Resources\Contacts\Schemas\ContactInfolist;
use App\Filament\App\Resources\Contacts\Tables\ContactsTable;
use App\Models\Contact;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class ContactResource extends Resource
{
    public static bool $shouldRegisterNavigation = true;

    protected static ?string $model = Contact::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-user-group';

    protected static ?string $navigationLabel = 'Kontakter';

    protected static UnitEnum|string|null $navigationGroup = 'Samtalslistor';

    protected static bool $isScopedToTenant = false;

    protected static ?int $navigationSort = 110;

    public static function getNavigationGroup(): ?string
    {
        return 'Samtalslistor';
        // return filament()->getTenant()?->name ? filament()->getTenant()?->name : 'Administration';
    }

    public static function shouldRegisterNavigation(): bool
    {

        //    if (auth()->user()->role !== 'admin' && auth()->user()->role !== 'super' && auth()->user()->role !== 'manager') {
        //        return true;
        //    }
        //    if (filament()->getTenant()->getAttribute('is_admin') !== true) {
        //        return true;
        //    }

        return false;
    }

    public static function getEloquentQuery(): Builder
    {
        $query = parent::getEloquentQuery()->where('user_id', auth()->id());

        return $query;
    }

    public static function getNavigationBadge(): ?string
    {
        if (! auth()->check()) {
            return null;
        }

        return (string) self::getEloquentQuery()->count();
    }

    public static function form(Schema $schema): Schema
    {
        return ContactForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return ContactInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ContactsTable::configure($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListContacts::route('/'),
            'create' => CreateContact::route('/create'),
            'view' => ViewContact::route('/{record}'),
            'edit' => EditContact::route('/{record}/edit'),
        ];
    }
}
