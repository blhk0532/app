<?php

declare(strict_types=1);

namespace App\Filament\User\Resources\Users\RelationManagers;

use App\Filament\User\Resources\Teams\TeamResource;
use App\Models\User;
use Filament\Actions\CreateAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Table;

/**
 * @property User $ownerRecord
 */
class OwnedTeamsRelationManager extends RelationManager
{
    protected static string $relationship = 'ownedTeams';

    protected static ?string $relatedResource = TeamResource::class;

    public static function getRelationshipTitle(): string
    {
        return __('Owner Teams');
    }

    public function table(Table $table): Table
    {
        return $table
            ->headerActions([
                CreateAction::make(),
            ]);
    }
}
