<?php

declare(strict_types=1);

namespace App\Models\Booking;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $id
 * @property string $name
 * @property string|null $code
 * @property string|null $address
 * @property string|null $city
 * @property string|null $postal_code
 * @property string $country
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $description
 * @property bool $is_active
 * @property array<array-key, mixed>|null $settings
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property CarbonImmutable|null $deleted_at
 * @property-read Collection<int, Booking> $bookings
 * @property-read int|null $bookings_count
 * @property-read Collection<int, BookingSchedule> $schedules
 * @property-read int|null $schedules_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereSettings($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation withTrashed(bool $withTrashed = true)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingLocation withoutTrashed()
 *
 * @mixin \Eloquent
 */
class BookingLocation extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'booking_locations';

    protected $fillable = [
        'name',
        'code',
        'address',
        'city',
        'postal_code',
        'country',
        'phone',
        'email',
        'description',
        'is_active',
        'settings',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'settings' => 'array',
    ];

    /** @return HasMany<BookingSchedule, $this> */
    public function schedules(): HasMany
    {
        return $this->hasMany(BookingSchedule::class, 'booking_location_id');
    }

    /** @return HasMany<Booking, $this> */
    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class, 'booking_location_id');
    }
}
