<?php

namespace App\Filament\Pages\FlowForge;

use BackedEnum;
use Filament\Pages\Page;
use UnitEnum;

class FlowForgePage extends Page
{
    protected static BackedEnum|string|null $navigationIcon = 'heroicon-o-cube-transparent';

    protected string $view = 'filament.pages.flowforge.page';

    protected static UnitEnum|string|null $navigationGroup = 'Integrations';

    protected static ?string $title = 'FlowForge';

    protected static bool $shouldRegisterNavigation = false;

    protected static ?int $navigationSort = 1001;
}
