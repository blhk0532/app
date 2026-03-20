<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Schemas;

use Filament\Actions\Action;
use Filament\Forms\Components\RichEditor;
use Filament\Notifications\Notification;
use Filament\Schemas\Components\Section;

class RingaDataInfolistNotes
{
    public static function make(): Section
    {
        return Section::make('Anteckningar')
            ->extraAttributes([
                'class' => 'user-notes-section',
            ])
            ->schema([
                RichEditor::make('user_notes'),

            ])
            ->footerActions([
                Action::make('save_notes')
                    ->label('Spara anteckningar')
                    ->button()
                    ->color('primary')
                    ->action(function ($record, $data) {
                        if ($record) {
                            $record->update([
                                'user_notes' => $data['user_notes'] ?? '',
                            ]);

                            Notification::make()
                                ->title('Anteckningar sparade')
                                ->success()
                                ->send();
                        }
                    }),
            ])
            ->columns([
                'md' => 1,
            ])
            ->columnSpan('full');
    }
}
