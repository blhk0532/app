<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
// use Filament\Facades\Filament;
// use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

final class ApplyTenantScopes
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Author::addGlobalScope(
        //    fn(Builder $query) => $query->whereBelongsTo(Filament::getTenant()),
        // );

        return $next($request);
    }
}
