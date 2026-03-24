<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

beforeEach(function (): void {
    if (! Schema::hasTable('settings')) {
        Schema::create('settings', function (Blueprint $table): void {
            $table->id();
            $table->string('group');
            $table->string('name');
            $table->text('payload');
            $table->timestamps();

            $table->unique(['group', 'name']);
        });
    }
});

it('renders the cachet filament status overview page', function (): void {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->get(route('filament.cachet.pages.status-page'))
        ->assertOk()
        ->assertSeeText('Status Page');
});
