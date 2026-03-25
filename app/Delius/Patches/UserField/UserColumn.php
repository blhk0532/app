<?php

namespace App\Delius\Patches\UserField;

use Closure;
use Deldius\UserField\Concerns\HasAvatar;
use Deldius\UserField\Concerns\HasEmptyState;
use Deldius\UserField\Concerns\HasSize;
use Deldius\UserField\Concerns\HasUserFields;
use Filament\Tables\Columns\Column;

trait HasActiveState
{
    protected null|bool|Closure $isActiveState = null;

    protected null|bool|Closure $showActiveState = null;

    public function showActiveState(null|bool|Closure $showActiveState = true): static
    {
        $this->showActiveState = $showActiveState;

        return $this;
    }

    public function getShowActiveState(): bool
    {
        if (! is_null($this->showActiveState)) {
            return $this->evaluate($this->showActiveState);
        }

        return config('user-field.active_state.show', false);
    }

    public function isActiveState(null|bool|Closure $isActiveState): static
    {
        $this->isActiveState = $isActiveState;

        return $this;
    }

    public function getIsActiveState(): ?bool
    {
        if (! is_null($this->isActiveState)) {
            return $this->evaluate($this->isActiveState);
        }

        $isActiveField = config('user-field.active_state.field', 'is_active');
        $user = $this->getState();

        // If state is an array (cached as array) or model, try to return field.
        if (is_array($user)) {
            return $user[$isActiveField] ?? null;
        }

        // Handle incomplete/unserialised objects stored in cache.
        if (is_object($user) && get_class($user) === '__PHP_Incomplete_Class') {
            $data = (array) $user;

            // Look for the internal attributes array key (contains "attributes").
            foreach ($data as $key => $value) {
                if (str_ends_with($key, "attributes") || str_contains($key, "attributes")) {
                    if (is_array($value)) {
                        return $value[$isActiveField] ?? null;
                    }
                }
            }

            return null;
        }

        // Normal object (Eloquent model) — access property safely.
        if (is_object($user)) {
            return $user->{$isActiveField} ?? null;
        }

        return null;
    }
}

class UserColumn extends Column
{
    use HasActiveState;
    use HasAvatar;
    use HasEmptyState;
    use HasSize;
    use HasState;
    use HasUserFields;

    protected string $view = 'filament-user-field::user-column';
}
