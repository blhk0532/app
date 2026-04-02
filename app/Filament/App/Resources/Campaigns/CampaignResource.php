<?php

namespace App\Filament\App\Resources\Campaigns;

use App\Filament\App\Resources\Campaigns\Pages\CreateCampaign;
use App\Filament\App\Resources\Campaigns\Pages\EditCampaign;
use App\Filament\App\Resources\Campaigns\Pages\ListCampaigns;
use App\Filament\App\Resources\Campaigns\Schemas\CampaignForm;
use App\Filament\App\Resources\Campaigns\Tables\CampaignsTable;
use App\Models\Campaign;
use BackedEnum;
use Filament\Resources\Resource as FilamentResource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use UnitEnum;

class CampaignResource extends FilamentResource
{
    protected static ?string $model = Campaign::class;

    protected static BackedEnum|string|null $navigationIcon = 'heroicon-o-star';

     protected static UnitEnum|string|null $navigationGroup = 'Användare';

    protected static ?string $navigationLabel = 'Kampanjer';

    protected static ?int $navigationSort = 5;

    protected static ?string $tenantOwnershipRelationshipName = 'team';

    public static function form(Schema $schema): Schema
    {
        return CampaignForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CampaignsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getNavigationGroup(): ?string
    {
                $team = filament()->getTenant()?->name;
        $name = \Illuminate\Support\Str::ucwords($team);

         return $name ? ' TEAM | ' . $name : 'TEAM | Administration';
        // return filament()->getTenant()?->name ? filament()->getTenant()?->name : 'Administration';
    }

    public static function shouldRegisterNavigation(): bool
    {
        $teneant = filament()->getTenant();

        if (filament()->getTenant()->getAttribute('is_admin') !== true) {
            return false;
        }

        if (auth()->user()->role === 'admin' || auth()->user()->role === 'super' || auth()->user()->role === 'manager') {
            return true;
        }

        return false;

    }

    public static function getNavigationBadge(): ?string
    {
        if (! auth()->check()) {
            return null;
        }

        return (string) self::getEloquentQuery()->count();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListCampaigns::route('/'),
            'create' => CreateCampaign::route('/create'),
            'edit' => EditCampaign::route('/{record}/edit'),
        ];
    }
}
