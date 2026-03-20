<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $post_ort
 * @property string $post_nummer
 * @property int $personer_count
 * @property int $foretag_count
 * @property string|null $personer_link
 * @property int $personer_link_status
 * @property string|null $foretag_link
 * @property string|null $personer_kommun
 * @property string|null $foretag_kommun
 * @property float|null $lat
 * @property float|null $lng
 * @property int $foretag_link_status
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort whereForetagCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort whereForetagKommun($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort whereForetagLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort whereForetagLinkStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort wherePersonerCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort wherePersonerKommun($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort wherePersonerLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort wherePersonerLinkStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort whereLat($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort whereLng($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort wherePostNummer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort wherePostOrt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostort whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class RatsitPostort extends Model
{
    use HasFactory;

    protected $table = 'ratsit_postorter';

    protected $guarded = [];

    protected $casts = [
        'personer_count' => 'integer',
        'foretag_count' => 'integer',
        'lat' => 'float',
        'lng' => 'float',
    ];
}
