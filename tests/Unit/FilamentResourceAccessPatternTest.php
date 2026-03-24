<?php

declare(strict_types=1);

use App\Http\Middleware\FilamentResourceAccess;

function invokePrivateMethod(object $target, string $method, mixed ...$args): mixed
{
    $reflectionMethod = new ReflectionMethod($target, $method);
    $reflectionMethod->setAccessible(true);

    return $reflectionMethod->invoke($target, ...$args);
}

test('wildcard resource pattern matches nested resource paths', function (): void {
    $middleware = new FilamentResourceAccess;

    $matched = invokePrivateMethod(
        $middleware,
        'matchesResourcePattern',
        '*/subscribers',
        'status/dashboard/administration/subscribers'
    );

    expect($matched)->toBeTrue();
});

test('regex resource pattern matches resource path', function (): void {
    $middleware = new FilamentResourceAccess;

    $matched = invokePrivateMethod(
        $middleware,
        'matchesResourcePattern',
        'regex:#^status/dashboard/administration/[a-z-]+$#',
        'status/dashboard/administration/subscribers'
    );

    expect($matched)->toBeTrue();
});

test('exact resource pattern requires an exact match', function (): void {
    $middleware = new FilamentResourceAccess;

    $matched = invokePrivateMethod(
        $middleware,
        'matchesResourcePattern',
        'status/dashboard/administration/subscribers',
        'status/dashboard/administration/subscribers'
    );

    $notMatched = invokePrivateMethod(
        $middleware,
        'matchesResourcePattern',
        'status/dashboard/administration/subscribers',
        'status/dashboard/administration/users'
    );

    expect($matched)->toBeTrue()
        ->and($notMatched)->toBeFalse();
});
