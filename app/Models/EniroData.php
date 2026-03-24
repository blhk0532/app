<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Database\Factories\EniroDataFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string|null $personnamn
 * @property string|null $alder
 * @property string|null $kon
 * @property string|null $gatuadress
 * @property string|null $postnummer
 * @property string|null $postort
 * @property string|null $telefon
 * @property string|null $karta
 * @property string|null $link
 * @property string|null $bostadstyp
 * @property string|null $bostadspris
 * @property bool $is_active
 * @property bool $is_telefon
 * @property bool $is_ratsit
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereAlder($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereBostadspris($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereBostadstyp($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereGatuadress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereIsRatsit($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereIsTelefon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereKarta($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereKon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData wherePersonnamn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData wherePostnummer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData wherePostort($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereTelefon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|EniroData whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class EniroData extends Model
{
    /** @use HasFactory<EniroDataFactory> */
    use HasFactory;

    protected $table = 'eniro_data';

    protected $fillable = [
        'personnamn',
        'alder',
        'kon',
        'gatuadress',
        'postnummer',
        'postort',
        'telefon',
        'karta',
        'link',
        'bostadstyp',
        'bostadspris',
        'is_active',
        'is_telefon',
        'is_ratsit',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'is_telefon' => 'boolean',
            'is_ratsit' => 'boolean',
        ];
    }
}
