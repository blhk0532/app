<?php

declare(strict_types=1);

namespace App\Livewire\Cachet;

use App\Models\Announcement;
use App\Models\User;
use Cachet\Models\Component;
use Carbon\Carbon;
use Filament\Notifications\Notification;
use Illuminate\Support\Facades\Auth;
use Livewire\Attributes\On;
use Livewire\Component as LivewireComponent;

class AnnouncementEditor extends LivewireComponent
{
    public int|string|null $editingId = null;

    public string $title = '';

    public string $content = '';

    public string $priority = 'low';

    public ?int $tekniker_id = null;

    public ?int $component_id = null;

    public ?string $starts_at = null;

    public ?string $ends_at = null;

    public function mount(): void
    {
        $editId = request()->query('edit_announcement');
        $this->editingId = $editId ? (int) $editId : null;

        if ($this->editingId) {
            $announcement = Announcement::find($this->editingId);
            if ($announcement) {
                $this->title = $announcement->title;
                $this->content = strip_tags($announcement->content);
                $this->priority = $announcement->priority;
                $this->tekniker_id = $announcement->tekniker_id;
                $this->component_id = $announcement->component_id;
                $this->starts_at = $announcement->starts_at?->format('Y-m-d H:i:s');
                $this->ends_at = $announcement->ends_at?->format('Y-m-d H:i:s');
            }
        } else {
            $this->priority = 'low';
            $this->starts_at = now()->format('Y-m-d H:i:s');
        }
    }

    #[On('reset-editor')]
    public function resetEditor(): void
    {
        $this->editingId = null;
        $this->title = '';
        $this->content = '';
        $this->priority = 'low';
        $this->tekniker_id = null;
        $this->component_id = null;
        $this->starts_at = now()->format('Y-m-d H:i:s');
        $this->ends_at = null;
    }

    public function save(): void
    {
        $data = [
            'title' => $this->title ?: 'Untitled '.now()->format('Y-m-d H:i'),
            'content' => $this->content ?: '',
            'priority' => $this->priority ?: 'low',
            'starts_at' => $this->starts_at ? Carbon::parse($this->starts_at) : now(),
            'ends_at' => $this->ends_at ? Carbon::parse($this->ends_at) : null,
            'tekniker_id' => $this->tekniker_id,
            'component_id' => $this->component_id,
            'is_active' => true,
            'team_id' => Auth::user()->current_team_id,
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

        $this->resetEditor();

        Notification::make()
            ->success()
            ->title($isUpdate ? 'Announcement Updated' : 'Announcement Created')
            ->body($message)
            ->send();

        $this->dispatch('refresh-announcement-widget');
    }

    public function render()
    {
        return view('livewire.cachet.announcement-editor', [
            'users' => User::where('current_team_id', Auth::user()->current_team_id)->get(),
            'components' => Component::where('team_id', Auth::user()->current_team_id)->get(),
        ]);
    }
}
