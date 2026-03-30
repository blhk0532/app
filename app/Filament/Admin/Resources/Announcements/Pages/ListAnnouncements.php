<?php

namespace App\Filament\Admin\Resources\Announcements\Pages;

use App\Filament\Admin\Resources\Announcements\AnnouncementResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Admin\Resources\Announcements\Tables\AnnouncementsTable;
use Cachet\Filament\Widgets\AnnouncementEditorWidget;
use Illuminate\Contracts\Support\Htmlable;

class ListAnnouncements extends ListRecords
{
    protected static string $resource = AnnouncementResource::class;

    protected function getHeaderActions(): array
    {
        return [

        ];
    }

    public function getBreadcrumbs(): array
    {
                return [

        ];
    }

    public function getHeading(): string|Htmlable|null
    {
        return null;
    }

    protected function getHeaderWidgets(): array
    {
        return [
            AnnouncementEditorWidget::class,
        ];
    }
}
