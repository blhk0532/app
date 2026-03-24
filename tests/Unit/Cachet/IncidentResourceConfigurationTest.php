<?php

declare(strict_types=1);

use Cachet\Models\Incident;

it('uses the direct component relationship for the incident table column', function (): void {
    $contents = file_get_contents(dirname(__DIR__, 3).'/plugins/cachethq/core/src/Filament/Resources/Incidents/IncidentResource.php');

    expect($contents)
        ->toContain("TextColumn::make('component.name')");
});

it('places component selection before occurred_at in the incident form', function (): void {
    $contents = file_get_contents(dirname(__DIR__, 3).'/plugins/cachethq/core/src/Filament/Resources/Incidents/IncidentResource.php');

    $componentSelectPosition = strpos($contents, "Select::make('component_id')");
    $occurredAtPosition = strpos($contents, "DateTimePicker::make('occurred_at')");

    expect($contents)->toContain("->relationship('component', 'name')");
    expect($componentSelectPosition)->not->toBeFalse();
    expect($occurredAtPosition)->not->toBeFalse();
    expect($componentSelectPosition)->toBeLessThan($occurredAtPosition);
});

it('defaults incident team and user on the form', function (): void {
    $contents = file_get_contents(dirname(__DIR__, 3).'/plugins/cachethq/core/src/Filament/Resources/Incidents/IncidentResource.php');

    expect($contents)->toContain("Select::make('team_id')");
    expect($contents)->toContain('->default(fn (): ?int => filament()->getTenant()?->getKey() ?? Auth::user()?->current_team_id)');
    expect($contents)->toContain('->nullable()');
    expect($contents)->toContain("Select::make('user_id')");
    expect($contents)->toContain('->options(function (): array {');
    expect($contents)->toContain("->pluck('name', 'id')");
    expect($contents)->toContain('->getOptionLabelFromRecordUsing(fn ($record) => $record->name)');
    expect($contents)->toContain('->default(fn (): ?int => Auth::id())');
});

it('defines the component relationship on incident model', function (): void {
    $method = new ReflectionMethod(Incident::class, 'component');

    expect(method_exists(Incident::class, 'component'))->toBeTrue();
    expect($method->getReturnType()?->getName())->toBe('Illuminate\\Database\\Eloquent\\Relations\\BelongsTo');
});
