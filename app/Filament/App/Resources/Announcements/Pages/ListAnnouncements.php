<?php

namespace App\Filament\App\Resources\Announcements\Pages;

use App\Filament\App\Resources\Announcements\AnnouncementResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use App\Filament\App\Resources\Announcements\Tables\AnnouncementsTable;
use App\Filament\App\Widgets\AnnouncementEditorWidget;
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
