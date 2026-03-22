<?php

declare(strict_types=1);

test('spa home route returns an inertia response', function (): void {
    $response = $this->get('/spa');

    $response->assertOk();
    $response->assertSee('id="app"', escape: false);
});

test('root route still redirects to filament app', function (): void {
    $response = $this->get('/');

    $response->assertRedirect('/app');
});
