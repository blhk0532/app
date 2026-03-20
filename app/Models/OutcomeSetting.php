<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $type
 * @property string|null $category
 * @property string|null $access
 * @property string|null $outcome
 * @property string|null $title
 * @property int|null $delay_minutes
 * @property int|null $max_retry_count
 * @property bool $retry
 * @property bool $quarantine
 * @property int $quarantine_days
 * @property bool $dmc
 * @property bool $aterkom
 * @property int $order
 * @property bool $bokad
 * @property string|null $color
 * @property string|null $icon
 * @property string|null $description
 * @property bool $is_active
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereAccess($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereAterkom($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereBokad($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereDelayMinutes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereDmc($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereMaxRetryCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereOutcome($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereQuarantine($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereQuarantineDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereRetry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|OutcomeSetting whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class OutcomeSetting extends Model
{
    use HasFactory;

    protected $table = 'outcome_settings';

    protected $fillable = [
        'type',
        'category',
        'access',
        'outcome',
        'title',
        'delay_minutes',
        'max_retry_count',
        'retry',
        'quarantine',
        'quarantine_days',
        'dmc',
        'aterkom',
        'color',
        'icon',
        'description',
        'is_active',
        'order',
        'bokad',
    ];

    protected $casts = [
        'delay_minutes' => 'integer',
        'max_retry_count' => 'integer',
        'retry' => 'boolean',
        'quarantine' => 'boolean',
        'quarantine_days' => 'integer',
        'dmc' => 'boolean',
        'aterkom' => 'boolean',
        'is_active' => 'boolean',
        'order' => 'integer',
        'bokad' => 'boolean',
    ];
}
