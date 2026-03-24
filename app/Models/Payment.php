<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\PaymentStatus;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $payment_id
 * @property int $income_id
 * @property int|null $discount_id
 * @property numeric $payment_amount
 * @property PaymentStatus $status
 * @property string|null $description
 * @property int $is_priority
 * @property CarbonImmutable|null $next_payment
 * @property string|null $paid_at
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property CarbonImmutable|null $deleted_at
 * @property-read Income $income
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment whereDiscountId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment whereIncomeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment whereIsPriority($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment whereNextPayment($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment wherePaidAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment wherePaymentAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment wherePaymentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment withTrashed(bool $withTrashed = true)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Payment withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Payment extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'payments';

    protected $primaryKey = 'payment_id';

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'status' => PaymentStatus::class,
        'payment_amount' => 'decimal:2',
        'next_payment' => 'date',
    ];

    protected $fillable = [
        'income_id',
        'payment_amount',
        'description',
        'is_priority',
        'status',
        'next_payment',
        'paid_at',
        'discount_id',
    ];

    public function income(): BelongsTo
    {
        return $this->belongsTo(Income::class, 'income_id');
    }

    public function isPriority()
    {
        return $this->is_priority === 1;
    }
}
