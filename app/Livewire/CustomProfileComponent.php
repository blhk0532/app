<?php

declare(strict_types=1);

namespace App\Livewire;

use App\Enums\UserActiveStatus;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Joaopaulolndev\FilamentEditProfile\Livewire\BaseProfileForm;

class CustomProfileComponent extends BaseProfileForm
{
    public ?array $data = [];

    protected static int $sort = 0;

    public function mount(): void
    {
        $this->form->fill([
            'active_status' => Auth::user()->active_status,
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
            ])
            ->statePath('data');
    }

    public function render(): View
    {
        return view('livewire.custom-profile-component');
    }
}
