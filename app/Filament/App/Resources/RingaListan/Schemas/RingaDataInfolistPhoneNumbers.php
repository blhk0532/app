<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Schemas;

use Anish\TextInputEntry\Infolists\Components\TextInputEntry;
use Filament\Actions\Action;
use Filament\Schemas\Components\Section;

class RingaDataInfolistPhoneNumbers
{
    public static function make($record = null): ?Section
    {
        if (! $record || empty($record->telfonnummer)) {
            return null;
        }

        return Section::make()
            ->description('')
            ->extraAttributes([
                'class' => 'phone-numbers-section',
            ])
            ->schema([
                TextInputEntry::make('epost'),
            ])
            ->compact()
            ->headerActions(
                collect($record->telfonnummer)
                    ->filter(fn ($phone) => ! empty(trim((string) $phone)))
                    ->map(function (string $phone, int $index): Action {
                        $dialable = preg_replace('/\s+/', '', $phone);

                        return Action::make("call_{$index}")
                            ->label($phone)
                            ->button()
                            ->url("tel:{$dialable}")
                            ->openUrlInNewTab()
                            ->color('gray')
                            ->size('lg')
                            ->extraAttributes([
                                'class' => 'phone-button',
                            ])
                            ->icon('heroicon-o-phone');
                    })
                    ->all()
            );
    }
}
