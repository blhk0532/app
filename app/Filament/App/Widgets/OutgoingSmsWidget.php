<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Services\TelavoxService;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Widgets\Widget;

class OutgoingSmsWidget extends Widget implements HasActions, HasForms
{
    use InteractsWithActions;
    use InteractsWithForms;

    protected int|string|array $columnSpan = 'full';

    protected static ?string $heading = 'Skicka SMS';

    protected static bool $isDiscovered = false;

    protected string $view = 'filament.widgets.outgoing-sms-widget';

    public ?array $data = [];

    public function mount(): void
    {
        $this->data = [
            'number' => '',
            'message' => '',
        ];
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make()
                    ->schema([
                        TextInput::make('number')
                            ->label('Telefonnummer')
                            ->required()
                            ->placeholder('46701122333')
                            ->hint(''),
                        Textarea::make('message')
                            ->label('Meddelande SMS')
                            ->required()
                            ->rows(4),
                    ])
                    ->columnSpanFull(),
            ])
            ->statePath('data');
    }

    public function sendSms(): void
    {
        $data = $this->data;
        $telavox = app(TelavoxService::class);

        if (! $telavox->hasToken()) {
            Notification::make()
                ->title('Ingen Telavox-token konfigurerad')
                ->danger()
                ->body('Konfigurera TELAVOX_TOKEN i .env eller sätt `TelavoxSettings->api_token` i inställningarna.')
                ->send();

            return;
        }

        try {
            $response = $telavox->sendSms($data['number'], $data['message']);
            if ($response->successful()) {
                Notification::make()->title('Meddelande skickat')->success()->send();
                $this->data = [
                    'number' => '',
                    'message' => '',
                ];

                return;
            }
            $status = $response->status();
            $body = $response->body();
            Notification::make()
                ->title('Misslyckades att skicka')
                ->danger()
                ->body("HTTP {$status}: {$body}")
                ->send();
        } catch (\RuntimeException $e) {
            Notification::make()
                ->title('Fel vid SMS-sändning')
                ->danger()
                ->body($e->getMessage())
                ->send();
        }
    }
}
