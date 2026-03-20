<?php

declare(strict_types=1);

namespace App\Models;

use AdultDate\FilamentWirechat\Database\Factories\AttachmentFactory;
use Adultdate\Wirechat\Facades\Wirechat;
use Carbon\CarbonImmutable;
use Eloquent;
use Illuminate\Contracts\Filesystem\Cloud;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Facades\Storage;

/**
 * @property int $id
 * @property int $attachable_id
 * @property string $attachable_type
 * @property string $file_path
 * @property string $file_name
 * @property string $original_name
 * @property string $url
 * @property string $mime_type
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read Model|Eloquent $attachable
 * @property-read string $clean_mime_type
 *
 * @method static \AdultDate\FilamentWirechat\Database\Factories\AttachmentFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereAttachableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereAttachableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereFileName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereFilePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereMimeType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereOriginalName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Attachments whereUrl($value)
 *
 * @mixin Eloquent
 */
class Attachments extends Model
{
    use HasFactory;

    protected $fillable = ['attachable_id', 'attachable_type', 'file_path', 'file_name', 'mime_type', 'url', 'original_name'];

    public function __construct(array $attributes = [])
    {
        $this->table = Wirechat::formatTableName('attachments');

        parent::__construct($attributes);
    }

    /**
     * Get the attachable model instance.
     */
    public function attachable(): MorphTo
    {
        return $this->morphTo();
    }

    public function getCleanMimeTypeAttribute(): string
    {
        return explode('/', $this->mime_type)[1] ?? 'unknown';
    }

    /**
     * since you have a non-standard namespace;
     * the resolver cannot guess the correct namespace for your Factory class.
     * so we exlicilty tell it the correct namespace
     */
    protected static function newFactory()
    {
        return AttachmentFactory::new();
    }

    protected static function boot(): void
    {
        parent::boot();

        // listen to deleted
        self::deleted(function (Attachment $media) {

            $disk = Wirechat::storage()->disk();

            if (Storage::disk($disk)->exists($media->file_path)) {
                Storage::disk($disk)->delete($media->file_path);
            }
        });
    }

    /**
     * Get the full URL of the attachment based on the configured storage disk.
     *
     * This attribute dynamically generates the correct file URL, whether stored locally
     * or on an external disk like S3. If the file path is not set, it returns null.
     */
    protected function url(): Attribute
    {
        return Attribute::make(
            get: fn ($value, array $attributes) => $this->generateUrl($attributes['file_path'] ?? null)
        );
    }

    /**
     * Generate the URL for the attachment.
     *
     * @param  string|null  $path  The file path of the attachment.
     * @return string|null The generated URL for the attachment.
     */
    protected function generateUrl(?string $path): ?string
    {
        if (! $path) {
            return null;
        }

        $diskVisibility = Wirechat::storage()->visibility();
        $storageDisk = Wirechat::storage()->disk();

        $disk = Storage::disk($storageDisk);

        // If the disk is set to private, generate a temporary URL if supported
        if ($diskVisibility === 'private' && $disk instanceof Cloud) {
            return $disk->temporaryUrl($path, now()->addMinutes(5));
        }

        if (method_exists($disk, 'url')) {
            return $disk->url($path);
        }

        // Fallback: return the file path if url() is not available
        return $path;
    }
}
