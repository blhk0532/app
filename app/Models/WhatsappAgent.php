<?php

declare(strict_types=1);

namespace App\Models;

use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

/**
 * @property int $id
 * @property bool $active
 * @property string $name
 * @property string $phone
 * @property string|null $text
 * @property string|null $image
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read string|null $image_url
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent whereText($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|WhatsappAgent whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class WhatsappAgent extends Model
{
    protected $fillable = [
        'active',
        'name',
        'phone',
        'text',
        'image',
        'team_id',
    ];

    protected $casts = [
        'active' => 'bool',
    ];

    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }

    public function getImageUrlAttribute(): ?string
    {
        if (empty($this->image)) {
            return null;
        }

        return Storage::disk(config('whatsapp-widget.disk'))->url($this->image);
    }

    public function getLinkByWhatsappAgent($whatsappAgent, $ref): string
    {
        return URL::signedRoute('whatsapp-widget.redirect', [
            'whatsapp_agent' => $whatsappAgent->id,
            'agent' => $whatsappAgent->id,
            'number' => $whatsappAgent->phone,
            'ref' => $ref,
        ]);
    }
}
