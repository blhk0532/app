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
 * @property string $gatuadress_namn
 * @property int $personer_count
 * @property int $foretag_count
 * @property string|null $personer_link
 * @property string|null $foretag_link
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress whereForetagCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress whereForetagLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress whereGatuadressNamn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress wherePersonerCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress wherePersonerLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress wherePostNummer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress wherePostOrt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|RatsitAdress whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class RatsitAdress extends Model
{
    use HasFactory;

    protected $table = 'ratsit_adresser';

    protected $guarded = [];

    protected $casts = [
        'personer_count' => 'integer',
        'foretag_count' => 'integer',
    ];
}
