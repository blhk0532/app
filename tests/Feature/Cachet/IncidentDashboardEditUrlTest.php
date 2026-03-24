<?php

declare(strict_types=1);

use App\Models\Team;
use App\Models\User;
use Cachet\Models\Incident;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

use function Pest\Laravel\actingAs;

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

it('includes the authenticated users current tenant in cachet incident edit urls', function (): void {
    $user = User::factory()->create();

    $team = Team::query()->create([
        'ulid' => (string) Str::ulid(),
        'user_id' => $user->id,
        'name' => 'Cachet Team',
        'slug' => 'cachet-team',
    ]);

    $user->forceFill([
        'current_team_id' => $team->id,
    ])->save();

    $incident = Incident::factory()->create();

    actingAs($user);

    expect($incident->filamentDashboardEditUrl())
        ->toContain("/status/dashboard/{$team->slug}/incidents/{$incident->id}/edit");
});
