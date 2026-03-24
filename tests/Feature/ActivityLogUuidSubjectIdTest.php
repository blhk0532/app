<?php

declare(strict_types=1);

use Illuminate\Support\Str;
use Spatie\Activitylog\Models\Activity;

test('activity log stores uuid subject ids without truncation', function (): void {
    $subjectId = (string) Str::uuid();

    Activity::query()->create([
        'log_name' => 'Resource',
        'description' => 'Conversation Created by admin',
        'subject_type' => 'AdultDate\\FilamentWirechat\\Models\\Conversation',
        'subject_id' => $subjectId,
        'event' => 'Created',
        'properties' => ['attributes' => ['id' => $subjectId, 'type' => 'private']],
    ]);

    $activity = Activity::query()->latest('id')->firstOrFail();

    expect((string) $activity->subject_id)->toBe($subjectId);
});
