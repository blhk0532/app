<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Schemas;

use Anish\TextInputEntry\Infolists\Components\TextInputEntry;
use Fahiem\FilamentPinpoint\PinpointEntry;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;

class RingaDataInfolistPrimary
{
    public static function make(): Grid
    {
        return Grid::make(2)
            ->gridContainer()
            ->extraAttributes([
                'class' => 'queue-data-section',
            ])
            ->schema([
                Section::make()
                    ->description('')
                    ->hiddenLabel()
                    ->extraAttributes([
                        'class' => 'outcome-buttons-section',
                    ])
                    ->schema([
                        PinpointEntry::make('location')
                            ->label('gatuadress')
                            ->defaultZoom(18)
                            ->latField('latitud')
                            ->lngField('longitude')
                            ->mapType('satellite')
                            ->height(480)
                            ->columnSpanFull(),
                    ])
                    ->compact()
                    ->headerActions([
                    ]),
                Section::make('Adress')
                    ->extraAttributes([
                        'class' => 'queue-address-section',
                    ])
                    ->schema([
                        TextInputEntry::make('fornamn')
                            ->columnSpan(3),
                        TextInputEntry::make('efternamn')
                            ->columnSpan(3),
                        TextInputEntry::make('personnummer')
                            ->columnSpan(6),
                        TextInputEntry::make('alder')
                            ->columnSpan(3),
                        TextInputEntry::make('kon')
                            ->columnSpan(3),
                        TextInputEntry::make('civilstand')
                            ->columnSpan(6),
                        TextInputEntry::make('gatuadress')
                            ->columnSpan(6),
                        TextInputEntry::make('postnummer')
                            ->columnSpan(3),
                        TextInputEntry::make('postort')
                            ->columnSpan(3),
                        TextInputEntry::make('adressandring')
                            ->columnSpan(4),
                        TextInputEntry::make('boarea')
                            ->columnSpan(4),
                        TextInputEntry::make('byggar')
                            ->columnSpan(4),
                        TextInputEntry::make('bostadstyp')
                            ->columnSpan(4),
                        TextInputEntry::make('agandeform')
                            ->columnSpan(4),
                        TextInputEntry::make('fastighetsbeteckning')
                            ->columnSpan(4),
                    ])
                    ->columns([
                        'md' => 12,
                    ]),
            ])
            ->columnSpanFull();
    }
}
