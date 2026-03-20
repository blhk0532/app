<?php

namespace App\Filament\Admin\Resources\WhatsappAgents\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class WhatsappAgentForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Toggle::make('active')
                    ->required(),
                TextInput::make('name')
                    ->required(),
                TextInput::make('phone')
                    ->tel()
                    ->required(),
                TextInput::make('text'),
                FileUpload::make('image')
                    ->image(),
                Select::make('team_id')
                    ->relationship('team', 'name')
                    ->required(),
            ]);
    }
}
