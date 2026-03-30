<?php

namespace App\Filament\App\Resources\Announcements;

use App\Filament\App\Resources\Announcements\Pages\CreateAnnouncement;
use App\Filament\App\Resources\Announcements\Pages\EditAnnouncement;
use App\Filament\App\Resources\Announcements\Pages\ListAnnouncements;
use App\Models\Announcement;
use App\Models\Team;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Filament\Schemas\Schema;
use UnitEnum;
use App\Filament\App\Resources\Announcements\Schemas\AnnouncementForm;
use App\Filament\App\Resources\Announcements\Tables\AnnouncementsTable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class AnnouncementResource extends Resource
{
    protected static ?string $model = Announcement::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedChatBubbleOvalLeft;

    protected static ?string $tenantOwnershipRelationshipName = 'team';

    protected static string|UnitEnum|null $navigationGroup = 'Användare';

    protected static ?string $navigationLabel = 'Nyheter';

    protected static bool $isScopedToTenant = false;

   public static function table(Table $table): Table
   {
       return AnnouncementsTable::configure($table);
   }


    public static function getNavigationGroup(): ?string
    {
        return 'Administration | TEAM';
        // return filament()->getTenant()?->name ? filament()->getTenant()?->name : 'Administration';
    }

    public static function shouldRegisterNavigation(): bool
    {

        if (filament()->getTenant()->getAttribute('is_admin') === true) {
        if (auth()->user()->role === 'admin' || auth()->user()->role === 'super' || auth()->user()->role === 'manager') {
            return true;
        }
        }

        return false;
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

        public static function form(Schema $schema): Schema
    {
        return AnnouncementForm::configure($schema);
    }

   public static function getEloquentQuery(): Builder
   {
                $user = auth()->user();
                $teams = $user->teams()->where('is_admin', 0)->pluck('teams.id');
                $defaultTeamIds = $teams->all();

                return parent::getEloquentQuery()
                        ->whereIn('team_id', $defaultTeamIds);
   }

        public static function getQuery(): Builder
    {
         $user = auth()->user();
         $teams = $user->teams()->where('is_admin', 0)->pluck('id', 'teams.id');
         $defaultTeamId = $teams ?? null;

        /** @var class-string<Model> $modelClass */
        $modelClass = self::$model;

        $count = $modelClass::where(function ($q) use ($defaultTeamId){
            $q->where('team_id', '=', $defaultTeamId);
        });
        return $count;
    }

    public static function getPages(): array
    {
        return [
            'index' => \App\Filament\App\Resources\Announcements\Pages\ListAnnouncements::route('/'),
            'create' => CreateAnnouncement::route('/create'),
            'edit' => EditAnnouncement::route('/{record}/edit'),
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        /** @var class-string<Model> $modelClass */
        $modelClass = self::$model;

        $count = $modelClass::where(function ($q){
            $q->where('starts_at', '<=', now())
                ->where('ends_at', '>=', now());
        })
            ->count();

        return (string) $count;
    }

    public static function getWidgets(): array
    {
        return parent::getWidgets();
    }

}
