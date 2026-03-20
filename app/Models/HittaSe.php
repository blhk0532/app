<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string|null $personnamn
 * @property string|null $alder
 * @property string|null $kon
 * @property string|null $gatuadress
 * @property string|null $postnummer
 * @property string|null $postort
 * @property array<array-key, mixed>|null $telefon
 * @property string|null $karta
 * @property string|null $link
 * @property string|null $bostadstyp
 * @property string|null $bostadspris
 * @property bool $is_active
 * @property bool $is_telefon
 * @property bool $is_ratsit
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property bool $is_hus
 * @property array<array-key, mixed>|null $telefonnumer
 * @property-read string $telefon_preview
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereAlder($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereBostadspris($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereBostadstyp($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereGatuadress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereIsHus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereIsRatsit($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereIsTelefon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereKarta($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereKon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe wherePersonnamn($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe wherePostnummer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe wherePostort($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereTelefon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereTelefonnumer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|HittaSe whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class HittaSe extends Model
{
    protected $table = 'hitta_se';

    protected $fillable = [
        'personnamn',
        'alder',
        'kon',
        'gatuadress',
        'postnummer',
        'postort',
        'telefon',
        'telefonnumer',
        'karta',
        'link',
        'bostadstyp',
        'bostadspris',
        'is_active',
        'is_telefon',
        'is_ratsit',
        'is_hus',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_telefon' => 'boolean',
        'is_ratsit' => 'boolean',
        'is_hus' => 'boolean',
        'telefon' => 'array',
        'telefonnumer' => 'array',
    ];

    /**
     * Truncated preview of the telefon field for table display.
     * Returns an em dash when empty or placeholder.
     */
    public function getTelefonPreviewAttribute(): string
    {
        $raw = $this->telefon; // Casted to array if JSON, else mixed

        if (is_array($raw)) {
            $phoneStr = implode(' | ', $raw);
        } else {
            $phoneStr = mb_trim(preg_replace('/\s+/', ' ', (string) $raw));
        }

        if ($phoneStr === '' || $phoneStr === 'Lägg till telefonnummer') {
            return '—';
        }

        return mb_strlen($phoneStr) > 13 ? mb_substr($phoneStr, 0, 13).'…' : $phoneStr;
    }
}
