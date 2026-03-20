<?php

use Livewire\Livewire;
use Tests\TestCase;

uses(TestCase::class);

test('filament edit profile components are registered for livewire requests', function () {
    expect(Livewire::exists('edit_profile_form'))->toBeTrue()
        ->and(Livewire::exists('edit_password_form'))->toBeTrue()
        ->and(Livewire::exists('delete_account_form'))->toBeTrue()
        ->and(Livewire::exists('multi_factor_authentication'))->toBeTrue()
        ->and(Livewire::exists('sanctum_tokens'))->toBeTrue()
        ->and(Livewire::exists('browser_sessions_form'))->toBeTrue();
});
