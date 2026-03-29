<?php

namespace App\Filament\Admin\Pages;

use App\Models\OutgoingOffert;
use Illuminate\Database\Eloquent\Builder;
use Filament\Pages\Page;
use UnitEnum;

class OutgoingOffertPage extends Page
{
    protected static string|null|\BackedEnum $navigationIcon = 'heroicon-o-view-columns';

    protected static ?string $navigationLabel = 'Skicka Offert';

    protected static ?string $title = ' ';

    protected static string|UnitEnum|null $navigationGroup = 'Outgoing';

    public function getEloquentQuery(): Builder
    {
        return OutgoingOffert::query();
    }

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }
}
