<?php

declare(strict_types=1);

namespace Cachet\Filament\Widgets;

use App\Models\Announcement;
use App\Models\User;
use Cachet\Models\Component;
use Carbon\Carbon;
use Filament\Notifications\Notification;
use Filament\Widgets\Widget;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

class AnnouncementEditorWidget extends Widget
{
    protected int|string|array $columnSpan = 'full';

    protected static ?int $sort = 3;

    protected string $view = 'cachet::filament.widgets.announcement-editor-widget';

    public ?int $editingId = null;

    public ?string $title = null;

    public ?string $content = null;

    public string $priority = 'low';

    public ?int $tekniker_id = null;

    public ?int $component_id = null;

    public ?string $starts_at = null;

    public ?string $ends_at = null;

    public Collection $users;

    public Collection $components;

    protected array $validationAttributes = [
        'title' => 'Title',
        'content' => 'Content',
        'priority' => 'Priority',
        'starts_at' => 'Starts At',
    ];

    public static function canView(): bool
    {
        return Auth::user()?->isAdmin() ?? false;
    }

    public function mount(): void
    {
        $this->users = User::where('current_team_id', Auth::user()?->current_team_id)->get();
        $this->components = Component::where('team_id', Auth::user()?->current_team_id)->get();

        $editId = request()->query('edit_announcement');
        $this->editingId = $editId ? (int) $editId : null;

        if ($this->editingId) {
            $announcement = Announcement::find($this->editingId);
            if ($announcement) {
                $this->title = $announcement->title;
                $this->content = $announcement->content;
                $this->priority = $announcement->priority;
                $this->tekniker_id = $announcement->tekniker_id;
                $this->component_id = $announcement->component_id;
                $this->starts_at = $announcement->starts_at?->format('Y-m-d\TH:i');
                $this->ends_at = $announcement->ends_at?->format('Y-m-d\TH:i');
            }
        } else {
            $this->priority = 'low';
            $this->starts_at = now()->format('Y-m-d\TH:i');
        }
    }

    public function save(): void
    {
        $this->validate([
            'title' => ['required', 'string', 'max:255'],
            'content' => ['nullable', 'string'],
            'priority' => ['required', 'in:low,medium,high'],
            'starts_at' => ['required'],
        ]);

        $data = [
            'title' => $this->title,
            'content' => $this->content ?? '',
            'priority' => $this->priority,
            'starts_at' => Carbon::parse($this->starts_at),
            'ends_at' => $this->ends_at ? Carbon::parse($this->ends_at) : null,
            'tekniker_id' => $this->tekniker_id,
            'component_id' => $this->component_id,
            'is_active' => true,
            'team_id' => Auth::user()?->current_team_id,
            'user_id' => Auth::id(),
        ];

        $isUpdate = $this->editingId !== null;

        if ($isUpdate) {
            $announcement = Announcement::find($this->editingId);
            if ($announcement) {
                $announcement->update($data);
                $message = 'Announcement updated successfully.';
            } else {
                $message = 'Announcement not found.';
            }
        } else {
            Announcement::create($data);
            $message = 'Announcement created successfully.';
        }

        $this->resetForm();

        Notification::make()
            ->success()
            ->title($isUpdate ? 'Announcement Updated' : 'Announcement Created')
            ->body($message)
            ->send();

        $this->dispatch('refresh-announcement-widget');
    }

    public function resetForm(): void
    {
        $this->reset(['title', 'content', 'editingId', 'tekniker_id', 'component_id', 'ends_at']);
        $this->priority = 'low';
        $this->starts_at = now()->format('Y-m-d\TH:i');
    }
}
