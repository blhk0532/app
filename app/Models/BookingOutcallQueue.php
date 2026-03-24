<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string|null $luid
 * @property string|null $name
 * @property string|null $address
 * @property string|null $street
 * @property string|null $city
 * @property string|null $maps
 * @property int|null $age
 * @property string|null $sex
 * @property CarbonImmutable|null $dob
 * @property string|null $phone
 * @property string|null $status
 * @property string|null $type
 * @property string|null $notes
 * @property string|null $result
 * @property int $attempts
 * @property int|null $user_id
 * @property int|null $service_user_id
 * @property int|null $booking_user_id
 * @property CarbonImmutable|null $start_time
 * @property CarbonImmutable|null $end_time
 * @property bool $is_active
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read User|null $bookingUser
 * @property-read User|null $serviceUser
 * @property-read User|null $user
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereAge($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereAttempts($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereBookingUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereDob($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereEndTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereLuid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereMaps($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereResult($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereServiceUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereSex($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereStartTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereStreet($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingOutcallQueue whereUserId($value)
 *
 * @mixin \Eloquent
 */
class BookingOutcallQueue extends Model
{
    use HasFactory;

    protected $table = 'booking_outcall_queues';

    protected $fillable = [
        'luid',
        'name',
        'address',
        'street',
        'city',
        'maps',
        'age',
        'sex',
        'dob',
        'phone',
        'status',
        'type',
        'notes',
        'result',
        'attempts',
        'user_id',
        'service_user_id',
        'booking_user_id',
        'start_time',
        'end_time',
        'is_active',
    ];

    protected $casts = [
        'dob' => 'date',
        'start_time' => 'datetime',
        'end_time' => 'datetime',
        'is_active' => 'boolean',
        'attempts' => 'integer',
        'age' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function serviceUser()
    {
        return $this->belongsTo(User::class, 'service_user_id');
    }

    public function bookingUser()
    {
        return $this->belongsTo(User::class, 'booking_user_id');
    }
}
