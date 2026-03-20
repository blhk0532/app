<?php

namespace App\Filament\App\Resources\Campaigns\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class CampaignForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->schema([
                TextInput::make('title')
                    ->required(),
                TextInput::make('location'),
                DateTimePicker::make('start_at')
                    ->label('Start At'),
                DateTimePicker::make('end_at')
                    ->label('End At'),
            ]);
    }
}
