<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property int|null $age
 * @property RatsitStreet|null $street
 * @property string $postal_code
 * @property string $city
 * @property string $url
 * @property CarbonImmutable $scraped_at
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson whereAge($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson whereScrapedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson whereStreet($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPerson whereUrl($value)
 *
 * @mixin \Eloquent
 */
class RatsitPerson extends Model
{
    protected $table = 'ratsit_persons';

    protected $fillable = [
        'name',
        'age',
        'street',
        'postal_code',
        'city',
        'url',
        'scraped_at',
    ];

    protected $casts = [
        'scraped_at' => 'datetime',
        'age' => 'integer',
    ];

    public function street()
    {
        return $this->belongsTo(RatsitStreet::class, 'street', 'street_name');
    }
}
