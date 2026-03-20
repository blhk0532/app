<?php

declare(strict_types=1);

namespace App\Filament\Data\Resources\PrivateData\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PrivateDataForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Group::make()
                    ->schema([
                        Section::make('Person Information')
                            ->schema([
                                TextInput::make('personnamn')
                                    ->label('Full Name')
                                    ->maxLength(255),

                                TextInput::make('fornamn')
                                    ->label('First Name')
                                    ->maxLength(255),

                                TextInput::make('efternamn')
                                    ->label('Last Name')
                                    ->maxLength(255),

                                TextInput::make('personnummer')
                                    ->label('Personal Number')
                                    ->maxLength(255),

                                TextInput::make('fodelsedag')
                                    ->label('Birth Date')
                                    ->maxLength(255),

                                TextInput::make('alder')
                                    ->label('Age')
                                    ->maxLength(255),

                                TextInput::make('kon')
                                    ->label('Gender')
                                    ->maxLength(255),

                                TextInput::make('civilstand')
                                    ->label('Civil Status')
                                    ->maxLength(255),

                                TextInput::make('stjarntacken')
                                    ->label('Star Sign')
                                    ->maxLength(255),
                            ])
                            ->columns(2)
                            ->collapsible(),

                        Section::make('Address')
                            ->schema([
                                Textarea::make('gatuadress')
                                    ->label('Street Address')
                                    ->rows(2)
                                    ->columnSpanFull(),

                                TextInput::make('postnummer')
                                    ->label('Postal Code')
                                    ->maxLength(255),

                                TextInput::make('postort')
                                    ->label('City')
                                    ->maxLength(255),

                                TextInput::make('forsamling')
                                    ->label('Parish')
                                    ->maxLength(255),

                                TextInput::make('kommun')
                                    ->label('Municipality')
                                    ->maxLength(255),

                                TextInput::make('lan')
                                    ->label('County')
                                    ->maxLength(255),
                            ])
                            ->columns(2)
                            ->collapsible(),

                        Section::make('Dwelling Information')
                            ->schema([
                                TextInput::make('agandeform')
                                    ->label('Ownership Form')
                                    ->maxLength(255),

                                TextInput::make('bostadstyp')
                                    ->label('Housing Type')
                                    ->maxLength(255),

                                TextInput::make('boarea')
                                    ->label('Living Area')
                                    ->maxLength(255),

                                TextInput::make('byggar')
                                    ->label('Year Built')
                                    ->maxLength(255),

                                TextInput::make('fastighet')
                                    ->label('Property')
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                            ])
                            ->columns(2)
                            ->collapsible(),

                        Section::make('Contact Information')
                            ->schema([
                                TextInput::make('adressandring')
                                    ->label('Address Change')
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                            ])
                            ->collapsible(),

                        Section::make('Geographic Data')
                            ->schema([
                                TextInput::make('longitude')
                                    ->label('Longitude')
                                    ->maxLength(255),

                                TextInput::make('latitud')
                                    ->label('Latitude')
                                    ->maxLength(255),
                            ])
                            ->columns(2)
                            ->collapsible(),

                        Section::make('External Links')
                            ->schema([
                                TextInput::make('google_maps')
                                    ->label('Google Maps')
                                    ->maxLength(255)
                                    ->columnSpanFull(),

                                TextInput::make('google_streetview')
                                    ->label('Google Street View')
                                    ->maxLength(255)
                                    ->columnSpanFull(),

                                TextInput::make('ratsit_link')
                                    ->label('Ratsit Link')
                                    ->maxLength(255)
                                    ->columnSpanFull(),

                                TextInput::make('hitta_link')
                                    ->label('Hitta Link')
                                    ->maxLength(255)
                                    ->columnSpanFull(),

                                TextInput::make('hitta_karta')
                                    ->label('Hitta Map')
                                    ->maxLength(255)
                                    ->columnSpanFull(),
                            ])
                            ->collapsible(),
                    ])
                    ->columnSpan(['lg' => 2]),

                Group::make()
                    ->schema([
                        Section::make('Status')
                            ->schema([
                                Toggle::make('is_active')
                                    ->label('Active')
                                    ->default(true)
                                    ->helperText('Whether this record is active'),

                                Toggle::make('is_update')
                                    ->label('Is Update')
                                    ->default(false)
                                    ->helperText('Whether this record is an update'),
                            ]),
                    ])
                    ->columnSpan(['lg' => 1]),
            ])
            ->columns(3);
    }
}
