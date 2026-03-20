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
 * @property int|null $hitta_postort_total_pages
 * @property int $hitta_postort_processed_pages
 * @property int|null $hitta_postort_last_page
 * @property bool $hitta_foretag_queue
 * @property bool $ratsit_personer_queue
 * @property bool $ratsit_foretag_queue
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property string|null $hitta_personer_phone_total
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaForetagQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaForetagSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaForetagTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaPersonerHouseSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaPersonerPhoneSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaPersonerPhoneTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaPersonerQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaPersonerSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaPersonerTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaPostortLastPage($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaPostortProcessedPages($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereHittaPostortTotalPages($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereIsForetagActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereIsPersonerActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoForetagCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoForetagPhoneSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoForetagPhoneTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoForetagQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoForetagSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoForetagTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoPersonerCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoPersonerHouseSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoPersonerHouseTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoPersonerPhoneSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoPersonerPhoneTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoPersonerQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoPersonerSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereMerinfoPersonerTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum wherePostLan($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum wherePostNummer($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum wherePostOrt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereRatsitForetagQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereRatsitForetagSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereRatsitForetagTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereRatsitPersonerHouseSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereRatsitPersonerPhoneSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereRatsitPersonerQueue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereRatsitPersonerSaved($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereRatsitPersonerTotal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|PostNum whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class PostNum extends Model
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
        'merinfo_personer_house_total',
        'created_at',
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
        return 'post_nums';
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
