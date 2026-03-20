<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Users\RelationManagers;

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

    // No related resource registered for the App panel — prevent missing-route errors
    protected static ?string $relatedResource = null;

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
