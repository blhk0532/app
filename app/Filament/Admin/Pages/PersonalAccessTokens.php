<?php

namespace App\Filament\Admin\Pages;

use Filament\Tables\Columns\Layout\Panel;
use Filament\Tables\Columns\Layout\Split;
use Filament\Tables\Columns\Layout\Stack;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\HtmlString;
use Joaopaulolndev\FilamentEditProfile\Pages\EditProfilePage;
use Wallo\FilamentCompanies\Pages\User\PersonalAccessTokens as BasePersonalAccessTokens;

class PersonalAccessTokens extends BasePersonalAccessTokens
{
    protected function getTableColumns(): array
    {
        return [
            Split::make([
                TextColumn::make('name')
                    ->label(__('filament-companies::default.labels.token_name'))
                    ->sortable()
                    ->searchable(),
                TextColumn::make('abilities')
                    ->badge()
                    ->label(__('filament-companies::default.labels.permissions')),
            ]),
            Panel::make([
                Stack::make([
                    TextColumn::make('created_at')
                        ->label(__('filament-companies::default.labels.created_at'))
                        ->icon('heroicon-o-calendar-days')
                        ->formatStateUsing(function ($state) {
                            return new HtmlString(
                                '<span>'
                                .__('filament-companies::default.descriptions.token_created_state', [
                                    'time_ago' => '<span class="font-bold text-sm text-primary-600 dark:text-primary-400">'.__($state->diffForHumans()).'</span>',
                                    'user_name' => '<a target="_blank" href="'.url(EditProfilePage::getUrl(tenant: filament()->getTenant())).'" class="font-bold text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300" style="text-decoration: underline;">'.__(Auth::user()?->name).'</a>',
                                ]).
                                '</span>'
                            );
                        })
                        ->fontFamily('serif')
                        ->sortable(),
                    TextColumn::make('updated_at')
                        ->label(__('filament-companies::default.labels.updated_at'))
                        ->icon('heroicon-o-clock')
                        ->formatStateUsing(static function ($state) {
                            return __('filament-companies::default.descriptions.token_updated_state', ['time_ago' => $state->diffForHumans()]);
                        })
                        ->fontFamily('serif')
                        ->sortable(),
                    TextColumn::make('last_used_at')
                        ->label(__('filament-companies::default.labels.last_used_at'))
                        ->formatStateUsing(static function ($state) {
                            if ($state) {
                                return __('filament-companies::default.descriptions.token_last_used_state', ['time_ago' => $state->diffForHumans()]);
                            }

                            return __('filament-companies::default.descriptions.token_never_used');
                        })
                        ->fontFamily('serif')
                        ->sortable(),
                ]),
            ])->collapsible(),
        ];
    }
}
