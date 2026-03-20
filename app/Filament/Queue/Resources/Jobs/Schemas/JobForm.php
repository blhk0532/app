<?php

namespace App\Filament\Queue\Resources\Jobs\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class JobForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('queue')
                    ->required(),
                TextInput::make('name'),
                TextInput::make('status'),
                Textarea::make('payload')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('attempts')
                    ->required()
                    ->numeric(),
                TextInput::make('reserved_at')
                    ->numeric(),
                TextInput::make('available_at')
                    ->required()
                    ->numeric(),
            ]);
    }
}
