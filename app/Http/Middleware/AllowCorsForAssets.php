<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AllowCorsForAssets
{
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->getMethod() === 'OPTIONS') {
            $response = response('', 200);
        } else {
            $response = $next($request);
        }

        if ($request->is('build/*') || $request->is('storage/*') || $request->is('storage/attachments/*')) {
            // Do not set CORS headers here — use Laravel's CORS middleware/config
            // to avoid duplicate Access-Control-Allow-Origin responses.
        }

        return $response;
    }
}
