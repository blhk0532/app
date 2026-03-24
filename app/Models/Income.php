<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\IncomeStatus;
use App\Enums\PaymentStatus;
use App\Enums\PaymentType;
use App\Traits\IncomeTranslations;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $income_id
 * @property int $subcategory_id
 * @property int|null $discount_id
 * @property int|null $client_id
 * @property numeric $amount
 * @property numeric $discount_amount
 * @property numeric $final_amount
 * @property IncomeStatus $status
 * @property PaymentType $payment_type
 * @property string|null $description
 * @property CarbonImmutable|null $next_payment
 * @property CarbonImmutable|null $date
 * @property CarbonImmutable|null $deleted_at
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read Client|null $client
 * @property-read Discount|null $discount
 * @property-read mixed $next_payment_amount
 * @property-read mixed $remaining
 * @property-read float $total_paid
 * @property-read mixed $trans_description
 * @property-read Collection<int, Payment> $payments
 * @property-read int|null $payments_count
 * @property-read Subcategory $subcategory
 * @property-read IncomeTranslation|null $translation
 * @property-read Collection<int, IncomeTranslation> $translations
 * @property-read int|null $translations_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereDiscountAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereDiscountId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereFinalAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereIncomeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereNextPayment($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income wherePaymentType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereSubcategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income withTrashed(bool $withTrashed = true)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Income withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Income extends Model
{
    use HasFactory, IncomeTranslations, SoftDeletes;

    protected $table = 'incomes';

    protected $primaryKey = 'income_id';

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'status' => IncomeStatus::class,
        'payment_type' => PaymentType::class,
        'amount' => 'decimal:2',
        'discount_amount' => 'decimal:2',
        'final_amount' => 'decimal:2',
        'next_payment' => 'date',
        'date' => 'date',
    ];

    protected $attributes = [
        'final_amount' => 0.00,
    ];

    protected $fillable = [
        'client_id',
        'discount_id',
        'subcategory_id',
        'amount',
        'discount_amount',
        'final_amount',
        'status',
        'payment_type',
        'description',
        'next_payment',
        'date',
    ];

    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'client_id');
    }

    public function subcategory(): BelongsTo
    {
        return $this->belongsTo(Subcategory::class, 'subcategory_id');
    }
    // public function category(): BelongsTo
    // {
    //   return $this->subcategory()->category();
    // }

    public function discount(): BelongsTo
    {
        return $this->belongsTo(Discount::class, 'discount_id');
    }

    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class, 'income_id');
    }

    public function getTotalPaidAttribute(): float
    {
        return (float) $this->paidPayments()->sum('payment_amount');
    }

    public function getRemainingAttribute()
    {
        $amount = $this->final_amount > 0 ? $this->final_amount : $this->amount;

        return max(0, $amount - $this->total_paid);
    }

    public function getDiscountAmountAttribute()
    {
        if ($this->final_amount > 0) {
            return max(0, ($this->amount ?? 0) - ($this->final_amount ?? 0));
        }

        return 0;
    }

    public function paidPayments()
    {
        return $this->payments()->where('status', PaymentStatus::PAID);
    }

    public function unpaidPayments()
    {
        return $this->payments()->where('status', PaymentStatus::UNPAID);
    }

    public function getNextPaymentAmountAttribute()
    {
        $next = $this->unpaidPayments->first();

        return $next?->payment_amount ?? 0;
    }

    public function isRecurring(): bool
    {
        return $this->payment_type === PaymentType::RECURRING;
    }

    public function isOnetime(): bool
    {
        return $this->payment_type === PaymentType::ONETIME;
    }
}
