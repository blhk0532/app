<?php

declare(strict_types=1);

namespace App\Livewire;

use Exception;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Notifications\Notification;
use Filament\Schemas\Schema;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Livewire\Component;
use Throwable;

class UserNotes extends Component implements HasForms
{
    use InteractsWithForms;

    public ?int $currentUser = null;

    public ?array $data = [];

    public string $notes = '';

    protected string $view = 'livewire.user-notes';

    protected $listeners = [
        'userNotesSave' => 'save',
    ];

    public function mount(): void
    {
        $this->currentUser = Auth::id();

        // Initialize data array if not already set
        if (! is_array($this->data)) {
            $this->data = [];
        }

        $settingName = $this->settingName();
        $row = DB::table('db_config')
            ->where('group', 'user_notes')
            ->where('key', $settingName)
            ->first();

        if ($row && isset($row->settings)) {
            $settings = json_decode($row->settings, true) ?: [];
            $this->data = $settings;
        }

        // Normalize `notes` to a string if it was stored as an array/object or JSON string.
        if (isset($this->data['notes'])) {
            $n = $this->data['notes'];
            if (is_string($n)) {
                $this->data['notes'] = $n;
            } elseif (is_array($n)) {
                if (isset($n['html']) && is_string($n['html'])) {
                    $this->data['notes'] = $n['html'];
                } elseif (isset($n['content']) && is_string($n['content'])) {
                    $this->data['notes'] = $n['content'];
                } else {
                    $this->data['notes'] = json_encode($n);
                }
            }
        } else {
            // Ensure notes key exists
            $this->data['notes'] = '';
        }

        // Populate the Filament form with persisted settings so fields (RichEditor) are filled.
        $this->form->fill($this->data);

        // Ensure the simple property mirrors the filled form state.
        $this->notes = is_string($this->data['notes'] ?? null) ? $this->data['notes'] : '';

        try {
            $formState = $this->form->getState();
        } catch (Throwable $t) {
            $formState = null;
        }

        Log::info('UserNotes mounted', [
            'user' => $this->currentUser,
            'data_keys' => is_array($this->data) ? array_keys($this->data) : null,
        ]);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                RichEditor::make('notes')
                    ->toolbarButtons([
                        ['bold', 'italic', 'underline', 'strike', 'subscript', 'superscript', 'link'],
                        ['h2', 'h3', 'alignStart', 'alignCenter', 'alignEnd'],
                        ['table', 'attachFiles'],
                        ['undo', 'redo'],
                    ])
                    ->floatingToolbars([
                        'paragraph' => [
                            'bold', 'italic', 'underline', 'strike', 'subscript', 'superscript',
                        ],
                        'heading' => [
                            'h1', 'h2', 'h3',
                        ],
                        'table' => [
                            'tableAddColumnBefore', 'tableAddColumnAfter', 'tableDeleteColumn',
                            'tableAddRowBefore', 'tableAddRowAfter', 'tableDeleteRow',
                            'tableMergeCells', 'tableSplitCell',
                            'tableToggleHeaderRow', 'tableToggleHeaderCell',
                            'tableDelete',
                        ],
                    ])
                    ->label(' ')
                    ->extraAttributes(['spellcheck' => 'false'])
                    ->columnSpanFull(),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        Log::info('UserNotes save invoked', ['user' => $this->currentUser]);

        try {
            $this->form->validate();

            // Read the form state if available, otherwise fall back to the simple `notes` property.
            $state = null;

            try {
                $state = $this->form->getState();
            } catch (Throwable $t) {
                $state = null;
            }

            if (is_array($state) && array_key_exists('notes', $state)) {
                $this->data = $state;
            } else {
                $this->data = array_merge($this->data ?? [], ['notes' => $this->notes]);
            }

            Log::info('UserNotes save called', [
                'user' => $this->currentUser,
                'state_keys' => is_array($state) ? array_keys($state) : null,
            ]);

            $key = $this->settingName();
            $result = DB::table('db_config')->updateOrInsert(
                ['group' => 'user_notes', 'key' => $key],
                ['group' => 'user_notes', 'key' => $key, 'settings' => json_encode($this->data), 'updated_at' => now()]
            );

            Log::info('UserNotes db_updateOrInsert', ['user' => $this->currentUser, 'key' => $key, 'result' => $result]);

            Notification::make()
                ->success()
                ->title('Saved')
                ->body('Notes saved successfully.')
                ->send();
        } catch (Exception $e) {
            Notification::make()
                ->danger()
                ->title('Error')
                ->body($e->getMessage())
                ->send();
        }
    }

    public function render(): View
    {
        return view('livewire.user-notes');
    }

    protected function settingName(): string
    {
        $userId = Auth::id() ?? 'guest';

        return "user_notes_{$userId}";
    }
}
