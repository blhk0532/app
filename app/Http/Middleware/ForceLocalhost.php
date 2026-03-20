<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ForceLocalhost
{
    /**
     * Redirect 127.0.0.1 requests to localhost to keep cookie domain consistent.
     *
     * @param  Closure(Request): Response  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->getHost() === '127.0.0.1') {
            // Don't force-redirect asset or API requests — only HTML page views.
            if ($request->is('build/*') || $request->is('storage/*') || $request->is('vendor/*') || $request->is('livewire/*')) {
                return $next($request);
            }

            // Only redirect browser navigation requests that accept HTML and are GETs.
            $accept = $request->header('Accept', '');
            if ($request->getMethod() !== 'GET' || ! str_contains($accept, 'text/html')) {
                return $next($request);
            }

            $scheme = $request->getScheme();
            $port = $request->getPort();
            $portPart = in_array($port, [80, 443], true) ? '' : ':'.$port;
            $url = $scheme.'://localhost'.$portPart.$request->getRequestUri();

            return new RedirectResponse($url, 301);
        }

        return $next($request);
    }
}
