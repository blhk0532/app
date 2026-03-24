<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Database\Factories\UpplysningDataFactory;
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
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereAlder($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereBostadspris($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereBostadstyp($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereGatuadress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereIsRatsit($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereIsTelefon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereKarta($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereKon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData wherePersonnamn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData wherePostnummer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData wherePostort($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereTelefon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|UpplysningData whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class UpplysningData extends Model
{
    /** @use HasFactory<UpplysningDataFactory> */
    use HasFactory;

    protected $table = 'upplysning_data';

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
