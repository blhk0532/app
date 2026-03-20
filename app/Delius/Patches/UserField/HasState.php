<?php

namespace App\Delius\Patches\UserField;

use App\Models\User;
use Illuminate\Support\Facades\Cache;

trait HasState
{
    const CACHE_KEY_PREFIX = 'user_field_state_';

    public function getState(): mixed
    {
        $state = parent::getState();

        $userModel = config('user-field.user_model.class', User::class);

        if ($state instanceof $userModel) {
            return $state;
        }

        if ($state) {
            $cacheKey = self::CACHE_KEY_PREFIX.$userModel.'_'.$state;

            $cached = Cache::get($cacheKey);

            if ($cached !== null) {
                class_exists($userModel);

                return $cached;
            }

            $user = $userModel::where(config('user-field.user_model.fields.id', 'id'), $state)->first();

            Cache::put($cacheKey, $user, new \DateInterval('PT5S'));

            return $user;
        }

        return null;
    }
}
