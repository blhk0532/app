<?php

namespace App\Filament\Admin\Resources\WhatsappAgents;

use App\Filament\Admin\Resources\WhatsappAgents\Pages\CreateWhatsappAgent;
use App\Filament\Admin\Resources\WhatsappAgents\Pages\EditWhatsappAgent;
use App\Filament\Admin\Resources\WhatsappAgents\Pages\ListWhatsappAgents;
use App\Filament\Admin\Resources\WhatsappAgents\Schemas\WhatsappAgentForm;
use App\Filament\Admin\Resources\WhatsappAgents\Tables\WhatsappAgentsTable;
use App\Models\WhatsappAgent;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class WhatsappAgentResource extends Resource
{
    protected static ?string $model = WhatsappAgent::class;

    protected static ?string $tenantOwnershipRelationshipName = 'team';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return WhatsappAgentForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return WhatsappAgentsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function shouldRegisterNavigation(): bool
    {
        return false;
    }

    public static function getPages(): array
    {
        return [
            'index' => ListWhatsappAgents::route('/'),
            'create' => CreateWhatsappAgent::route('/create'),
            'edit' => EditWhatsappAgent::route('/{record}/edit'),
        ];
    }
}
