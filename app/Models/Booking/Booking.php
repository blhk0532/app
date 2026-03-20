<?php

declare(strict_types=1);

namespace App\Models\Booking;

use Adultdate\FilamentBooking\Enums\BookingStatus;
use App\Models\Admin;
use App\Models\BookingCalendar;
use App\Models\User;
use Carbon\CarbonImmutable;
use Database\Factories\Booking\BookingFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;
use Kirschbaum\Commentions\Contracts\Commentable;
use Kirschbaum\Commentions\HasComments;

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
class Booking extends Model implements Commentable
{
    use HasComments;

    /** @use HasFactory<BookingFactory> */
    use HasFactory;

    use SoftDeletes;

    protected $table = 'booking_bookings';

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
        'personnummer',
        'fastighetsbeteckning',
    ];

    protected $casts = [
        'status' => BookingStatus::class,
        'is_active' => 'boolean',
        'notified_at' => 'datetime',
        'confirmed_at' => 'datetime',
        'completed_at' => 'datetime',
        'service_date' => 'date',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
        'start_time',
        'end_time',
    ];

    protected $attributes = [
        'currency' => 'SEK',
        'is_active' => true,
    ];

    /**
     * Get the admin who created the booking (if any).
     */
    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }

    /** @return MorphOne<OrderAddress, $this> */
    public function address(): MorphOne
    {
        return $this->morphOne(OrderAddress::class, 'booking_addressable');
    }

    /** @return BelongsTo<Client, $this> */
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'booking_client_id');
    }

    /** @return BelongsTo<Service, $this> */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    /** @return BelongsTo<User, $this> */
    public function serviceUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'service_user_id');
    }

    /** @return BelongsTo<User, $this> */
    public function bookingUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'booking_user_id');
    }

    /** @return BelongsTo<BookingLocation, $this> */
    public function bookingLocation(): BelongsTo
    {
        return $this->belongsTo(BookingLocation::class, 'booking_location_id');
    }

    /** Alias for bookingLocation to satisfy widgets expecting `location` */
    public function location(): BelongsTo
    {
        return $this->bookingLocation();
    }

    /** @return BelongsTo<BookingCalendar, $this> */
    public function bookingCalendar(): BelongsTo
    {
        return $this->belongsTo(BookingCalendar::class, 'booking_calendar_id');
    }

    /** @return HasMany<BookingItem, $this> */
    public function items(): HasMany
    {
        return $this->hasMany(BookingItem::class, 'booking_booking_id');
    }

    /**
     * Calculate and return the total price from booking items
     */
    public function calculateTotalPrice(): float
    {
        return $this->items->sum(function ($item) {
            return $item->qty * $item->unit_price;
        });
    }

    /**
     * Update the total price based on current items
     */
    public function updateTotalPrice(): void
    {
        $this->load('items');
        $this->update(['total_price' => $this->calculateTotalPrice()]);
    }

    /**
     * Convert booking to calendar event object
     */
    public function toCalendarEvent(): array
    {
        $start = null;
        $end = null;

        if ($this->service_date && $this->start_time) {
            $start = $this->service_date->toDateString().'T'.
                str($this->start_time)->padRight(8, ':00');
        } elseif ($this->starts_at) {
            $start = $this->starts_at->toIso8601String();
        }

        if ($this->service_date && $this->end_time) {
            $end = $this->service_date->toDateString().'T'.
                str($this->end_time)->padRight(8, ':00');
        } elseif ($this->ends_at) {
            $end = $this->ends_at->toIso8601String();
        }
        $timeStamp = time();
        $dateStamp = date('m-d-Y', $timeStamp);
        $bookingNumber = 'BK-'.strrev((string) $timeStamp).'-NDS-'.$dateStamp.'-'.$timeStamp;
        $baseTitle = ($this->client?->address ?? '').'  '.($this->client?->city ?? '');

        return [
            'id' => $this->id,
            'title' => $baseTitle,
            'start' => $start,
            'end' => $end,
            'type' => 'booking',
            'backgroundColor' => $this->status?->getColor() ?? '#3788d8',
            'borderColor' => $this->status?->getColor() ?? '#3788d8',
            'extendedProps' => [
                'key' => $this->id,  // Required: Record ID for event resolution
                'booking_id' => $this->id,
                'type' => 'booking',
                'number' => $bookingNumber,
                'client_name' => $this->client?->name,
                'client_address' => $this->client?->address,
                'client_city' => $this->client?->city,
                'service_date' => $this->service_date?->format('Y-m-d'),
                'service_name' => $this->service?->name,
                'service_user' => $this->serviceUser?->name,
                'booking_user' => $this->bookingUser?->name,
                'booking_user_id' => $this->bookingUser?->id,
                'location' => $this->bookingLocation?->name ?? $this->location,
                'displayLocation' => $this->bookingLocation?->name ?? $this->location,
                // Model FQCN used by calendar to select custom event content
                'model' => self::class,
                'status' => $this->status?->value,
                'total_price' => $this->total_price,
                'currency' => $this->currency,
                'notes' => $this->notes,
            ],
        ];
    }

    protected static function booted(): void
    {
        self::creating(function (Booking $booking): void {
            $user = Auth::user();
            if (! $booking->booking_user_id && $user && $user instanceof User) {
                $booking->booking_user_id = $user->id;
                logger('Booking::creating - Set booking_user_id from Auth::user()', [
                    'user_id' => $user->id,
                    'booking_id' => $booking->id ?? null,
                ]);
            } else {
                logger('Booking::creating - booking_user_id not set or user is not App\\Models\\User', [
                    'auth_user' => $user ? get_class($user) : null,
                    'booking_id' => $booking->id ?? null,
                ]);
            }
        });
    }

    protected static function newFactory()
    {
        return BookingFactory::new();
    }
}
