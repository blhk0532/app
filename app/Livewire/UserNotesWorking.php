<?php

declare(strict_types=1);

namespace App\Livewire;

use Exception;
use Filament\Actions\Action;
use Filament\Forms\Components\RichEditor;
use Filament\Notifications\Notification;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;
use Inerba\DbConfig\AbstractPageSettings;

class UserNotesWorking extends AbstractPageSettings implements HasSchemas
{
    use InteractsWithSchemas;

    public bool $slideOverOpen = false;

    public ?array $data = [];

    protected string $view = 'livewire.user-notes-working';

    protected $listeners = [
        'open-user-notes-working' => 'openModal',
        // Listen for the global Filament `open-modal` dispatch so the slide-over
        // will open when other UI code dispatches `open-modal` with our id.
        'open-modal' => 'onOpenModal',
    ];

    public function getDefaultData(): array
    {
        return [];
    }

    public function openModal(): void
    {
        logger()->debug('UserNotesWorking: openModal invoked', ['user_id' => Auth::id()]);

        $this->slideOverOpen = true;
    }

    public function closeModal(): void
    {
        $this->slideOverOpen = false;
    }

    public function onOpenModal($event = null): void
    {
        // Fired when any code dispatches `open-modal` globally. Only open if
        // the payload targets this component's modal id.
        if ($event && isset($event['id']) && $event['id'] === 'user-notes-working-modal') {
            $this->openModal();
        }
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                RichEditor::make('notes')
                    ->toolbarButtons([
                        ['bold', 'italic', 'underline', 'strike', 'subscript', 'superscript', 'link'],
                        ['h2', 'h3', 'alignStart', 'alignCenter', 'alignEnd'],
                        ['blockquote', 'codeBlock', 'customBlocks', 'bulletList', 'orderedList'],
                        ['table', 'attachFiles'],
                        ['undo', 'redo'],
                    ])
                    ->label('My Notes')
                    ->columnSpanFull(),
                Action::make('save')
                    ->hidden()
                    ->action(function () {
                        $this->save();
                    })
                    ->label('Save'),
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
                ->title('Error')
                ->body($e->getMessage())
                ->send();
        }
    }

    protected function settingName(): string
    {
        $userId = Auth::id() ?? 'guest';

        return "user_notes_working_{$userId}";
    }
}
