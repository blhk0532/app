<?php

declare(strict_types=1);

namespace App\Livewire;

use App\Models\AiChatConversation;
use App\Models\AiChatMessage;
use App\Services\AIService;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class GlobalAISearch extends Component
{
    public array $messages = [];

    public string $input = '';

    public bool $isLoading = false;

    public bool $isAvailable = false;

    public bool $open = false;

    protected $listeners = [
        'openModal' => 'openModal',
        'closeModal' => 'closeModal',
    ];

    public function mount(): void
    {
        $this->messages = [
            [
                'role' => 'assistant',
                'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar eller annat. Vad kan jag hjälpa dig med idag?',
            ],
        ];
    }

    public function openModal(): void
    {
        $this->open = true;
        $this->isAvailable = app(AIService::class)->isAvailable();
        $this->loadConversation();
    }

    public function closeModal(): void
    {
        $this->open = false;
    }

    protected function loadConversation(): void
    {
        $userId = auth()->id();

        $conversation = AiChatConversation::where('user_id', $userId)
            ->latest()
            ->first();

        if (! $conversation) {
            $conversation = AiChatConversation::create([
                'user_id' => $userId,
                'title' => 'New Conversation',
            ]);
        }

        $messages = $conversation->messages()->get();

        if ($messages->isEmpty()) {
            $this->messages = [
                [
                    'role' => 'assistant',
                    'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar eller annat. Vad kan jag hjälpa dig med idag?',
                ],
            ];
        } else {
            $this->messages = $messages->map(fn ($m) => [
                'role' => $m->role,
                'content' => $m->content,
            ])->toArray();
        }
    }

    public function sendMessage(): void
    {
        if (empty(trim($this->input)) || $this->isLoading) {
            return;
        }

        $userMessage = trim($this->input);
        $this->input = '';
        $this->isLoading = true;

        $this->messages[] = ['role' => 'user', 'content' => $userMessage];

        $userId = auth()->id();
        $conversation = AiChatConversation::where('user_id', $userId)->latest()->first();

        if (! $conversation) {
            $conversation = AiChatConversation::create([
                'user_id' => $userId,
                'title' => 'New Conversation',
            ]);
        }

        AiChatMessage::create([
            'conversation_id' => $conversation->id,
            'role' => 'user',
            'content' => $userMessage,
        ]);

        try {
            $aiService = app(AIService::class);
            $history = array_slice($this->messages, -10);
            $response = $aiService->chat($userMessage, $history);

            $this->messages[] = ['role' => 'assistant', 'content' => $response];

            AiChatMessage::create([
                'conversation_id' => $conversation->id,
                'role' => 'assistant',
                'content' => $response,
            ]);
        } catch (\Exception $e) {
            $errorMessage = 'Sorry, jag kunde inte få ett svar. Försök igen senare.';

            $this->messages[] = ['role' => 'assistant', 'content' => $errorMessage];

            AiChatMessage::create([
                'conversation_id' => $conversation->id,
                'role' => 'assistant',
                'content' => $errorMessage,
            ]);
        }

        $this->isLoading = false;
    }

    public function clearChat(): void
    {
        $userId = auth()->id();
        $conversation = AiChatConversation::where('user_id', $userId)->latest()->first();

        if ($conversation) {
            $conversation->messages()->delete();
        }

        $this->messages = [
            [
                'role' => 'assistant',
                'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar eller annat. Vad kan jag hjälpa dig med idag?',
            ],
        ];
    }

    public function newConversation(): void
    {
        $userId = auth()->id();

        AiChatConversation::create([
            'user_id' => $userId,
            'title' => 'New Conversation',
        ]);

        $this->messages = [
            [
                'role' => 'assistant',
                'content' => 'Hej! Jag är din AI-assistent. Jag kan hjälpa dig med frågor om dina kunder, bokningar eller annat. Vad kan jag hjälpa dig med idag?',
            ],
        ];
    }

    public function render(): View
    {
        return view('livewire.global-ai-search');
    }
}
