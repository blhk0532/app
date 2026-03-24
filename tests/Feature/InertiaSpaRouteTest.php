<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

test('guest spa auth routes render inertia pages', function (): void {
    /** @var TestCase $this */
    $this->get(route('login'))
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page->component('session/create'));

    $this->get(route('register'))
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page->component('user/create'));
});

test('authenticated spa routes render inertia pages', function (): void {
    /** @var TestCase $this */
    /** @var User&Authenticatable $user */
    $user = User::factory()->createOne();

    $this->actingAs($user)
        ->get(route('app'))
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page->component('app'));

    $this->actingAs($user)
        ->get(route('dashboard'))
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page->component('dashboard'));

    $this->actingAs($user)
        ->get(route('appearance.edit'))
        ->assertOk()
        ->assertInertia(fn (AssertableInertia $page) => $page->component('appearance/update'));
});
