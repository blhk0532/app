<?php

declare(strict_types=1);

namespace App\Delius\Patches\UserField;

use App\Models\User;
use DateInterval;
use Illuminate\Support\Facades\Cache;

trait HasState
{
    const CACHE_KEY_PREFIX = 'user_field_state_';

    public function getState(): mixed
    {
        $state = parent::getState();

        $userModel = config('user-field.user_model.class', User::class);
        $userModelIdField = config('user-field.user_model.fields.id', 'id');

        if ($state instanceof $userModel) {
            return $state;
        }

        if (! $state) {
            return null;
        }

        $cacheKey = self::CACHE_KEY_PREFIX.$userModel.'_'.$state;
        $cached = Cache::get($cacheKey);

        // New format: only store the user id in cache to avoid serializing Eloquent objects.
        if (is_scalar($cached) && (string) $cached !== '') {
            return $userModel::query()->where($userModelIdField, $cached)->first();
        }

        // Heal old cache values that may contain serialized/incomplete model objects.
        if (is_object($cached)) {
            Cache::forget($cacheKey);
        }

        $user = $userModel::query()->where($userModelIdField, $state)->first();

        Cache::put(
            $cacheKey,
            $user?->getAttribute($userModelIdField),
            new DateInterval('PT5S')
        );

        return $user;
    }
}
