<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\Activitylog\Models\Activity as SpatieActivity;

class Activity extends SpatieActivity
{
    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'tenant_id');
    }
}
