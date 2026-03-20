<?php

declare(strict_types=1);

namespace App\Models\Booking;

use Adultdate\FilamentBooking\Contracts\Eventable;
use Adultdate\FilamentBooking\ValueObjects\CalendarEvent;
use App\Models\User;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;
use Kirschbaum\Commentions\Contracts\Commentable;
use Kirschbaum\Commentions\HasComments;

/**
 * @property int $id
 * @property CarbonImmutable $date
 * @property int $service_user_id
 * @property string|null $location
 * @property int|null $created_by
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property mixed $0
 * @property mixed $1
 * @property mixed $2
 * @property mixed $3
 * @property mixed $4
 * @property-read User|null $creator
 * @property mixed $service_date
 * @property-read User $serviceUser
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation whereCreatedBy($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation whereServiceUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|DailyLocation whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class DailyLocation extends Model implements Commentable, Eventable
{
    use HasComments;

    protected $table = 'booking_daily_locations';

    protected $fillable = [
        'date',
        'service_date',
        'service_user_id',
        'location',
        'created_by',
    ];

    protected $casts = [
        'date' => 'date',
        'service_user_id',
        'service_date',
        'location',
        'created_by',
        'id',
    ];

    public function serviceUser()
    {
        return $this->belongsTo(User::class, 'service_user_id');
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function setServiceDateAttribute($value)
    {
        $this->attributes['date'] = $value;
    }

    public function getServiceDateAttribute()
    {
        return $this->attributes['date'] ?? null;
    }

    public function toCalendarEvent(): CalendarEvent
    {
        $title = $this->location ?: ($this->serviceUser?->name ?? 'Location');

        return CalendarEvent::make($this)
            ->title($title)
            ->start($this->date instanceof CarbonImmutable ? $this->date->toDateString() : $this->date)
            ->allDay(true)
            ->backgroundColor('#ffffff')
            ->borderColor('#e5e7eb')
            ->textColor('#111827')
            ->extendedProps([
                'id' => $this->id,
                'is_location' => true,
                'type' => 'location',
                'daily_location_id' => $this->id,
                'service_user_id' => $this->service_user_id,
                'location' => $this->location,
                'serviceUser' => $this->serviceUser?->name,
                'displayLocation' => $this->location ?: ($this->serviceUser?->name ?? 'Location'),
            ]);
    }

    /**
     * Return the stored location value.
     */
    public function getLocation(): ?string
    {
        $title = $this->location ?: ($this->serviceUser?->name ?? 'Location');

        return $title;
    }
}
