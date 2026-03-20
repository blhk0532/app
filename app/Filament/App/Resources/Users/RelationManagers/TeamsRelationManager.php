<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Users\RelationManagers;

use App\Models\User;
use Filament\Actions\AttachAction;
use Filament\Actions\DetachAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

/**
 * @property User $ownerRecord
 */
class TeamsRelationManager extends RelationManager
{
    protected static string $relationship = 'teams';

    // Related resource is intentionally null for the App panel to avoid
    // generating cross-panel routes (e.g. filament.app.resources.teams.view)
    protected static ?string $relatedResource = null;

    public function table(Table $table): Table
    {
        return $table
            ->headerActions([
                AttachAction::make()
                    ->recordSelectOptionsQuery(fn (Builder $query) => $query->where('teams.user_id', '!=', $this->ownerRecord->id))
                    ->preloadRecordSelect(),
            ])
            ->recordActions([
                DetachAction::make(),
            ]);
    }
}
