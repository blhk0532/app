<?php

declare(strict_types=1);

namespace App\Livewire;

use Exception;
use Filament\Forms;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Schemas\Schema;
use Illuminate\Contracts\View\View;
use Inerba\DbConfig\AbstractPageSettings;

class ManusIconModal extends AbstractPageSettings implements HasForms
{
    use InteractsWithForms;

    public ?int $currentUser = null;

    public ?array $data = [];

    protected string $view = 'livewire.manus-icon-modal';

    public function getDefaultData(): array
    {
        return [];
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Forms\Components\RichEditor::make('site_name')
                    ->toolbarButtons([
                        ['bold', 'underline', 'superscript'],
                        ['h2', 'alignStart', 'alignCenter', 'alignEnd'],
                        ['codeBlock', 'bulletList', 'orderedList'],
                        ['table'],
                        ['undo', 'redo'],
                    ])
                    ->label('Anteckningar')
                    ->extraAttributes(['spellcheck' => 'false', 'wire:ignore' => true])
                    ->columnSpanFull(),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        try {
            $this->form->validate();
            parent::save();
            $this->skipRender();
        } catch (Exception $e) {
            Notification::make()
                ->danger()
                ->title('Fel')
                ->body($e->getMessage())
                ->send();
        }
    }

    public function render(): View
    {
        return view('livewire.manus-icon-modal');
    }

    protected function settingName(): string
    {
        return 'manus';
    }
}
