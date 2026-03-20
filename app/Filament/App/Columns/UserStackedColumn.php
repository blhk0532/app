<?php

namespace App\Filament\App\Columns;

use Filament\Tables\Columns\ImageColumn;
use Illuminate\Support\Collection;

class UserStackedColumn extends ImageColumn
{
    protected function setUp(): void
    {
        parent::setUp();

        $this
            ->circular()
            ->stacked()
            ->checkFileExistence(false);

        $this
            ->imageHeight(24)
            ->ring(1)
            ->tooltip(fn ($state) => is_array($state) ? implode(', ', array_filter(array_map(fn ($u) => $u?->name, $state))) : ($state?->name ?? null));
    }

    public function getImageUrl($userData = null): ?string
    {
        if (! $userData) {
            return null;
        }

        $state = $this->getState();

        if ($state instanceof Collection) {
            $user = $state->firstWhere('id', $userData->id);
        } elseif (is_array($state)) {
            $user = collect($state)->firstWhere('id', $userData->id);
        } else {
            $user = $state;
        }

        if (! $user) {
            return null;
        }

        if (is_object($user) && method_exists($user, 'getKey')) {
            return filament()->getUserAvatarUrl($user);
        }

        return null;
    }
}
