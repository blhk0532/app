<?php

declare(strict_types=1);

namespace App\Support\Filament;

use App\Models\Team;
use App\Models\User;
use Filament\Facades\Filament;
use Filament\Panel;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

final class AppPanelRedirect
{
    public static function urlFor(?Authenticatable $user): string
    {
        $panel = Filament::getPanel('app') ?? Filament::getCurrentOrDefaultPanel();

        if (! $panel) {
            return url('/');
        }

        $tenant = self::resolveTenant($user, $panel);

        if ($tenant) {
            $tenantUrl = $panel->getUrl($tenant);

            if (filled($tenantUrl)) {
                return $tenantUrl;
            }
        }

        if ($panel->hasTenantRegistration()) {
            return $panel->getTenantRegistrationUrl();
        }

        return url('/');
    }

    private static function resolveTenant(?Authenticatable $user, Panel $panel): ?Model
    {
        if (! $user) {
            return null;
        }

        if (method_exists($user, 'getDefaultTenant') && is_callable([$user, 'getDefaultTenant'])) {
            /** @var mixed $defaultTenant */
            $defaultTenant = $user->getDefaultTenant($panel); // @phpstan-ignore-line

            if ($defaultTenant instanceof Model) {
                self::ensureTenantSlug($defaultTenant);

                return $defaultTenant;
            }
        }

        if (! method_exists($user, 'getTenants') || ! is_callable([$user, 'getTenants'])) {
            return null;
        }

        /** @var mixed $tenants */
        $tenants = $user->getTenants($panel); // @phpstan-ignore-line

        $tenantCollection = $tenants instanceof Collection ? $tenants : collect($tenants);

        /** @var mixed $tenant */
        $tenant = $tenantCollection
            ->first(fn (mixed $candidate): bool => $candidate instanceof Model && filled($candidate->getAttribute('slug')))
            ?? $tenantCollection->first();

        if ($tenant instanceof Model) {
            self::ensureTenantSlug($tenant);
        }

        if (! $tenant && $user instanceof User) {
            $tenant = self::createFallbackTenant($user);
        }

        return $tenant instanceof Model ? $tenant : null;
    }

    private static function createFallbackTenant(User $user): ?Team
    {
        $name = trim((string) $user->name);
        $baseName = $name !== '' ? $name : 'User';
        $teamName = $baseName."'s Team";

        $team = Team::query()->create([
            'user_id' => $user->id,
            'name' => $teamName,
            'slug' => self::generateUniqueTeamSlug($teamName),
            'personal_team' => true,
        ]);

        $team->users()->syncWithoutDetaching([$user->id]);

        $user->forceFill([
            'current_team_id' => $team->id,
        ])->saveQuietly();

        return $team;
    }

    private static function generateUniqueTeamSlug(string $teamName): string
    {
        $baseSlug = Str::slug($teamName);
        $slug = $baseSlug !== '' ? $baseSlug : 'team';
        $suffix = 1;

        while (Team::query()->where('slug', $slug)->exists()) {
            $slug = $baseSlug !== '' ? "{$baseSlug}-{$suffix}" : "team-{$suffix}";
            $suffix++;
        }

        return $slug;
    }

    private static function ensureTenantSlug(Model $tenant): void
    {
        if (filled($tenant->getAttribute('slug'))) {
            return;
        }

        $name = (string) ($tenant->getAttribute('name') ?? 'team');
        $baseSlug = Str::slug($name);
        $tenant->setAttribute('slug', $baseSlug !== '' ? $baseSlug : 'team-'.$tenant->getKey());
        $tenant->saveQuietly();
    }
}
