<?php

declare(strict_types=1);

namespace App\Livewire;

use App\Enums\UserActiveStatus;
use App\Models\Company;
use App\Models\Schema as SchemaModel;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Exceptions\Halt;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Joaopaulolndev\FilamentEditProfile\Livewire\BaseProfileForm;

class CustomProfileComponent extends BaseProfileForm
{
    public ?array $data = [];

    protected static int $sort = 0;

    protected string $view = 'livewire.custom-profile-component';

    public function mount(): void
    {
        $user = Auth::user();
        $this->form->fill([
            'active_status' => $user?->active_status,
            'tax_id' => $user?->tax_id,
            'nationality' => $user?->nationality,
            'whatsapp' => $user?->whatsapp,
            'company_id' => $user?->company_id,
            'current_schema_id' => $user?->current_schema_id,
        ]);
    }

    public function form(Schema $form): Schema
    {
        return $form
            ->components([
                Section::make('Din Status')
                    ->aside()
                    ->hidden()
                    ->description('Uppdatera din synliga aktivitetsstatus.')
                    ->schema([
                        Select::make('active_status')
                            ->label('Status')
                            ->options(UserActiveStatus::class)
                            ->native(false)
                            ->selectablePlaceholder(false),
                    ]),
                Section::make('Personlig Information')
                    ->aside()
                    ->schema([
                        TextInput::make('tax_id')
                            ->label('Tax ID')
                            ->maxLength(255),
                        TextInput::make('nationality')
                            ->label('Nationality')
                            ->maxLength(255),
                        Select::make('company_id')
                            ->label('Company')
                            ->hidden()
                            ->options(Company::query()->pluck('name', 'id'))
                            ->searchable()
                            ->nullable(),
                        Select::make('current_schema_id')
                            ->label('Current Schema')
                            ->hidden()
                            ->searchable()
                            ->nullable(),
                    ]),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        $user = Auth::user();

        try {
            $data = $this->form->getState();

            $user->update($data);
        } catch (Halt $exception) {
            return;
        }

        Notification::make()
            ->success()
            ->title('Profile updated')
            ->send();
    }

    public function render(): View
    {
        return view($this->view);
    }
}
