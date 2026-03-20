<?php

declare(strict_types=1);

namespace App\Models\Booking;

use Adultdate\FilamentBooking\Enums\ServiceStatus;
use App\Models\BookingComment;
use Carbon\CarbonImmutable;
use Database\Factories\Booking\ServiceFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Kirschbaum\Commentions\Contracts\Commentable;
use Kirschbaum\Commentions\HasComments;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * @property int $id
 * @property int|null $booking_brand_id
 * @property string $name
 * @property string|null $slug
 * @property string|null $service_code
 * @property string|null $description
 * @property numeric|null $price
 * @property numeric|null $cost
 * @property bool $is_available
 * @property int $time_duration
 * @property ServiceStatus $status
 * @property bool $featured
 * @property bool $is_visible
 * @property CarbonImmutable|null $published_at
 * @property string|null $seo_title
 * @property string|null $seo_description
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read Brand|null $brand
 * @property-read Collection<int, Category> $categories
 * @property-read int|null $categories_count
 * @property-read Collection<int, BookingComment> $comments
 * @property-read int|null $comments_count
 * @property-read MediaCollection<int, Media> $media
 * @property-read int|null $media_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereBookingBrandId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereIsAvailable($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereIsVisible($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service wherePublishedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereSeoDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereSeoTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereServiceCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereTimeDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Service whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
class Service extends Model implements Commentable, HasMedia
{
    use HasComments;

    /** @use HasFactory<ServiceFactory> */
    use HasFactory;

    use InteractsWithMedia;

    /**
     * @var string
     */
    protected $table = 'booking_services';

    /**
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'slug',
        'service_code',
        'description',
        'price',
        'cost',
        'is_available',
        'time_duration',
        'status',
        'featured',
        'is_visible',
        'published_at',
        'seo_title',
        'seo_description',
        'booking_brand_id',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'featured' => 'boolean',
        'is_visible' => 'boolean',
        'is_available' => 'boolean',
        'status' => ServiceStatus::class,
        'published_at' => 'date',
        'price' => 'decimal:2',
        'cost' => 'decimal:2',
    ];

    /** @return BelongsTo<Brand, $this> */
    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class, 'booking_brand_id');
    }

    /** @return BelongsToMany<Category, $this> */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'booking_category_service', 'booking_service_id', 'booking_category_id')->withTimestamps();
    }

    /** @return MorphMany<Comment, $this> */
    public function comments(): MorphMany
    {
        return $this->morphMany(BookingComment::class, 'commentable');
    }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('service-images')
            ->useDisk('service-images')
            ->acceptsMimeTypes(['image/jpeg'])
            ->registerMediaConversions(function (Media $media): void {
                $this
                    ->addMediaConversion('thumb')
                    ->width(40)
                    ->height(40)
                    ->performOnCollections('service-images');
            });
    }
}
