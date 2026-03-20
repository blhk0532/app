<?php

declare(strict_types=1);

namespace App\Models\Booking;

use Carbon\CarbonImmutable;
use Database\Factories\Booking\OrderItemFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int|null $booking_order_id
 * @property int|null $booking_product_id
 * @property int $qty
 * @property numeric $unit_price
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property int $sort
 * @property-read Order|null $order
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem whereBookingOrderId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem whereBookingProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem whereQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem whereSort($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem whereUnitPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OrderItem whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class OrderItem extends Model
{
    /** @use HasFactory<OrderItemFactory> */
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'booking_order_items';

    /**
     * @var list<string>
     */
    protected $fillable = [
        'booking_order_id',
        'booking_product_id',
        'qty',
        'unit_price',
        'sort',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'booking_order_id');
    }

    protected static function boot()
    {
        parent::boot();

        self::saved(function ($item) {
            if ($item->order) {
                $item->order->updateTotalPrice();
            }
        });

        self::deleted(function ($item) {
            if ($item->order) {
                $item->order->updateTotalPrice();
            }
        });
    }
}
