<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $luid
 * @property string $name
 * @property string|null $address
 * @property string|null $street
 * @property string|null $city
 * @property string|null $state
 * @property string|null $zip
 * @property string|null $country
 * @property string $phone
 * @property string|null $email
 * @property CarbonImmutable|null $dob
 * @property int|null $age
 * @property string|null $sex
 * @property string $status
 * @property bool $is_active
 * @property int|null $assigned_to
 * @property int $attempt_count
 * @property CarbonImmutable|null $last_contacted_at
 * @property string|null $notes
 * @property array<array-key, mixed>|null $metadata
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read User|null $assignedTo
 * @property-read Collection<int, BookingCallStat> $callStats
 * @property-read int|null $call_stats_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereAge($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereAssignedTo($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereAttemptCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereDob($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereLastContactedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereLuid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereMetadata($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereSex($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereStreet($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingDataLead whereZip($value)
 *
 * @mixin \Eloquent
 */
class BookingDataLead extends Model
{
    use HasFactory;

    protected $fillable = [
        'luid',
        'name',
        'address',
        'street',
        'city',
        'state',
        'zip',
        'country',
        'phone',
        'email',
        'dob',
        'age',
        'sex',
        'status',
        'is_active',
        'assigned_to',
        'attempt_count',
        'last_contacted_at',
        'notes',
        'metadata',
    ];

    public function assignedTo(): BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function callStats(): HasMany
    {
        return $this->hasMany(BookingCallStat::class, 'lead_id');
    }

    protected function casts(): array
    {
        return [
            'dob' => 'date',
            'age' => 'integer',
            'is_active' => 'boolean',
            'attempt_count' => 'integer',
            'last_contacted_at' => 'datetime',
            'metadata' => 'array',
        ];
    }
}
