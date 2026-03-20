<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $outcome
 * @property int $delay_minutes
 * @property string|null $description
 * @property bool $is_active
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property int $max_retry_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting whereDelayMinutes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting whereMaxRetryCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting whereOutcome($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeDelaySetting whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class OutcomeDelaySetting extends Model
{
    protected $table = 'outcome_delay_settings';

    protected $fillable = ['outcome', 'delay_minutes', 'description', 'is_active', 'max_retry_count'];

    protected $casts = [
        'delay_minutes' => 'integer',
        'max_retry_count' => 'integer',
        'is_active' => 'boolean',
    ];
}
