<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\RingaDataOutcomes\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class RingaDataOutcomesForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('ringa_data_id')
                    ->relationship('ringaData', 'id')
                    ->required(),
                Select::make('user_id')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->required(),
                TextInput::make('coutcome')
                    ->required()
                    ->maxLength(255),
            ]);
    }
}
