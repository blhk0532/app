<?php

namespace App\Filament\Super\Resources\ResourceAccesses\Schemas;

use App\Enums\AuthRole;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ResourceAccessForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('resource')
                    ->label('Resource')
                    ->required(),

                Select::make('role_access')
                    ->multiple()
                    ->label('Role Access')
                    ->options(collect(AuthRole::cases())->mapWithKeys(fn ($case) => [$case->value => $case->label()]))
                    ->required(),
            ]);
    }
}
