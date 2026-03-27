<?php

declare(strict_types=1);

namespace Joaopaulolndev\FilamentEditProfile\Livewire;

use Filament\Auth\Notifications\NoticeOfEmailChangeRequest;
use Filament\Auth\Notifications\VerifyEmailChange;
use Filament\Facades\Filament;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification as FilamentNotification;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Exceptions\Halt;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Notification;
use Joaopaulolndev\FilamentEditProfile\Concerns\HasUser;
use League\Uri\Components\Query;

class EditProfileForm extends BaseProfileForm
{
    use HasUser;

    public ?array $data = [];

    public $userClass;

    protected string $view = 'filament-edit-profile::livewire.edit-profile-form';

    protected static int $sort = 10;

    public function mount(): void
    {
        $this->user = $this->getUser();

        $this->userClass = get_class($this->user);

        $fields = [
            'name',
            'email',
            'phone',
            'name_first',
            'name_last',
            'address',
            'country',
            'phone_private',
            'whatsapp',
            'bio',
            'tax_id',
            'nationality',
            'company_id',
            'current_schema_id',
            'active_status',
        ];

        if (config('filament-edit-profile.show_avatar_form', true)) {
            $fields[] = config('filament-edit-profile.avatar_column', 'avatar_url');
        }

        if (config('filament-edit-profile.show_locale_form', true)) {
            $fields[] = config('filament-edit-profile.locale_column', 'locale');
        }

        if (config('filament-edit-profile.show_theme_color_form', true)) {
            $fields[] = config('filament-edit-profile.theme_color_column', 'theme_color');
        }

        $this->form->fill($this->user->only($fields));
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make(__('filament-edit-profile::default.profile_information'))
                    ->aside()
                    ->columns(12)
                    ->description(__('filament-edit-profile::default.profile_information_description'))
                    ->schema([
                        FileUpload::make(config('filament-edit-profile.avatar_column', 'avatar_url'))
                            ->label(__('filament-edit-profile::default.avatar'))
                            ->avatar()
                            ->imageEditor()
                            ->columnSpan(6)
                            ->disk(config('filament-edit-profile.disk', 'public'))
                            ->visibility(config('filament-edit-profile.visibility', 'public'))
                            ->directory(config('filament-edit-profile.avatar_directory', 'avatars'))
                            ->hidden(! config('filament-edit-profile.show_avatar_form', true)),
                        Section::make()
                            ->columnSpan(6)
                            ->columns(6)
                            ->schema([
                                TextInput::make('name')
                                    ->label(__('Användarnamn'))
                                    ->columnSpan(6)
                                //    ->disabled()
                                    ->hidden(! config('filament-edit-profile.show_email_form', true)),
                                TextInput::make('phone')
                                    ->label(__('Telefonnummer'))
                                //    ->disabled()
                                    ->hidden(! config('filament-edit-profile.show_email_form', true))
                                    ->columnSpan(6)
                                    ->unique($this->userClass, ignorable: $this->user),

                            ]),
                        TextInput::make('name_first')
                            ->label(__('Förnamn'))
                            ->columnSpan(6)
                            ->hidden(! config('filament-edit-profile.show_email_form', true)),
                        TextInput::make('name_last')
                            ->hidden(! config('filament-edit-profile.show_email_form', true))
                            ->label(__('Efternamn'))
                            ->columnSpan(6),
                        TextInput::make('email')
                            ->label(__('Epostaddress'))
                            ->columnSpan(6),
                        TextInput::make('phone_private')
                            ->label(__('Mobilnummer'))
                            ->columnSpan(6),
                        TextInput::make('whatsapp')
                            ->hidden()
                            ->label(__('WhatsApp'))
                            ->columnSpan(4),
                        TextInput::make('address')
                            ->label(__('Bostdsadress'))
                            ->columnSpan(12),
                        MarkdownEditor::make('bio')
                            ->label(__('Noteringar'))
                            ->columnSpanFull()
                            ->hidden(! config('filament-edit-profile.show_email_form', true)),
                    ]),
            ])
            ->statePath('data');
    }

    public function updateProfile(): void
    {
        $locale = null;
        $theme_color = null;
        if (config('filament-edit-profile.show_locale_form', true)) {
            $locale = $this->user->getAttributeValue('locale');
        }
        if (config('filament-edit-profile.show_theme_color_form', true)) {
            $theme_color = $this->user->getAttributeValue('theme_color');
        }

        try {
            $data = $this->form->getState();

            if (Filament::hasEmailChangeVerification() && array_key_exists('email', $data)) {
                $this->sendEmailChangeVerification($this->user, $data['email']);

                unset($data['email']);
            }

            $this->user->fill($data);
            $this->user->save();

            $this->dispatch('refresh-topbar');
        } catch (Halt $exception) {
            return;
        }

        FilamentNotification::make()
            ->success()
            ->title(__('filament-edit-profile::default.saved_successfully'))
            ->send();

        if (config('filament-edit-profile.show_locale_form', true)) {
            if ($locale !== $this->user->getAttributeValue('locale')) {
                redirect(request()->header('referer'));

                return;
            }
        }
        if (config('filament-edit-profile.show_theme_color_form', true)) {
            if ($theme_color !== $this->user->getAttributeValue('theme_color')) {
                redirect(request()->header('referer'));
            }
        }
    }

    private function sendEmailChangeVerification(Authenticatable&Model $user, string $newEmail): void
    {
        if ($user->getAttributeValue('email') === $newEmail) {
            return;
        }

        $notification = app(VerifyEmailChange::class);
        $notification->url = Filament::getVerifyEmailChangeUrl($user, $newEmail);

        $verificationSignature = Query::new($notification->url)->get('signature');

        cache()->put($verificationSignature, true, ttl: now()->addHour());

        $user->notify(app(NoticeOfEmailChangeRequest::class, [
            /** @phpstan-ignore-line */
            'blockVerificationUrl' => Filament::getBlockEmailChangeVerificationUrl($user, $newEmail, $verificationSignature),
            'newEmail' => $newEmail,
        ]));

        Notification::route('mail', $newEmail)
            ->notify($notification);

        $this->getEmailChangeVerificationSentNotification($newEmail)?->send();

        $this->data['email'] = $user->getAttributeValue('email');
    }

    private function getEmailChangeVerificationSentNotification(string $newEmail): ?FilamentNotification
    {
        return FilamentNotification::make()
            ->success()
            ->title(__('filament-panels::auth/pages/edit-profile.notifications.email_change_verification_sent.title', ['email' => $newEmail]))
            ->body(__('filament-panels::auth/pages/edit-profile.notifications.email_change_verification_sent.body', ['email' => $newEmail]));
    }
}
