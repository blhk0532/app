<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\Companies\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class CompanyForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(2)
            ->components([
                Section::make(__('Company Details'))
                    ->columns(2)
                    ->columnSpan(2)
                    ->schema([
                        Select::make('user_id')
                            ->label(__('Owner'))
                            ->relationship('owner', 'name')
                            ->searchable()
                            ->preload()
                            ->required(),
                        TextInput::make('name')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('org_number')
                            ->label(__('Org. Number'))
                            ->maxLength(255),
                        Toggle::make('personal_company'),
                    ]),
                Section::make(__('Contact Information'))
                    ->columns(2)
                    ->columnSpan(2)
                    ->schema([
                        TextInput::make('phone')
                            ->tel()
                            ->maxLength(255),
                        TextInput::make('email')
                            ->email()
                            ->maxLength(255),
                        TextInput::make('website')
                            ->url()
                            ->maxLength(255)
                            ->columnSpan(2),
                        TextInput::make('address')
                            ->maxLength(255),
                        TextInput::make('city')
                            ->maxLength(255),
                        TextInput::make('country')
                            ->maxLength(255),
                    ]),
            ]);
    }
}
