<?php

declare(strict_types=1);

use Cachet\Filament\Resources\ApiKeys\ApiKeyResource;
use Cachet\Filament\Resources\ComponentGroups\ComponentGroupResource;
use Cachet\Filament\Resources\Components\ComponentResource;
use Cachet\Filament\Resources\Incidents\IncidentResource;
use Cachet\Filament\Resources\IncidentTemplates\IncidentTemplateResource;
use Cachet\Filament\Resources\Metrics\MetricResource;
use Cachet\Filament\Resources\Schedules\ScheduleResource;
use Cachet\Filament\Resources\Subscribers\SubscriberResource;
use Cachet\Filament\Resources\Users\UserResource;
use Cachet\Filament\Resources\WebhookSubscriptions\WebhookSubscriptionResource;

it('does not scope cachet resources to filament tenants', function (string $resourceClass): void {
    expect($resourceClass::isScopedToTenant())->toBeFalse();
})->with([
    ApiKeyResource::class,
    ComponentGroupResource::class,
    ComponentResource::class,
    IncidentResource::class,
    IncidentTemplateResource::class,
    MetricResource::class,
    ScheduleResource::class,
    SubscriberResource::class,
    UserResource::class,
    WebhookSubscriptionResource::class,
]);
