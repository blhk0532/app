<?php

namespace App\Filament\Admin\Pages;

use App\Models\OutgoingEmail;
use Filament\Pages\Page;
use Illuminate\Database\Eloquent\Builder;
use UnitEnum;

class OutgoingEmailPage extends Page
{
    protected static string|null|\BackedEnum $navigationIcon = 'heroicon-o-view-columns';

    protected static ?string $navigationLabel = 'Skicka Epost';

    protected static ?string $title = ' ';

    protected static string|UnitEnum|null $navigationGroup = 'Outgoing';

    public function getEloquentQuery(): Builder
    {
        return OutgoingEmail::query();
    }

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }
}
