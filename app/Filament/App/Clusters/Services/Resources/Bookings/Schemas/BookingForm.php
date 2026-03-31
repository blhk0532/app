<?php

declare(strict_types=1);

namespace App\Filament\App\Clusters\Services\Resources\Bookings\Schemas;

use Adultdate\FilamentBooking\Enums\BookingStatus;
use Adultdate\FilamentBooking\Models\Booking\Booking;
use Adultdate\FilamentBooking\Models\Booking\Client;
use Adultdate\FilamentBooking\Models\Booking\Service;
use App\Models\User;
use Filament\Actions\Action;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\TimePicker;
use Filament\Forms\Components\ToggleButtons;
use Filament\Schemas\Components\Component;
use Filament\Schemas\Components\Group;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Facades\Auth;

class BookingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Group::make()
                    ->extraAttributes(['class' => 'booking-group-grid'])
                    ->schema([
                        Section::make()
                            ->schema(self::getDetailsComponents())
                            ->columns(2),
                        Section::make()
                            ->schema(self::getDetailsComponents2())
                            ->columns(2),
                        Section::make()
                            ->schema([
                                self::getItemsRepeater(),
                            ]),

                    ])

                    ->columnSpan(['lg' => 3]),

                // Removed created_at / updated_at display section — not needed in modal
            ])
            ->columns(3);
    }

    /**
     * Determine if the current user may see and edit the booking `status` field.
     */
    public static function canShowStatus(?Booking $record): bool
    {
        $user = Auth::user();

        if (! $user) {
            return false;
        }

        if (is_object($user) && method_exists($user, 'hasRole')) {
            if (
                call_user_func([$user, 'hasRole'], 'admin') ||
                call_user_func([$user, 'hasRole'], 'super') ||
                call_user_func([$user, 'hasRole'], 'manager')
            ) {
                return true;
            }
        }

        if (in_array($user->role ?? null, ['admin', 'super', 'manager'])) {
            return true;
        }

        return false;
    }

    /** @return array<Component> */
    public static function getClientComponents(): array
    {
        return [];
    }

    /** @return array<Component> */
    public static function getDetailsComponents(array $clientDefaults = []): array
    {
        return [

            TextInput::make('number')
                ->default('OR-' . random_int(100000, 999999))
                ->disabled()
                ->dehydrated()
                ->required()
                ->hidden()
                ->maxLength(32)
                ->unique(Booking::class, 'number', ignoreRecord: true),
            Select::make('service_id')
                ->relationship('service', 'name')
                ->searchable()
                ->hidden(),

            Group::make()
                ->schema([
                    TimePicker::make('start_time')
                        ->label('Starttid')
                        ->seconds(false)
                        ->prefix('Från:')
                        ->suffixIcon(Heroicon::OutlinedClock)
                        ->displayFormat('H:i')
                        ->native(false)
                        ->required(),
                    TimePicker::make('end_time')
                        ->label('Sluttid')
                        ->seconds(false)
                        ->prefix('Till:')
                        ->suffixIcon(Heroicon::OutlinedClock)
                        ->displayFormat('H:i')
                        ->native(false)
                        ->required(),
                ])
                ->columns(2)
                ->columnSpan(1),
            Group::make()
                ->schema([
                    DatePicker::make('service_date')
                        ->label('Datum')
                        ->required()
                        ->columnSpan(1),
                    Select::make('service_user_id')
                        ->label('Service Tekniker')
                        ->options(User::where('role', 'service')->pluck('name', 'id'))
                        ->searchable()
                        ->required(),
                ])
                ->columns(2)
                ->columnSpan(1),
            Select::make('booking_client_id')
                ->label('Fastighetsägare')
                ->prefixIcon(Heroicon::UserCircle)
                ->relationship('client', 'name')
                ->searchable()
                ->required()
                ->createOptionForm([
                    Group::make()
                        ->columns(2)
                        ->schema([
                            TextInput::make('name')
                                ->label('Kund Namn')
                                ->default($clientDefaults['name'] ?? null)
                                ->required()
                                ->maxLength(255),
                            TextInput::make('personal_id')
                                ->hidden()
                                ->default($clientDefaults['personal_id'] ?? null)
                                ->maxLength(255),
                            TextInput::make('street')
                                ->label('Gatuadress')
                                ->default($clientDefaults['street'] ?? null)
                                ->maxLength(255)
                                ->required(),

                            TextInput::make('zip')
                                ->label('Postnummer')
                                ->default($clientDefaults['zip'] ?? null)
                                ->maxLength(20)
                                ->required(),

                            TextInput::make('city')
                                ->label('Postort')
                                ->default($clientDefaults['city'] ?? null)
                                ->maxLength(255)
                                ->required(),
                            TextInput::make('email')
                                ->label('E-postadress')
                                ->default($clientDefaults['email'] ?? null)
                                ->email()
                                ->maxLength(255)
                                ->unique(),
                            TextInput::make('phone')
                                ->label('Telefonnummer')
                                ->default($clientDefaults['phone'] ?? null)
                                ->maxLength(255)
                                ->required(),
                            TextInput::make('country')
                                ->hidden()
                                ->placeholder('Sweden'),
                        ]),
                ])
                ->createOptionAction(function (Action $action) {
                    return $action
                        ->modalHeading('Create client')
                        ->modalSubmitActionLabel('Create client')
                        ->modalWidth('lg');
                })
                ->createOptionUsing(function (array $data) {
                    $country = $data['country'] ?? null;
                    if (array_key_exists('country', $data)) {
                        unset($data['country']);
                    }

                    $client = Client::create($data);

                    if ($country) {
                        $client->update(['address' => $country]);
                    }

                    return $client->id;
                }),
            Group::make()
                ->schema([
                    TextInput::make('phone')
                        ->hidden()
                        ->label('Telefonnummer')
                        ->placeholder('Telefon bokning')
                        ->extraAlpineAttributes(['x-data' => '{}'])
                        ->extraAttributes(['class' => 'booking-phone-input'])
                        ->extraInputAttributes(['x-data' => '{}'])
                        ->suffixAction(
                            Action::make('fillFromQueue')
                                ->icon('heroicon-o-device-phone-mobile')
                                ->label('Fyll från kö')
                                ->extraAttributes([
                                    'x-data' => '{}',
                                    'x-on:click' => 'fetch("/api/booking-outcall-queue/latest-phone", { headers: { "X-CSRF-TOKEN": document.querySelector(\'meta[name="csrf-token"]\').content } }).then(r=>r.json()).then(d=>{if(d.phone){$el.closest(".booking-phone-input").querySelector("input").value=d.phone;$el.closest(".booking-phone-input").querySelector("input").dispatchEvent(new Event("input"));}});',
                                ])
                        )
                        ->maxLength(12)
                        ->columnSpan(1),
                    TextInput::make('personnummer')
                        ->hidden()
                        ->label('Personnummer')
                        ->default($clientDefaults['personal_id'] ?? null)
                        ->placeholder('YYYYMMDDXXXX'),
                ])
                ->columns(2)
                ->columnSpan(1),
            TextInput::make('title')
                ->hidden()
                ->default($clientDefaults['title'] ?? null)
                ->dehydrated(),
            TextInput::make('description')
                ->hidden()
                ->default($clientDefaults['description'] ?? null)
                ->dehydrated(),
            TextInput::make('location')
                ->hidden()
                ->default($clientDefaults['location'] ?? null)
                ->dehydrated(),
            TextInput::make('fastighetsbeteckning')
                ->label('Fastighetsbeteckning')
                ->suffixAction(Action::make('search_property')
                    ->icon(Heroicon::MagnifyingGlass)
                    ->url('https://minkarta.lantmateriet.se/')
                    ->openUrlInNewTab())
                ->prefixIcon(Heroicon::Home)
                ->placeholder('-- https://minkarta.lantmateriet.se --'),
            TextInput::make('booking_user_id')
                ->hidden()
                ->dehydrated(),

            TextInput::make('admin_id')
                ->hidden()
                ->dehydrated(),
            RichEditor::make('notes')
                ->label('Anteckningar')
                ->extraAttributes(['class' => 'booking-notes-rich-editor'])
                ->toolbarButtons([
                    'bold',
                    'italic',
                    'underline',
                    'bulletList',
                    'orderedList',
                    'h2',
                    'h3',
                ])
                ->columnSpan('full'),
        ];
    }

    /** @return array<Component> */
    public static function getDetailsComponents2(array $clientDefaults = []): array
    {
        return [
            ToggleButtons::make('status')
                ->inline()
                ->hidden()
                ->options(BookingStatus::class)
                ->required()
                ->columnSpan('full'),
        ];
    }

    /** @return array<Component> */
    public static function getItemsRepeater(): Repeater
    {
        return Repeater::make('items')
            ->label('Tjänst')
            ->extraAttributes(['class' => 'booking-items-repeater'])
            ->relationship()
            ->schema([
                Select::make('booking_service_id')
                    ->label('Tjänst')
                    ->options(Service::query()->pluck('name', 'id'))
                    ->required()
                    ->live()
                    ->afterStateUpdated(fn($state, Set $set) => $set('unit_price', Service::find($state)?->price ?? 0))
                    ->distinct()
                    ->searchable()
                    ->columnSpan(2),
                TextInput::make('qty')
                    ->label('Antal')
                    ->numeric()
                    ->default(1)
                    ->required()
                    ->columnSpan(1),
                TextInput::make('unit_price')
                    ->label('Pris')
                    ->dehydrated()
                    ->numeric()
                    ->required()
                    ->columnSpan(1),
            ])
            ->columns(4)
            ->orderColumn('sort')
            ->defaultItems(1)
            ->hiddenLabel();
    }
}
