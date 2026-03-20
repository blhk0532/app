<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $post_ort
 * @property string $post_nummer
 * @property int $personer_count
 * @property int $foretag_count
 * @property string|null $personer_link
 * @property bool $personer_link_status
 * @property string|null $foretag_link
 * @property string|null $personer_kommun
 * @property string|null $foretag_kommun
 * @property bool $foretag_link_status
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter whereForetagCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter whereForetagKommun($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter whereForetagLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter whereForetagLinkStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter wherePersonerCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter wherePersonerKommun($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter wherePersonerLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter wherePersonerLinkStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter wherePostNummer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter wherePostOrt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitPostorter whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class RatsitPostorter extends Model
{
    protected $table = 'ratsit_postorter';

    protected $fillable = [
        'post_ort',
        'post_nummer',
        'kommun',
        'personer_count',
        'foretag_count',
        'personer_link',
        'foretag_link',
        'personer_kommun',
        'foretag_kommun',
        'personer_link_status',
        'foretag_link_status',
    ];

    protected function casts(): array
    {
        return [
            'personer_count' => 'integer',
            'foretag_count' => 'integer',
            'personer_link_status' => 'boolean',
            'foretag_link_status' => 'boolean',
        ];
    }
}
