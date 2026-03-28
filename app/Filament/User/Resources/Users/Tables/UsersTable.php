<?php

declare(strict_types=1);

namespace App\Filament\User\Resources\Users\Tables;

use Filament\Actions\ViewAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Carbon;
use Zvizvi\UserFields\Components\UserColumn;

class UsersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                IconColumn::make('status')
                    ->boolean()
                    ->label(' ')
                    ->trueIcon('heroicon-o-check-badge')
                    ->falseIcon('heroicon-o-x-circle')
                    ->sortable(),

                UserColumn::make('user_display')
                    ->label('Användare')
                    ->getStateUsing(function ($record) {
                        return $record; // Pass the user record itself
                    }),
                TextColumn::make('active_status')
                    ->label('Status')
                    ->badge()
                    ->getStateUsing(function ($record) {
                        if (! $record->active_at) {
                            return 'Offline';
                        }

                        return $record->active_at->gte(now()->subMinutes(5))
                            ? 'Online'
                            : 'Offline';
                    })
                    ->colors([
                        'success' => 'Online',
                        'gray' => 'Offline',
                    ])
                    ->sortable(),
                TextColumn::make('active_at')
                    ->label('Senast Aktiv')
                    ->sortable()
                    ->state(fn ($record) => $record->id === auth()->id() ? 'Just nu' : ($record->active_at ? Carbon::parse($record->active_at)->diffForHumans() : 'N/A'))
                    ->toggleable(),
                TextColumn::make('phone')
                    ->searchable()
                    ->sortable()
                    ->copyable()
                    ->copyMessage('Copied!')
                    ->copyMessageDuration(1500)
                    ->toggleable()
                    ->wrap(),

                TextColumn::make('email')
                    ->searchable()
                    ->sortable()
                    ->toggleable()
                    ->wrap(),
                TextColumn::make('company.name')
                    ->label('Company')
                    ->badge()
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('currentTeam.name')
                    ->label('Current Team')
                    ->badge()
                    ->searchable()
                    ->toggleable(),

                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
            ]);
    }
}
