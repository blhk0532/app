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
                    ->hidden(false),
                IconColumn::make('status')
                    ->boolean()
                    ->hidden()
                    ->label(' ')
                    ->trueIcon('heroicon-o-check-badge')
                    ->falseIcon('heroicon-o-x-circle')
                    ->sortable(),
                TextColumn::make('currentTeam.name')
                    ->label('Team')
                    ->badge(),
                TextColumn::make('phone')
                    ->sortable()
                    ->copyable()
                    ->copyMessage('Copied!')
                    ->copyMessageDuration(1500)
                    ->wrap(),
                TextColumn::make('email')
                    ->sortable()
                    ->hidden()
                    ->wrap(),
                TextColumn::make('company.name')
                    ->label('Company')
                    ->badge()
                    ->hidden(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
            ]);
    }
}
