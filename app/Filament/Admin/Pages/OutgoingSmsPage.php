<?php

namespace App\Filament\Admin\Pages;

use App\Models\OutgoingSms;
use App\Services\TelavoxService;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Section;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Client\Response;
use RuntimeException;
use UnitEnum;

class OutgoingSmsPage extends Page implements HasForms
{
    use InteractsWithForms;

    protected static string|null|\BackedEnum $navigationIcon = 'heroicon-o-chat-bubble-oval-left';

    protected static ?string $navigationLabel = 'Skicka SMS';

    protected static ?string $title = 'Skicka SMS';

    protected static string|UnitEnum|null $navigationGroup = 'Outgoing';

    protected string $view = 'filament.pages.outgoing-sms';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill([
            'number' => '',
            'message' => '',
        ]);
    }

    public function send(): void
    {
        $data = $this->form->getState();

        $telavox = app(TelavoxService::class);

        // Check token configured
        if (! $telavox->hasToken()) {
            Notification::make()
                ->title('Ingen Telavox-token konfigurerad')
                ->danger()
                ->body('Konfigurera TELAVOX_TOKEN i .env eller sätt `TelavoxSettings->api_token` i inställningarna.')
                ->send();

            \Log::error('Telavox send attempted without API token', ['number' => $data['number'] ?? null]);

            $this->createOutgoingSmsRecord($data['number'] ?? null, $data['message'] ?? null, false);

            return;
        }

        try {
            $response = $telavox->sendSms($data['number'], $data['message']);

            if ($response->successful()) {
                Notification::make()->title('Meddelande skickat')->success()->send();

                $this->createOutgoingSmsRecord($data['number'], $data['message'], true, $this->parseApiMessage($response));

                return;
            }

            // Log and show response details to help debugging
            $status = $response->status();
            $body = $response->body();

            \Log::error('Telavox send failed', [
                'number' => $data['number'] ?? null,
                'status' => $status,
                'body' => $body,
            ]);

            Notification::make()
                ->title('Misslyckades att skicka')
                ->danger()
                ->body("HTTP {$status}: {$body}")
                ->send();

            $this->createOutgoingSmsRecord($data['number'] ?? null, $data['message'] ?? null, false, $this->parseApiMessage($response));
        } catch (RuntimeException $e) {
            Notification::make()
                ->title('Fel vid SMS-sändning')
                ->danger()
                ->body($e->getMessage())
                ->send();

            \Log::error('Telavox send exception', [
                'number' => $data['number'] ?? null,
                'error' => $e->getMessage(),
            ]);

            $this->createOutgoingSmsRecord($data['number'] ?? null, $data['message'] ?? null, false);
        }
    }

    private function createOutgoingSmsRecord(?string $phone, ?string $message, bool $isSuccess, ?string $apiMessage = null): void
    {
        $user = auth()->user();

        if (! $user) {
            \Log::warning('OutgoingSms record creation attempted without authenticated user', ['phone' => $phone]);

            return;
        }

        try {
            // Normalize phone number: remove all non-digits
            $normalizedPhone = preg_replace('/\D+/', '', $phone ?? '');
            // Convert to integer for casting compatibility (phone column cast to integer)
            $phoneInt = $normalizedPhone !== '' ? (int) $normalizedPhone : 0;
             $smsType = 'sms';

            OutgoingSms::create([
                'phone' => $phoneInt,
                'message' => $message ?? '',
                'api_message' => $apiMessage ?? '',
                'type' => $smsType ?? '',
                'user_id' => $user->id,
                'team_id' => $user->current_team_id ?? 0,
                'company_id' => $user->company_id ?? $user->current_company_id ?? 0,
                'is_success' => $isSuccess,
            ]);

            \Log::info('OutgoingSms record created', [
                'phone' => $phoneInt,
                'user_id' => $user->id,
                'is_success' => $isSuccess,
            ]);
        } catch (\Exception $e) {
            \Log::error('Failed to create OutgoingSms record', [
                'phone' => $phone,
                'error' => $e->getMessage(),
            ]);
        }
    }

    private function parseApiMessage(Response $response): string
    {
        try {
            $body = $response->body();

            if (empty($body)) {
                return '';
            }

            $data = json_decode($body, true);

            if (is_array($data) && isset($data['message'])) {
                return (string) $data['message'];
            }

            // If no message field, return first 255 chars of body
            return mb_substr($body, 0, 255);
        } catch (\Exception $e) {
            return 'Error parsing response: '.mb_substr($e->getMessage(), 0, 255);
        }
    }

    protected function getFormSchema(): array
    {
        return [
            Section::make()
                ->schema([
                    TextInput::make('number')
                        ->label('Telefonnummer')
                        ->required()
                        ->hint('Förvara i internationellt format, t.ex. 46701122333'),

                    Textarea::make('message')
                        ->label('Meddelande')
                        ->required()
                        ->rows(4),
                ])
                ->columnSpanFull(),
        ];
    }

    protected function getFormStatePath(): ?string
    {
        return 'data';
    }

    public function getEloquentQuery(): Builder
    {
        return OutgoingSms::query();
    }

    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }
}
