<?php

declare(strict_types=1);

namespace App\Models;

use Adultdate\FilamentBooking\Enums\BookingStatus;
use App\Models\Booking\Booking as FilamentBooking;
use App\Models\Booking\BookingItem;
use App\Models\Booking\BookingLocation;
use App\Models\Booking\Client;
use App\Models\Booking\OrderAddress;
use App\Models\Booking\Service;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Collection;

/**
 * @property int $id
 * @property int $sort
 * @property string $number
 * @property string|null $title
 * @property string|null $description
 * @property string|null $category
 * @property BookingLocation|null $location
 * @property string|null $color
 * @property string|null $google_event_id
 * @property numeric|null $total_price
 * @property BookingStatus|null $status
 * @property string $currency
 * @property int|null $booking_location_id
 * @property int|null $booking_calendar_id
 * @property numeric|null $shipping_price
 * @property string|null $shipping_method
 * @property string|null $notes
 * @property string|null $schedulable_type
 * @property int|null $schedulable_id
 * @property string|null $service_note
 * @property bool $is_active
 * @property CarbonImmutable|null $notified_at
 * @property CarbonImmutable|null $confirmed_at
 * @property CarbonImmutable|null $completed_at
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property CarbonImmutable|null $deleted_at
 * @property int|null $service_id
 * @property int|null $service_user_id
 * @property int|null $booking_user_id
 * @property int|null $booking_client_id
 * @property CarbonImmutable|null $service_date
 * @property string|null $start_time
 * @property string|null $end_time
 * @property CarbonImmutable|null $starts_at
 * @property CarbonImmutable|null $ends_at
 * @property int|null $admin_id
 * @property string $state
 * @property mixed $0
 * @property mixed $1
 * @property-read OrderAddress|null $address
 * @property-read Admin|null $admin
 * @property-read BookingCalendar|null $bookingCalendar
 * @property-read BookingLocation|null $bookingLocation
 * @property-read User|null $bookingUser
 * @property-read Client|null $client
 * @property-read Collection<int, BookingItem> $items
 * @property-read int|null $items_count
 * @property-read Service|null $service
 * @property-read User|null $serviceUser
 *
 * @method static \Database\Factories\Booking\BookingFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereAdminId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereBookingCalendarId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereBookingClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereBookingLocationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereBookingUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereCompletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereConfirmedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereCurrency($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereEndTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereEndsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereGoogleEventId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereNotifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereSchedulableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereSchedulableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereServiceDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereServiceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereServiceNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereServiceUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereShippingMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereShippingPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereSort($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereStartTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereStartsAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereTotalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking withTrashed(bool $withTrashed = true)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Booking withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Booking extends FilamentBooking implements Commentable
{
    use HasComments;

    protected $table = 'booking_bookings';

    protected function casts(): array
    {
        return [
            'status' => BookingStatus::class,
        ];
    }

    protected $fillable = [
        'number',
        'google_event_id',
        'service_id',
        'service_user_id',
        'booking_user_id',
        'admin_id',
        'booking_client_id',
        'booking_location_id',
        'booking_calendar_id',
        'total_price',
        'currency',
        'status',
        'shipping_price',
        'shipping_method',
        'service_date',
        'start_time',
        'end_time',
        'starts_at',
        'ends_at',
        'notes',
        'service_note',
        'is_active',
        'notified_at',
        'confirmed_at',
        'completed_at',
        'schedulable_type',
        'schedulable_id',
        'title',
        'description',
        'category',
        'location',
        'color',
        'personnummer',
        'fastighetsbeteckning',
    ];
}
