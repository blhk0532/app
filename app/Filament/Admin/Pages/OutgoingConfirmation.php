<?php

namespace App\Filament\Admin\Pages;

use App\Models\OutgoingConfirmation;
use Illuminate\Database\Eloquent\Builder;
use Filament\Pages\Page;
use UnitEnum;

class OutgoingConfirmPage extends Page
{
    protected static string|null|\BackedEnum $navigationIcon = 'heroicon-o-view-columns';

    protected static ?string $navigationLabel = 'Skicka Confirmation';

    protected static ?string $title = ' ';

    protected static string|UnitEnum|null $navigationGroup = 'Outgoing';

    public function getEloquentQuery(): Builder
    {
        return OutgoingConfirmation::query();
    }

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }
}
