<?php

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Team;
use App\Models\User;
use App\Models\Company;

class OutgoingConfirmation extends Model
{
    protected $table = 'outgoing_confirmations';

    protected $fillable = [
        'phone',
        'email',
        'subject',
        'message',
        'table',
        'record_id',
        'user_id',
        'team_id',
        'company_id',
        'campaign_id',
        'service_id',
        'tekniker_id',
        'calendar_id',
        'type',
        'status',
        'is_active',
        'is_success',
    ];

    protected $casts = [
        'phone' => 'integer',
        'record_id' => 'integer',
        'user_id' => 'integer',
        'team_id' => 'integer',
        'company_id' => 'integer',
        'campaign_id' => 'integer',
        'service_id' => 'integer',
        'tekniker_id' => 'integer',
        'calendar_id' => 'integer',
        'is_active' => 'boolean',
        'is_success' => 'boolean',
    ];

    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'team_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
