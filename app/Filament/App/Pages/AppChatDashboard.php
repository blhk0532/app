<?php

declare(strict_types=1);

namespace App\Filament\App\Pages;

use AdultDate\FilamentWirechat\Filament\Widgets\WirechatWidget;
use AdultDate\FilamentWirechat\Models\Conversation;
use BackedEnum;
use Filament\Pages\Page as BasePage;
use Filament\Support\Assets\Css;
use Filament\Support\Facades\FilamentAsset;
use Filament\Support\Icons\Heroicon;
use UnitEnum;

// use Dotswan\FilamentLaravelPulse\Widgets\PulseCache;
// use Dotswan\FilamentLaravelPulse\Widgets\PulseExceptions;
// use Dotswan\FilamentLaravelPulse\Widgets\PulseQueues;
// use Dotswan\FilamentLaravelPulse\Widgets\PulseServers;
// use Dotswan\FilamentLaravelPulse\Widgets\PulseSlowOutGoingRequests;
// use Dotswan\FilamentLaravelPulse\Widgets\PulseSlowQueries;
// use Dotswan\FilamentLaravelPulse\Widgets\PulseSlowRequests;
// use Dotswan\FilamentLaravelPulse\Widgets\PulseUsage;

class AppChatDashboard extends BasePage
{
    protected static ?string $title = '';

    protected static ?string $slug = 'chats';

    //     protected string $view = 'filament.app.pages.app-chat-dashboard';

    protected static ?string $navigationLabel = 'Meddelande';

    protected static string|UnitEnum|null $navigationGroup = 'Mina Sidor';

    protected static ?int $navigationSort = 20;

    protected static ?int $sort = 0;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedChatBubbleOvalLeftEllipsis;

    // Prevent this app-level Dashboard from being auto-discovered so that
    // the explicit `AdminDashboard` can be registered as the admin panel root.
    protected static bool $isDiscovered = true;

    public static function shouldRegisterNavigation(): bool
    {
        //    $teneant = filament()->getTenant();
        //    if (filament()->getTenant()->getAttribute('is_admin') !== true) {
        //        return true;
        //    }
        //    if (filament()->getTenant()->getAttribute('is_admin') === true) {
        //        return false;
        //    }
        //    if (auth()->user()->role === 'admin' || auth()->user()->role === 'super' || auth()->user()->role === 'manager') {
        //        return true;
        //    }

        return false;

    }

    public static function getNavigationLabel(): string
    {
        return 'Meddelande';
    }

    public static function getNavigationBadge(): ?string
    {
        $user = auth()->user();

        if (! $user) {
            return null;
        }

        try {
            return (string) Conversation::query()
                ->whereHas('participants', function ($q) use ($user) {
                    $q->where('participantable_id', $user->id)
                        ->where('participantable_type', get_class($user))
                        ->whereNull('exited_at');
                })
                ->count();
        } catch (\Throwable $e) {
            return null;
        }
    }

    public static function getNavigationIcon(): ?string
    {
        return 'heroicon-s-chat-bubble-oval-left-ellipsis';
    }

    public static function getNavigationSort(): ?int
    {
        return 20;
    }

    public static function getSort(): ?int
    {
        return 20;
    }

    public function getColumns(): int
    {
        // Use fewer columns so widgets are wider and not visually compressed.
        return 2;
    }

    public function getHeaderWidgets(): array
    {
        return [
            WirechatWidget::class,
        ];
    }

    protected function getHeaderActions(): array
    {
        FilamentAsset::register([
            Css::make('chat', __DIR__.'/../../resources/css/chat.css'),
        ]);

        return [];
    }

    protected function getHeaderTitle(): string
    {
        return '';
    }
}
