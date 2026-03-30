<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaData\Pages;

use App\Filament\App\Resources\RingaData\RingaDataResource;
use App\Filament\App\Resources\RingaData\Widgets\RingaDataDisplayWidget;
use App\Filament\App\Resources\RingaData\Widgets\RingaDataOutcomeWidget;
use App\Filament\App\Resources\RingaData\Widgets\RingaDataStatsWidget;
use App\Models\RingaData;
use Asmit\ResizedColumn\HasResizableColumn;
use EightyNine\ExcelImport\ExcelImportAction;
use Filament\AdvancedExport\Traits\HasAdvancedExport;
use Filament\Resources\Pages\ListRecords;
use Filament\Support\Assets\Css;
use Filament\Support\Enums\Width;
use Filament\Support\Facades\FilamentAsset;
use Filament\Tables\Table;

class ListRingaData extends ListRecords
{
    //  use PageHasContextMenu;

    use HasAdvancedExport;
    use HasResizableColumn;

    public ?int $selectedRecordId = null;

    protected static string $resource = RingaDataResource::class;

    public function getHeaderWidgetsColumns(): int|array
    {
        return 3;
    }

    public function selectRecord(int $recordId): void
    {
        $this->selectedRecordId = $recordId;
        $this->dispatch('record-selected', recordId: $recordId);
    }

    public function getMaxContentWidth(): Width
    {
        return Width::Full;
    }

    protected function getHeaderActions(): array
    {
        return [];
    }

    public function table(Table $table): Table
    {
        return parent::table($table)
            ->headerActions([

            ]);
    }

    //  public static function getContextMenuActions(): array
    //  {
    //      return [
    //          RefreshAction::make(),
    //          GoBackAction::make(),
    //          GoForwardAction::make()
    //      ];
    //  }

    protected function getHeaderWidgets(): array
    {
        FilamentAsset::register([
            Css::make('custom', __DIR__.'/../../resources/css/custom.css'),
        ]);

        return [
            //    RingaDataPinpointWidget::class,
            //    RingaDataDisplayWidget::class,
            //    RingaDataOutcomeWidget::class,
            RingaDataStatsWidget::class,

        ];
    }

    protected function getHeaderWidgetsData(): array
    {
        return [
            'record' => $this->selectedRecordId ? RingaData::find($this->selectedRecordId) : null,
        ];
    }
}
