<?php

namespace App\Filament\Queue\Resources\Jobs;

use App\Filament\Queue\Resources\Jobs\Pages\CreateJob;
use App\Filament\Queue\Resources\Jobs\Pages\EditJob;
use App\Filament\Queue\Resources\Jobs\Pages\ListJobs;
use App\Filament\Queue\Resources\Jobs\Pages\ViewJob;
use App\Filament\Queue\Resources\Jobs\Schemas\JobForm;
use App\Filament\Queue\Resources\Jobs\Schemas\JobInfolist;
use App\Filament\Queue\Resources\Jobs\Tables\JobsTable;
use App\Models\Job;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class JobResource extends Resource
{
    protected static ?string $model = Job::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static bool $shouldRegisterNavigation = false;

    public static function getNavigationGroup(): ?string
    {
        return __('Settings');
    }

    public static function form(Schema $schema): Schema
    {
        return JobForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return JobInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return JobsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListJobs::route('/'),
            'create' => CreateJob::route('/create'),
            'view' => ViewJob::route('/{record}'),
            'edit' => EditJob::route('/{record}/edit'),
        ];
    }
}
