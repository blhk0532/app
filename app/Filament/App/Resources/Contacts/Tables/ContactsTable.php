<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Contacts\Tables;

use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Relaticle\Comments\Filament\Actions\CommentsTableAction;

class ContactsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label('Namn')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('phone')
                    ->label('Telefon')
                    ->searchable(),
                TextColumn::make('email')
                    ->label('E-post')
                    ->searchable(),
                TextColumn::make('address')
                    ->label('Adress')
                    ->searchable(),
                TextColumn::make('postnummer')
                    ->label('Postnr')
                    ->toggleable(),
                TextColumn::make('postort')
                    ->label('Ort')
                    ->toggleable(),
                TextColumn::make('user.name')
                    ->label('Skapad av')
                    ->toggleable(),
                TextColumn::make('created_at')
                    ->label('Skapad')
                    ->dateTime('d M Y')
                    ->toggleable()
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                //
            ])
            ->actions([
                CommentsTableAction::make(),
            ]);
    }
}
