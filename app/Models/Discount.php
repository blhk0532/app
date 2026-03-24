<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\DiscountType;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $discount_id
 * @property string $name
 * @property numeric|null $rate
 * @property numeric|null $fixed_amount
 * @property DiscountType $type
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read string $display_label
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount whereDiscountId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount whereFixedAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount whereRate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Discount whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class Discount extends Model
{
    protected $table = 'discounts';

    protected $primaryKey = 'discount_id';

    protected $fillable = ['name', 'rate', 'fixed_amount', 'type'];

    protected $casts = [
        'type' => DiscountType::class,
        'fixed_amount' => 'decimal:2',
        'rate' => 'decimal:2',
    ];

    public function getDisplayLabelAttribute(): string
    {
        return match ($this->type) {
            DiscountType::RATE => "{$this->name} - ({$this->type->getLabel()}) ~ ({$this->rate}%)",
            DiscountType::FIXED => "{$this->name} - ({$this->type->getLabel()}) ~ ({$this->fixed_amount})"
        };
    }

    public function apply($amount)
    {
        return match ($this->type) {
            DiscountType::RATE => max(0, $amount - ($amount * ($this->rate / 100))),
            DiscountType::FIXED => max(0, $amount - $this->fixed_amount),
        };
    }
}
