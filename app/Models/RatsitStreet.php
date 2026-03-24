<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $street_name
 * @property int $person_count
 * @property string $postal_code
 * @property string $city
 * @property string $url
 * @property CarbonImmutable $scraped_at
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read Collection<int, RatsitPerson> $persons
 * @property-read int|null $persons_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet wherePersonCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet whereScrapedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet whereStreetName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitStreet whereUrl($value)
 *
 * @mixin \Eloquent
 */
class RatsitStreet extends Model
{
    protected $table = 'ratsit_streets';

    protected $fillable = [
        'street_name',
        'person_count',
        'postal_code',
        'city',
        'url',
        'scraped_at',
    ];

    protected $casts = [
        'scraped_at' => 'datetime',
        'person_count' => 'integer',
    ];

    public function persons()
    {
        return $this->hasMany(RatsitPerson::class, 'street', 'street_name');
    }
}
