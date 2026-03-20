<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Database\Factories\MerinfoFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $type
 * @property string|null $title
 * @property string $short_uuid
 * @property string $name
 * @property string $givenNameOrFirstName
 * @property string $personalNumber
 * @property array<array-key, mixed>|null $pnr
 * @property array<array-key, mixed> $address
 * @property string $gender
 * @property bool $is_celebrity
 * @property bool $has_company_engagement
 * @property int $number_plus_count
 * @property array<array-key, mixed> $phone_number
 * @property string $url
 * @property string|null $same_address_url
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereGivenNameOrFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereHasCompanyEngagement($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereIsCelebrity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereNumberPlusCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo wherePersonalNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo wherePnr($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereSameAddressUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereShortUuid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Merinfo whereUrl($value)
 *
 * @mixin \Eloquent
 */
class Merinfo extends Model
{
    /** @use HasFactory<MerinfoFactory> */
    use HasFactory;

    protected $fillable = [
        'type',
        'title',
        'short_uuid',
        'name',
        'givenNameOrFirstName',
        'personalNumber',
        'pnr',
        'address',
        'gender',
        'is_celebrity',
        'has_company_engagement',
        'number_plus_count',
        'phone_number',
        'url',
        'same_address_url',
    ];

    protected function casts(): array
    {
        return [
            'pnr' => 'array',
            'address' => 'array',
            'is_celebrity' => 'boolean',
            'has_company_engagement' => 'boolean',
            'number_plus_count' => 'integer',
            'phone_number' => 'array',
        ];
    }
}
