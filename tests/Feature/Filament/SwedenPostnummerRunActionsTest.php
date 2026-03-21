<?php

declare(strict_types=1);

use App\Filament\Resources\SwedenPostnummers\Widgets\MapPickerWidget;
use App\Jobs\RunRatsitHittaScriptJob;
use App\Models\SwedenPostnummer;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;

use function Pest\Livewire\livewire;

uses(RefreshDatabase::class);

it('queues ratsit_hitta and sets queue flag when run record action is used', function (): void {
    Queue::fake();

    $user = User::factory()->create();
    $this->actingAs($user);

    $record = SwedenPostnummer::query()->create([
        'post_nummer' => '111 22',
        'post_ort' => 'Stockholm',
        'kommun' => 'Stockholm',
        'lan' => 'Stockholms län',
        'personer' => 10,
        'personer_merinfo_queue' => 0,
    ]);

    livewire(MapPickerWidget::class)
        ->callTableAction('run', $record)
        ->assertHasNoTableActionErrors();

    expect($record->fresh()->personer_merinfo_queue)->toBe(1);

    Queue::assertPushed(RunRatsitHittaScriptJob::class, function (RunRatsitHittaScriptJob $job) use ($record): bool {
        return $job->postNummer === $record->post_nummer
            && $job->queue === 'ratsit-hitta';
    });
});

it('queues ratsit_hitta and sets queue flag for selected records when bulk action is used', function (): void {
    Queue::fake();

    $user = User::factory()->create();
    $this->actingAs($user);

    $first = SwedenPostnummer::query()->create([
        'post_nummer' => '333 44',
        'post_ort' => 'Malmö',
        'kommun' => 'Malmö',
        'lan' => 'Skåne län',
        'personer' => 5,
        'personer_merinfo_queue' => 0,
    ]);

    $second = SwedenPostnummer::query()->create([
        'post_nummer' => '555 66',
        'post_ort' => 'Lund',
        'kommun' => 'Lund',
        'lan' => 'Skåne län',
        'personer' => 8,
        'personer_merinfo_queue' => 0,
    ]);

    livewire(MapPickerWidget::class)
        ->callTableBulkAction('runRatsitHitta', [$first, $second])
        ->assertHasNoTableBulkActionErrors();

    expect($first->fresh()->personer_merinfo_queue)->toBe(1)
        ->and($second->fresh()->personer_merinfo_queue)->toBe(1);

    Queue::assertPushed(RunRatsitHittaScriptJob::class, 2);
    Queue::assertPushed(RunRatsitHittaScriptJob::class, function (RunRatsitHittaScriptJob $job) use ($first): bool {
        return $job->postNummer === $first->post_nummer
            && $job->queue === 'ratsit-hitta';
    });
    Queue::assertPushed(RunRatsitHittaScriptJob::class, function (RunRatsitHittaScriptJob $job) use ($second): bool {
        return $job->postNummer === $second->post_nummer
            && $job->queue === 'ratsit-hitta';
    });
});
