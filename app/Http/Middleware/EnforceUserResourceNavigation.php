<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Support\Filament\AppPanelRedirect;
use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnforceUserResourceNavigation
{
    /**
     * If the current user / tenant do not meet the same conditions as
     * UserResource::shouldRegisterNavigation(), redirect them away.
     */
    public function handle(Request $request, Closure $next)
    {
        // Only enforce this middleware for Users resource pages — do not
        // block the rest of the app panel routes. Adjust patterns as needed.
        if (! $request->is('nds/app/resources/users') && ! $request->is('nds/app/resources/users/*')) {
            return $next($request);
        }

        $tenant = filament()->getTenant();
        $user = Auth::user();

        // If we have a tenant and it's not an admin tenant, block access
        if ($tenant && $tenant->getAttribute('is_admin') !== true) {
            return $this->redirectToPanelHome();
        }

        $role = $user->role ?? null;
        if (! in_array($role, ['admin', 'super', 'manager'], true)) {
            return $this->redirectToPanelHome();
        }

        return $next($request);
    }

    protected function redirectToPanelHome(): RedirectResponse
    {
        return redirect()->to(AppPanelRedirect::urlFor(Auth::user()));
    }
}
