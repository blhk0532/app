<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaDatas\Pages;

use App\Filament\App\Resources\RingaDatas\RingaDatasResource;
use App\Filament\App\Resources\RingaDatas\Widgets\RingaDataCalendar;
use App\Filament\App\Resources\RingaDatas\Widgets\RingaDataDisplayWidget;
use App\Filament\App\Resources\RingaDatas\Widgets\RingaDataOutcomeFormWidget;
use App\Filament\App\Resources\RingaDatas\Widgets\RingaDataOutcomeWidget;
use App\Filament\App\Resources\RingaDatas\Widgets\RingaDataPinpointWidget;
use App\Filament\App\Resources\RingaDatas\Widgets\RingaDatasQueueTableWidget;
use App\Models\RingaData;
use BackedEnum;
use Exception;
use Filament\Resources\Pages\Page;
use Filament\Support\Assets\Css;
use Filament\Support\Enums\Width;
use Filament\Support\Facades\FilamentAsset;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Livewire\Attributes\On;
use UnitEnum;
use Wallacemartinss\FilamentIconPicker\Enums\Tabler;

class QueueRingaData extends Page
{
    public ?int $selectedRecordId = null;

    protected static string $resource = RingaDatasResource::class;

    protected static ?string $slug = 'queue';

    protected static ?string $model = RingaData::class;

    protected static ?string $navigationLabel = 'Samtalskö';

    protected static ?string $title = 'Samtalskö';

    // public static bool $shouldRegisterNavigation = true;

     // protected static UnitEnum|string|null $navigationGroup = ' ';

    protected static ?int $navigationSort = 3;

    protected static ?int $sort = 2;

    protected static string|BackedEnum|null $navigationIcon = Tabler::PhoneRinging;

    protected Width|string|null $maxContentWidth = Width::Full;

    protected static bool $isScopedToTenant = false;

    protected string $view = 'filament.app.resources.ringa-data.pages.queue';

    //  public static function shouldRegisterNavigation(array $parameters = []): bool
    //  {
    //      $tenant = filament()->getTenant();
    //      return $tenant && $tenant->getAttribute('is_admin') === false;
    //  }

    public function mount(): void
    {
        try {
            $pendingCount = $this->getQuery()->count();

            $first = $this->getQuery()->first();
            $this->selectedRecordId = $first?->id;

            // Temporary debug logging to diagnose empty queue issues
            try {
                logger()->info('QueueRingaData debug', [
                    'tenant_id' => filament()->getTenant()?->id,
                    'auth_id' => Auth::id(),
                    'pending_count' => $pendingCount,
                    'total_ringa_count' => DB::table('ringa_data')->count(),
                    'sample_rows' => DB::table('ringa_data')
                        ->select('id', 'team_id', 'user_id', 'is_active', 'started_at', 'available_at', 'outcome', 'outcome_category', 'attempts')
                        ->orderBy('id')
                        ->limit(5)
                        ->get()
                        ->map(fn ($r) => (array) $r)
                        ->toArray(),
                ]);
            } catch (\Throwable $t) {
                logger()->warning('QueueRingaData debug logging failed: '.$t->getMessage());
            }
            if (! $first) {
                $tenant = filament()->getTenant();
                $this->redirect(route('filament.app.pages.dashboard', ['tenant' => $tenant]), navigate: true);

                return;
            }

            if ($this->selectedRecordId) {
                $this->dispatch('record-selected', recordId: $this->selectedRecordId);
            }
        } catch (Exception $e) {
            logger('QueueRingaData mount error: '.$e->getMessage(), ['exception' => $e]);
            throw $e;
        }
    }

    public static function getNavigationBadge(): ?string
    {
        $user = Auth::user();
        if (! $user) {
            return '';
        }

        $count = self::getQuery()->count();

        if ($count === 0) {
            return '❍';
        }

        return (string) $count;
    }

    public static function getNavigationBadgeColor(): ?string
    {
        $user = Auth::user();
        if (! $user) {
            return 'warning';
        }

        $count = self::getQuery()->count();

        return $count > 0 ? 'danger' : 'success';
    }

    public function getHeaderWidgetsData(): array
    {
        $record = null;

        $query = $this->getQuery();

        if ($this->selectedRecordId) {
            $record = $query->find($this->selectedRecordId);
        }

        if (! $record) {
            $record = $query->first();
            $this->selectedRecordId = $record?->id;
        }

        if (! $record) {
            $this->selectedRecordId = null;
        }

        return [
            'record' => $record,
            'recordId' => $this->selectedRecordId,
            'selectedRecordId' => $this->selectedRecordId,
        ];
    }

    public function selectRecord(int $recordId): void
    {
        $this->selectedRecordId = $recordId;
        $this->dispatch('record-selected', recordId: $recordId);
    }

    #[On('record-selected')]
    public function handleRecordSelected(int $recordId): void
    {
        $this->selectedRecordId = $recordId;
    }

    #[On('outcome-recorded')]
    public function handleOutcomeRecorded(?int $recordId): void
    {
        // If a new record was loaded by OutcomeRecorder, select it
        if ($recordId && $recordId > 0) {
            $this->selectedRecordId = $recordId;
        } else {
            // Otherwise get the first pending record
            $first = $this->getQuery()->first();
            $this->selectedRecordId = $first?->id;

            // If no pending records, redirect to dashboard
            if (! $first) {
                $tenant = filament()->getTenant();
                $this->redirect(route('filament.app.pages.app-dashboard', ['tenant' => $tenant]), navigate: true);

                return;
            }
        }

        // Dispatch event to inform widgets of the selected record
        if ($this->selectedRecordId) {
            $this->dispatch('record-selected', recordId: $this->selectedRecordId);
        }
    }

    public static function getQuery(): Builder
    {
        return RingaData::getQueryRinglista();
    }

    protected function getHeaderWidgets(): array
    {

        FilamentAsset::register([
            Css::make('custom', __DIR__.'/../../resources/css/custom.css'),
        ]);

        return [

            RingaDataPinpointWidget::class,
            RingaDataDisplayWidget::class,
            RingaDataOutcomeFormWidget::class,
            RingaDataOutcomeWidget::class,
            RingaDataCalendar::class,
            RingaDatasQueueTableWidget::class,

        ];
    }

    public function getBreadcrumbs(): array
    {
        return [];
    }

    public function getHeading(): string|Htmlable|null
    {
        return null;
    }
}
