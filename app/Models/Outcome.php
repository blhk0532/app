<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $outcome_id
 * @property int $subcategory_id
 * @property numeric $amount
 * @property string|null $description
 * @property string|null $date
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property CarbonImmutable|null $deleted_at
 * @property-read mixed $category
 * @property-read Subcategory $subcategory
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome whereOutcomeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome whereSubcategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome withTrashed(bool $withTrashed = true)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Outcome withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Outcome extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'outcomes';

    protected $primaryKey = 'outcome_id';

    protected $dates = ['deleted_at'];

    protected $with = [
        'subcategory.category',
    ];

    protected $fillable = [
        'subcategory_id', 'amount', 'description', 'date', 'is_deleted',
    ];

    public function subcategory(): BelongsTo
    {
        return $this->belongsTo(Subcategory::class, 'subcategory_id');
    }

    public function getCategoryAttribute()
    {
        return $this->subcategory?->category;
    }
}
