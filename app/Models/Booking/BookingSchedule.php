<?php

declare(strict_types=1);

namespace App\Models\Booking;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $booking_location_id
 * @property CarbonImmutable $date
 * @property string|null $start_time
 * @property string|null $end_time
 * @property bool $is_available
 * @property int $max_bookings
 * @property string|null $notes
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read BookingLocation $location
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereBookingLocationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereEndTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereIsAvailable($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereMaxBookings($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereStartTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingSchedule whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class BookingSchedule extends Model
{
    use HasFactory;

    protected $table = 'booking_schedules';

    protected $fillable = [
        'booking_location_id',
        'date',
        'start_time',
        'end_time',
        'is_available',
        'max_bookings',
        'notes',
    ];

    protected $casts = [
        'date' => 'date',
        'is_available' => 'boolean',
        'max_bookings' => 'integer',
    ];

    /** @return BelongsTo<BookingLocation, $this> */
    public function location(): BelongsTo
    {
        return $this->belongsTo(BookingLocation::class, 'booking_location_id');
    }

    /**
     * Get the number of bookings for this schedule
     */
    public function getBookingsCount(): int
    {
        return Booking::where('booking_location_id', $this->booking_location_id)
            ->where('service_date', $this->date)
            ->count();
    }

    /**
     * Check if the schedule has available slots
     */
    public function hasAvailableSlots(): bool
    {
        return $this->is_available && $this->getBookingsCount() < $this->max_bookings;
    }
}
