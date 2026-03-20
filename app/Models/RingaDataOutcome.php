<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
class RingaDataOutcome extends Model
{
    use HasFactory;

    protected $fillable = [
        'ringa_data_id',
        'user_id',
        'coutcome',
    ];

    public function getFilamentAvatarUrl(): ?string
    {
        return auth()->user()?->getFilamentAvatarUrl();
    }

    public function ringaData(): BelongsTo
    {
        return $this->belongsTo(RingaData::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
