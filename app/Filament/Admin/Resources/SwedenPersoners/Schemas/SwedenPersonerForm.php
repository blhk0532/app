<?php

namespace App\Filament\Admin\Resources\SwedenPersoners\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class SwedenPersonerForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('adress'),
                TextInput::make('postnummer'),
                TextInput::make('postort'),
                TextInput::make('fornamn'),
                TextInput::make('efternamn'),
                TextInput::make('personnamn'),
                TextInput::make('alder')
                    ->numeric(),
                TextInput::make('kommun'),
                TextInput::make('lan'),
                TextInput::make('personnummer'),
                TextInput::make('kon'),
                TextInput::make('telefon')
                    ->tel(),
                TextInput::make('telefonnummer')
                    ->tel(),
                TextInput::make('civilstand'),
                TextInput::make('adressandring'),
                TextInput::make('bostadstyp'),
                TextInput::make('agandeform'),
                TextInput::make('boarea'),
                TextInput::make('byggar'),
                TextInput::make('personer')
                    ->numeric(),
                TextInput::make('ratsit_link'),
                TextInput::make('ratsit_data'),
                TextInput::make('hitta_link'),
                TextInput::make('hitta_data'),
                TextInput::make('merinfo_link'),
                TextInput::make('merinfo_data'),
                TextInput::make('eniro_link'),
                TextInput::make('eniro_data'),
                TextInput::make('upplysning_link'),
                TextInput::make('upplysning_data'),
                TextInput::make('mrkoll_link'),
                TextInput::make('mrkoll_data'),
                Toggle::make('is_hus')
                    ->required(),
                Toggle::make('is_owner')
                    ->required(),
                Toggle::make('is_active')
                    ->required(),
                Toggle::make('is_queue')
                    ->required(),
                Toggle::make('is_done')
                    ->required(),
                TextInput::make('latitude')
                    ->numeric(),
                TextInput::make('longitude')
                    ->numeric(),
            ]);
    }
}
