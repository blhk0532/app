<?php

declare(strict_types=1);

namespace App\Models\Booking;

use Carbon\CarbonImmutable;
use Database\Factories\Booking\OrderAddressFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * @property int $id
 * @property string $booking_addressable_type
 * @property int $booking_addressable_id
 * @property string|null $country
 * @property string|null $street
 * @property string|null $city
 * @property string|null $state
 * @property string|null $zip
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read Model $addressable
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereBookingAddressableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereBookingAddressableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereStreet($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderAddress whereZip($value)
 *
 * @mixin \Eloquent
 */
class OrderAddress extends Model
{
    /** @use HasFactory<OrderAddressFactory> */
    use HasFactory;

    protected $table = 'booking_order_addresses';

    /** @return MorphTo<Model, $this> */
    public function addressable(): MorphTo
    {
        return $this->morphTo();
    }
}
