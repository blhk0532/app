<?php

declare(strict_types=1);

namespace App\Filament\User\Resources\Teams\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class TeamForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('user_id')
                    ->label(__('Owner'))
                    ->relationship('owner', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),
                Select::make('company_id')
                    ->label(__('Company'))
                    ->relationship('company', 'name')
                    ->searchable()
                    ->preload()
                    ->nullable(),
                TextInput::make('name')
                    ->required(),
                TextInput::make('phone')
                    ->tel()
                    ->maxLength(255),
                TextInput::make('email')
                    ->email()
                    ->maxLength(255),
                TextInput::make('website')
                    ->url()
                    ->maxLength(255),
                TextInput::make('address')
                    ->maxLength(255),
                TextInput::make('city')
                    ->maxLength(255),
                TextInput::make('country')
                    ->maxLength(255),
                Textarea::make('description')
                    ->rows(3)
                    ->columnSpanFull(),
                TextInput::make('slug')
                    ->required(),
            ]);
    }
}
