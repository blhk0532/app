<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $id
 * @property string $post_nummer
 * @property string $post_ort
 * @property string $post_lan
 * @property int|null $merinfo_personer_total
 * @property int|null $merinfo_personer_phone_total
 * @property int|null $merinfo_personer_house_total
 * @property int|null $merinfo_foretag_total
 * @property int|null $merinfo_foretag_phone_total
 * @property int|null $merinfo_personer_saved
 * @property int|null $merinfo_personer_phone_saved
 * @property int|null $merinfo_personer_house_saved
 * @property int|null $merinfo_foretag_saved
 * @property int|null $merinfo_foretag_phone_saved
 * @property int|null $hitta_personer_total
 * @property int|null $hitta_foretag_total
 * @property int|null $hitta_personer_saved
 * @property int|null $hitta_personer_phone_saved
 * @property int|null $hitta_personer_house_saved
 * @property int|null $hitta_foretag_saved
 * @property int|null $ratsit_personer_total
 * @property int|null $ratsit_foretag_total
 * @property int|null $ratsit_personer_saved
 * @property int|null $ratsit_foretag_saved
 * @property int|null $ratsit_personer_phone_saved
 * @property int|null $ratsit_personer_house_saved
 * @property string|null $status
 * @property bool $is_active
 * @property int $is_personer_active
 * @property int $is_foretag_active
 * @property bool $merinfo_personer_queue
 * @property bool $merinfo_foretag_queue
 * @property bool $merinfo_personer_count
 * @property int $merinfo_foretag_count
 * @property bool $hitta_personer_queue
 * @property bool $hitta_foretag_queue
 * @property bool $ratsit_personer_queue
 * @property bool $ratsit_foretag_queue
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereHittaForetagQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereHittaForetagSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereHittaForetagTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereHittaPersonerHouseSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereHittaPersonerPhoneSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereHittaPersonerQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereHittaPersonerSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereHittaPersonerTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereIsForetagActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereIsPersonerActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoForetagCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoForetagPhoneSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoForetagPhoneTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoForetagQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoForetagSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoForetagTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoPersonerCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoPersonerHouseSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoPersonerHouseTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoPersonerPhoneSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoPersonerPhoneTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoPersonerQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoPersonerSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereMerinfoPersonerTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer wherePostLan($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer wherePostNummer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer wherePostOrt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereRatsitForetagQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereRatsitForetagSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereRatsitForetagTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereRatsitPersonerHouseSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereRatsitPersonerPhoneSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereRatsitPersonerQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereRatsitPersonerSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereRatsitPersonerTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Postnummer whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class Postnummer extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'post_nummer',
        'post_ort',
        'post_lan',
        'hitta_personer_total',
        'hitta_foretag_total',
        'hitta_personer_saved',
        'hitta_personer_house_saved',
        'hitta_foretag_saved',
        'hitta_personer_phone_saved',
        'hitta_foretag_phone_saved',
        'hitta_personer_queue',
        'hitta_foretag_queue',
        'ratsit_personer_total',
        'ratsit_foretag_total',
        'ratsit_personer_saved',
        'ratsit_personer_house_saved',
        'ratsit_foretag_saved',
        'ratsit_personer_phone_saved',
        'ratsit_foretag_phone_saved',
        'ratsit_personer_queue',
        'ratsit_foretag_queue',
        'merinfo_personer_total',
        'merinfo_foretag_total',
        'merinfo_personer_phone_total',
        'merinfo_foretag_phone_total',
        'merinfo_personer_phone_saved',
        'merinfo_foretag_phone_saved',
        'merinfo_personer_saved',
        'merinfo_personer_house_saved',
        'merinfo_foretag_saved',
        'merinfo_personer_queue',
        'merinfo_personer_count',
        'merinfo_foretag_queue',
        'hitta_postort_total_pages',
        'hitta_postort_processed_pages',
        'hitta_postort_last_page',
        'is_active',
        'status',
        'updated_at',
    ];

    protected $casts = [
        'id' => 'string',
        'post_nummer' => 'string',
        'post_ort' => 'string',
        'post_lan' => 'string',
        'hitta_personer_total' => 'integer',
        'hitta_foretag_total' => 'integer',
        'hitta_personer_saved' => 'integer',
        'hitta_personer_house_saved' => 'integer',
        'hitta_foretag_saved' => 'integer',
        'hitta_personer_phone_saved' => 'integer',
        'hitta_foretag_phone_saved' => 'integer',
        'hitta_personer_queue' => 'boolean',
        'hitta_foretag_queue' => 'boolean',
        'ratsit_personer_saved' => 'integer',
        'ratsit_personer_house_saved' => 'integer',
        'ratsit_foretag_saved' => 'integer',
        'ratsit_personer_phone_saved' => 'integer',
        'ratsit_foretag_phone_saved' => 'integer',
        'ratsit_personer_total' => 'integer',
        'ratsit_foretag_total' => 'integer',
        'ratsit_personer_queue' => 'boolean',
        'ratsit_foretag_queue' => 'boolean',
        'merinfo_personer_total' => 'integer',
        'merinfo_foretag_total' => 'integer',
        'merinfo_personer_saved' => 'integer',
        'merinfo_personer_house_saved' => 'integer',
        'merinfo_foretag_saved' => 'integer',
        'merinfo_personer_phone_saved' => 'integer',
        'merinfo_foretag_phone_saved' => 'integer',
        'merinfo_personer_phone_total' => 'integer',
        'merinfo_foretag_phone_total' => 'integer',
        'merinfo_personer_queue' => 'boolean',
        'merinfo_personer_count' => 'boolean',
        'merinfo_foretag_queue' => 'boolean',
        'hitta_postort_total_pages' => 'integer',
        'hitta_postort_processed_pages' => 'integer',
        'hitta_postort_last_page' => 'integer',
        'is_active' => 'boolean',
        'status' => 'string',
    ];

    public function getTable(): string
    {
        return 'postnummer';
    }

    public function getIncrementing(): bool
    {
        return false;
    }

    public function getKeyType(): string
    {
        return 'string';
    }

    public function getKey(): string
    {
        return $this->getAttribute('id');
    }
}
