<?php

declare(strict_types=1);

namespace App\Filament\App\Widgets;

use App\Filament\App\Resources\Contacts\Widgets\ContactWidget;
use App\Filament\App\Resources\RetryOutcomes\RetryOutcomeResource;
use App\Filament\App\Resources\RetryOutcomes\Widgets\RetryOutcomeWidget;
use App\Filament\App\Resources\RingaData\Widgets\RingaDataWidget;
use App\Filament\App\Resources\RingaListan\RingaListanResource;
use App\Filament\App\Resources\RingaListan\Widgets\CallAgainWidget;
use App\Models\RingaData;
use Illuminate\Support\Facades\Auth;
use SolutionForest\TabLayoutPlugin\Components\Tabs;
use SolutionForest\TabLayoutPlugin\Components\Tabs\Tab as TabLayoutTab;
use SolutionForest\TabLayoutPlugin\Widgets\TabsWidget as BaseWidget;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;

class MyRinglistaWidget extends BaseWidget
{
    public static function tabs(Tabs $tabs): Tabs
    {
        return $tabs->contained(true);
    }

    protected function schema(): array
    {
        return [
            TabLayoutTab::make('Ring Igen')
                ->icon(Remix::RiTimerFlashLine)
                ->badge(fn () => RingaListanResource::getRingAgainCount())
                ->extraAttributes(['class' => 'ring-tillbaka-tab'])
                ->schema([
                    CallAgainWidget::class,
                ]),
            TabLayoutTab::make('Samtalskö')
                ->icon('heroicon-o-queue-list')
                ->badge(fn () => $this->getQueueCount())
                ->extraAttributes(['class' => 'ring-tillbaka-tab'])
                ->schema([
                    RingaDataWidget::class,
                ]),
            TabLayoutTab::make('Kontakter')
                ->extraAttributes(['class' => 'kontakter-tab'])
                ->icon('heroicon-o-user')
                ->badge(fn () => $this->getContactCount())
                ->schema([
                    ContactWidget::class,
                ]),
            TabLayoutTab::make('Offerter')
                ->extraAttributes(['class' => 'offerter-tab'])
                ->icon('heroicon-o-document-text')
                ->badge(fn () => (int) OffertWidget::getBaseQuery()->count())
                ->schema([
                    OffertWidget::class,
                ]),
            TabLayoutTab::make('Väntelista')
                ->extraAttributes(['class' => 'väntelista-tab'])
                ->icon('heroicon-o-clock')
                ->badge(fn () => (int) RetryOutcomeResource::getEloquentQuery()->count())
                ->schema([
                    RetryOutcomeWidget::class,
                ]),
            TabLayoutTab::make('Historik')
                ->icon('heroicon-o-phone-arrow-down-left')
                ->extraAttributes(['class' => 'samtalshistorik-tab'])
                ->badge(fn () => (int) CallHistoryWidget::getBaseQuery()->count())
                ->schema([
                    CallHistoryWidget::class,
                ]),
        ];
    }

    protected function getQueueCount(): int
    {
        return (int) RingaDataWidget::getBaseQuery()->count();
    }

    protected function getContactCount(): int
    {
        try {
            $userId = Auth::id();

            if (! $userId) {
                return 0;
            }

            return (int) RingaData::getContactQuery(RingaData::query())
                ->where('user_id', $userId)
                ->count();
        } catch (\Throwable) {
            return 0;
        }
    }
}
