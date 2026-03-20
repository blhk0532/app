<?php

declare(strict_types=1);

namespace App\Filament\Data\Pages;

use App\Filament\Data\Widgets\PostorterMapWidget;
use App\Filament\Data\Widgets\PostorterTableWidget;
use App\Filament\Data\Widgets\Tables\KommunerTableWidget;
use BackedEnum;
use Filament\Pages\Page as BasePage;
use Filament\Schemas\Components\Component as SchemaComponent;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Livewire as LivewireComponent;
use Filament\Schemas\Schema;
use Wallacemartinss\FilamentIconPicker\Enums\Remix;

class KommunerMap extends BasePage
{
    protected static ?string $title = 'Kommuner Map';

    protected static ?string $slug = 'kommuner-map';

    protected static ?string $navigationLabel = 'Kommuner Map';

    protected static string|BackedEnum|null $navigationIcon = Remix::RiMap2Fill;

    protected static bool $shouldRegisterNavigation = false;

    protected static ?int $navigationSort = 100;

    public function getWidgets(): array
    {
        return [];
    }

    public function getColumns(): int|array
    {
        return 1;
    }

    public function content(Schema $schema): Schema
    {
        return $schema
            ->components([
                $this->getWidgetsContentComponent(),
            ]);
    }

    public function getWidgetsContentComponent(): SchemaComponent
    {
        $widgets = [
            LivewireComponent::make(PostorterMapWidget::class),
            LivewireComponent::make(KommunerTableWidget::class),
            LivewireComponent::make(PostorterTableWidget::class),
        ];

        return Grid::make($this->getColumns())
            ->schema($widgets);
    }
}
