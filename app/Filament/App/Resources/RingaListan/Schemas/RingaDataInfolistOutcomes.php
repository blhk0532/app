<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Schemas;

use App\Enums\Outcomes3;
use App\Models\OutcomeSetting;
use Filament\Actions\Action;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Schemas\Components\Section;
use Illuminate\Support\Carbon;

class RingaDataInfolistOutcomes
{
    protected static function isSpecialOutcome(string $outcome): bool
    {
        return in_array($outcome, ['RingTillbaka', 'Aterkommer', 'NyligenGjort', 'Offert', 'Bokad', 'Kontakt'], true);
    }

    protected static function getSpecialModalHeading(string $outcome): string
    {
        return match ($outcome) {
            'RingTillbaka', 'Aterkommer' => 'Schemalägg återkommande samtal',
            'NyligenGjort' => 'Välj Nästa Gång',
            'Offert' => 'Skapa Offert',
            'Bokad' => 'Bokad',
            'Kontakt' => 'Spara som Kontakt',
            default => 'Spara',
        };
    }

    protected static function getSpecialModalSubmitLabel(string $outcome): string
    {
        return match ($outcome) {
            'RingTillbaka', 'Aterkommer' => 'Schemalägg',
            'Offert' => 'Spara Offert',
            default => 'Spara',
        };
    }

    protected static function getSpecialModalWidth(string $outcome): string
    {
        return match ($outcome) {
            'Offert' => 'lg',
            default => 'md',
        };
    }

    protected static function getSpecialModalSchema(string $outcome): array
    {
        return match ($outcome) {
            'RingTillbaka', 'Aterkommer' => [
                DateTimePicker::make('aterkom_at')
                    ->label('Datum och tid för återkommande samtal')
                    ->default(fn () => now()->addHour()->seconds(0))
                    ->native(true)
                    ->seconds(false)
                    ->timezone(config('app.timezone'))
                    ->required(),
            ],
            'NyligenGjort' => [
                Select::make('outcome_value')
                    ->label('Resultat')
                    ->options(fn (): array => collect(Outcomes3::cases())
                        ->mapWithKeys(fn (Outcomes3 $case): array => [$case->name => $case->getLabel()])
                        ->toArray())
                    ->required(),
            ],
            'Offert' => [
                TextInput::make('subject')
                    ->label('Ämne')
                    ->placeholder('Offert ämne')
                    ->required(),
                Textarea::make('message')
                    ->label('Meddelande')
                    ->placeholder('Offert text...')
                    ->required()
                    ->rows(8)
                    ->columnSpanFull(),
            ],
            'Bokad', 'Kontakt' => [
                Textarea::make('notes')
                    ->label('Anteckningar')
                    ->rows(3),
            ],
            default => [],
        };
    }

    protected static function normalizeActionColor(?string $color): string
    {
        $value = strtolower(trim((string) $color));

        if (in_array($value, ['danger', 'gray', 'info', 'primary', 'success', 'warning'], true)) {
            return $value;
        }

        return 'gray';
    }

    protected static function normalizeActionIcon(?string $icon): ?string
    {
        $value = trim((string) $icon);

        if ($value === '') {
            return null;
        }

        if (str_contains($value, '-') || str_contains($value, ':')) {
            return $value;
        }

        return "heroicon-o-{$value}";
    }

    protected static function getFallbackIcon(OutcomeSetting $outcomeSetting): string
    {
        $text = strtolower(trim(($outcomeSetting->title ?? '').' '.($outcomeSetting->outcome ?? '')));

        return match (true) {
            str_contains($text, 'ring ej'), str_contains($text, 'dmc') => 'heroicon-o-no-symbol',
            str_contains($text, 'fel nummer'), str_contains($text, 'fel telefon') => 'heroicon-o-phone-x-mark',
            str_contains($text, 'klick') => 'heroicon-o-hand-thumb-up',
            str_contains($text, 'ej intresse'), str_contains($text, 'inte intresse') => 'heroicon-o-hand-thumb-down',
            str_contains($text, 'upptagen') => 'heroicon-o-pause-circle',
            str_contains($text, 'ej kopplad'), str_contains($text, 'framkopplad') => 'heroicon-o-phone-x-mark',
            str_contains($text, 'inget svar'), str_contains($text, 'telefonsvar') => 'heroicon-o-phone',
            str_contains($text, 'nästa gång'), str_contains($text, 'aterkommer'), str_contains($text, 'ring tillbaka') => 'heroicon-o-clock',
            str_contains($text, 'offert') => 'heroicon-o-document-text',
            str_contains($text, 'bokad'), str_contains($text, 'kontakt') => 'heroicon-o-calendar-days',
            default => 'heroicon-o-check',
        };
    }

