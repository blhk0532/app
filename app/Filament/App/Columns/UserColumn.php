<?php

namespace App\Filament\App\Columns;

use Filament\Tables\Columns\ImageColumn;

class UserColumn extends ImageColumn
{
    protected function setUp(): void
    {
        parent::setUp();

        $this
            ->circular()
            ->checkFileExistence(false);

        $this
            ->imageHeight(24)
            ->ring(1)
            ->tooltip(fn ($state) => is_object($state) ? ($state->name ?? null) : (is_array($state) ? ($state['name'] ?? null) : null));
    }

    public function getImageUrl($userData = null): ?string
    {
        if (! $userData) {
            return null;
        }

        $state = $this->getState();

        if (is_object($state)) {
            $user = $state;
        } elseif (is_array($state)) {
            $user = is_array($userData) ? (object) $userData : $userData;
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
