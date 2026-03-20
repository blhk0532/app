<?php

declare(strict_types=1);

namespace App\Models\Booking;

use App\Models\BookingComment;
use Carbon\CarbonImmutable;
use Database\Factories\Booking\ProductFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * @property int $id
 * @property int|null $booking_brand_id
 * @property string $name
 * @property string|null $slug
 * @property string|null $sku
 * @property string|null $barcode
 * @property string|null $description
 * @property int $qty
 * @property int $security_stock
 * @property bool $featured
 * @property bool $is_visible
 * @property numeric|null $old_price
 * @property numeric|null $price
 * @property numeric|null $cost
 * @property string|null $type
 * @property bool $backorder
 * @property bool $requires_shipping
 * @property CarbonImmutable|null $published_at
 * @property string|null $seo_title
 * @property string|null $seo_description
 * @property numeric|null $weight_value
 * @property string $weight_unit
 * @property numeric|null $height_value
 * @property string $height_unit
 * @property numeric|null $width_value
 * @property string $width_unit
 * @property numeric|null $depth_value
 * @property string $depth_unit
 * @property numeric|null $volume_value
 * @property string $volume_unit
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
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereBackorder($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereBarcode($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereBookingBrandId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereDepthUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereDepthValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereHeightUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereHeightValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereIsVisible($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereOldPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product wherePublishedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereRequiresShipping($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereSecurityStock($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereSeoDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereSeoTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereSku($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereVolumeUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereVolumeValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereWeightUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereWeightValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereWidthUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Product whereWidthValue($value)
 *
 * @mixin \Eloquent
 */
class Product extends Model implements HasMedia
{
    /** @use HasFactory<ProductFactory> */
    use HasFactory;

    use InteractsWithMedia;

    /**
     * @var string
     */
    protected $table = 'booking_products';

    /**
     * @var array<string>
     */
    protected $fillable = [
        'booking_brand_id',
        'name',
        'slug',
        'sku',
        'barcode',
        'description',
        'qty',
        'security_stock',
        'featured',
        'is_visible',
        'old_price',
        'price',
        'cost',
        'type',
        'backorder',
        'requires_shipping',
        'published_at',
        'seo_title',
        'seo_description',
        'weight_value',
        'weight_unit',
        'height_value',
        'height_unit',
        'width_value',
        'width_unit',
        'depth_value',
        'depth_unit',
        'volume_value',
        'volume_unit',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'featured' => 'boolean',
        'is_visible' => 'boolean',
        'backorder' => 'boolean',
        'requires_shipping' => 'boolean',
        'published_at' => 'date',
    ];

    /** @return BelongsTo<Brand, $this> */
    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class, 'booking_brand_id');
    }

    /** @return BelongsToMany<Category, $this> */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'booking_category_product', 'booking_product_id', 'booking_category_id')->withTimestamps();
    }

    /** @return MorphMany<Comment, $this> */
    public function comments(): MorphMany
    {
        return $this->morphMany(BookingComment::class, 'commentable');
    }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('product-images')
            ->useDisk('product-images')
            ->acceptsMimeTypes(['image/jpeg'])
            ->registerMediaConversions(function (Media $media): void {
                $this
                    ->addMediaConversion('thumb')
                    ->width(40)
                    ->height(40)
                    ->performOnCollections('product-images');
            });
    }
}