    protected static function getButtonStyle(?string $color): ?string
    {
        $value = trim((string) $color);

        if ($value === '') {
            return null;
        }

        $filamentColors = [
            'primary' => '#6366f1',
            'success' => '#16a34a',
            'warning' => '#f59e0b',
            'danger' => '#ef4444',
            'info' => '#0ea5e9',
            'gray' => '#6b7280',
        ];

        $lower = strtolower($value);

        if (array_key_exists($lower, $filamentColors)) {
            $value = $filamentColors[$lower];
        }

        if (preg_match('/^[a-f0-9]{3,8}$/i', $value) === 1) {
            $value = "#{$value}";
        }

        return "background-color: {$value} !important; border-color: {$value} !important; color: #ffffff !important;";
    }

    public static function make($record = null, $component = null): Section
    {
        return Section::make()
            ->description('')
            ->hiddenLabel()
            ->extraAttributes([
                'class' => 'outcome-buttons-section',
            ])
            ->schema([
            ])
            ->compact()
            ->headerActions([
                ...OutcomeSetting::query()
                    ->where('is_active', true)
                    ->orderBy('order')
                    ->orderBy('id')
                    ->get()
                    ->map(function (OutcomeSetting $outcomeSetting) use ($record, $component): Action {
                        $label = $outcomeSetting->title ?: (string) $outcomeSetting->outcome;
                        $outcomeValue = (string) $outcomeSetting->outcome;
                        $color = self::normalizeActionColor($outcomeSetting->color);
                        $icon = self::normalizeActionIcon($outcomeSetting->icon) ?? self::getFallbackIcon($outcomeSetting);
                        $style = self::getButtonStyle($outcomeSetting->color);

                        $action = Action::make("outcome_{$outcomeSetting->id}")
                            ->label($label)
                            ->button()
                            ->extraAttributes([
                                'class' => 'outcome-button',
                                'style' => $style,
                            ])
                            ->color($color)
                            ->action(function (array $data, $record) use ($outcomeSetting, $outcomeValue, $component, $label, $color): void {
                                if ($record) {
                                    $selectedOutcomeValue = null;

                                    if ($outcomeValue === 'NyligenGjort') {
                                        $selectedOutcomeValue = trim((string) ($data['outcome_value'] ?? ''));
                                    }

                                    $outcomeToSave = $selectedOutcomeValue !== ''
                                        ? $selectedOutcomeValue
                                        : $outcomeValue;

                                    $outcomeCategory = $outcomeSetting->category;

                                    if ($outcomeToSave !== $outcomeValue) {
                                        $outcomeCategory = OutcomeSetting::query()
                                            ->where('is_active', true)
                                            ->where('outcome', $outcomeToSave)
                                            ->value('category') ?? $outcomeCategory;
                                    }

                                    $attributes = [
                                        'is_active' => false,
                                        'outcome' => $outcomeToSave,
                                        'outcome_category' => $outcomeCategory,
                                        'is_outcome' => true,
                                        'attempts' => ($record->attempts ?? 0) + 1,
                                    ];

                                    if (in_array($outcomeValue, ['RingTillbaka', 'Aterkommer'], true) && filled($data['aterkom_at'] ?? null)) {
                                        $attributes['aterkom_at'] = Carbon::parse((string) $data['aterkom_at']);
                                    }

                                    $record->update([
                                        ...$attributes,
                                    ]);

                                    $notificationLabel = $label;

                                    if ($selectedOutcomeValue !== '') {
                                        foreach (Outcomes3::cases() as $case) {
                                            if ($case->name === $selectedOutcomeValue) {
                                                $notificationLabel = $case->getLabel();
                                                break;
                                            }
                                        }
                                    }

                                    Notification::make()
                                        ->title('Utfall registrerat')
                                        ->body("➤ {$notificationLabel}")
                                        ->color($color)
                                        ->success()
                                        ->send();

                                    if ($component) {
                                        if (method_exists($component, 'redirect')) {
                                            $redirectUrl = (string) (request()->header('referer') ?? url()->previous());

                                            if ($redirectUrl !== '' && ! str_contains($redirectUrl, '/livewire-')) {
                                                $component->redirect($redirectUrl, navigate: true);

                                                return;
                                            }

                                            $component->js('window.location.reload()');

                                            return;
                                        }

                                        $component->js('window.location.reload()');
                                    }
                                }
                            });

                        if (self::isSpecialOutcome($outcomeValue)) {
                            $action
                                ->modal()
                                ->modalHeading(self::getSpecialModalHeading($outcomeValue))
                                ->modalSubmitActionLabel(self::getSpecialModalSubmitLabel($outcomeValue))
                                ->modalWidth(self::getSpecialModalWidth($outcomeValue))
                                ->schema(self::getSpecialModalSchema($outcomeValue));
                        }

                        $action->icon($icon);

                        return $action;
                    })
                    ->all(),
            ]);
    }
}
