<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Database\Factories\CarryDataFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string|null $person_lopnr
 * @property string|null $personnr
 * @property string|null $kon
 * @property string|null $civilstand
 * @property string|null $namn
 * @property string|null $fornamn
 * @property string|null $efternamn
 * @property string|null $adress
 * @property string|null $co_adress
 * @property string|null $postnr
 * @property string|null $ort
 * @property string|null $telefon
 * @property string|null $mobiltelefon
 * @property string|null $telefax
 * @property string|null $epost
 * @property string|null $epost_privat
 * @property string|null $epost_sekundar
 * @property int|null $is_hus
 * @property int|null $is_active
 * @property int|null $is_phone
 * @property int|null $is_epost
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereAdress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereCivilstand($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereCoAdress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereEfternamn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereEpost($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereEpostPrivat($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereEpostSekundar($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereFornamn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereIsEpost($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereIsHus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereIsPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereKon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereMobiltelefon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereNamn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereOrt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData wherePersonLopnr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData wherePersonnr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData wherePostnr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereTelefax($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereTelefon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|CarryData whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class CarryData extends Model
{
    /** @use HasFactory<CarryDataFactory> */
    use HasFactory;

    protected $table = 'carry_data';

    protected $fillable = [
        'person_lopnr',
        'personnr',
        'kon',
        'civilstand',
        'namn',
        'fornamn',
        'efternamn',
        'adress',
        'co_adress',
        'postnr',
        'ort',
        'telefon',
        'mobiltelefon',
        'telefax',
        'epost',
        'epost_privat',
        'epost_sekundar',
    ];
}
