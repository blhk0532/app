<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $post_ort
 * @property string $post_nummer
 * @property string $gatuadress_namn
 * @property int $personer_count
 * @property int $foretag_count
 * @property string|null $personer_link
 * @property string|null $foretag_link
 * @property string|null $kommun
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser whereForetagCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser whereForetagLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser whereGatuadressNamn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser wherePersonerCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser wherePersonerLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser wherePostNummer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser wherePostOrt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdresser whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class RatsitAdresser extends Model
{
    protected $table = 'ratsit_adresser';

    protected $fillable = [
        'post_ort',
        'post_nummer',
        'gatuadress_namn',
        'personer_count',
        'foretag_count',
        'personer_link',
        'foretag_link',
        'kommun',
    ];

    protected function casts(): array
    {
        return [
            'personer_count' => 'integer',
            'foretag_count' => 'integer',
        ];
    }
}
