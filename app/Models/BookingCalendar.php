<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use WallaceMartinss\FilamentEvolution\Models\WhatsappInstance;

/**
 * @property int $id
 * @property string $name
 * @property string|null $google_calendar_id
 * @property string|null $whatsapp_id
 * @property int $creator_id
 * @property int $owner_id
 * @property int|null $brand_id
 * @property string|null $service_ids
 * @property string|null $notify_emails
 * @property array<array-key, mixed>|null $access
 * @property bool $is_active
 * @property string|null $public_url
 * @property string|null $embed_code
 * @property string|null $public_address_ical
 * @property string|null $secret_address_ical
 * @property string|null $shareable_link
 * @property string|null $whatsapp_numbers
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property string|null $notification_user_ids
 * @property-read User $creator
 * @property-read User $owner
 * @property-read WhatsappInstance|null $whatsappInstance
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereAccess($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereBrandId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereCreatorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereEmbedCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereGoogleCalendarId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereNotificationUserIds($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereNotifyEmails($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereOwnerId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar wherePublicAddressIcal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar wherePublicUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereSecretAddressIcal($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereServiceIds($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereShareableLink($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereWhatsappId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|BookingCalendar whereWhatsappNumbers($value)
 *
 * @mixin \Eloquent
 */
class BookingCalendar extends Model
{
    protected $fillable = [
        'name',
        'google_calendar_id',
        'whatsapp_id',
        'creator_id',
        'owner_id',
        'access',
        'is_active',
    ];

    protected $casts = [
        'access' => 'array',
        'is_active' => 'boolean',
    ];

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function whatsappInstance(): BelongsTo
    {
        return $this->belongsTo(WhatsappInstance::class, 'whatsapp_id');
    }
}
