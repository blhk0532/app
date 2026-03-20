<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Campaign extends Model
{
    protected $fillable = [
        'luid',
        'title',
        'location',
        'start_at',
        'end_at',
        'team_id',
    ];

    protected $casts = [
        'start_at' => 'datetime',
        'end_at' => 'datetime',
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    protected static function booted(): void
    {
        static::creating(function (self $model) {
            if (empty($model->luid)) {
                $model->luid = (string) Str::uuid();
            }
        });
    }
}
