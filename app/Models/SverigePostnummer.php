<?php

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $id
 * @property string $post_nummer
 * @property string $post_ort
 * @property string $post_lan
 * @property string|null $kommun
 * @property int $personer_count
 * @property int $foretag_count
 * @property string|null $personer_link
 * @property string|null $foretag_link
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 */
class SverigePostnummer extends Model
{
    protected $table = 'sverige_postnummer';

    public $incrementing = false;

    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'post_nummer',
        'post_ort',
        'post_lan',
        'kommun',
        'personer_count',
        'foretag_count',
        'personer_link',
        'foretag_link',
    ];

    protected function casts(): array
    {
        return [
            'personer_count' => 'integer',
            'foretag_count' => 'integer',
            'post_nummer' => 'string',
        ];
    }
}
