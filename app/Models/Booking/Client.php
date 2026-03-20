<?php

declare(strict_types=1);

namespace App\Models\Booking;

use App\Models\Address;
use App\Models\BookingComment;
use Carbon\CarbonImmutable;
use Database\Factories\Booking\ClientFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property string $ulid
 * @property string|null $name
 * @property string|null $address
 * @property string|null $street
 * @property string|null $city
 * @property string|null $zip
 * @property string|null $phone
 * @property string|null $email
 * @property array<array-key, mixed>|null $phones
 * @property string|null $dob
 * @property CarbonImmutable|null $birthday
 * @property string|null $photo
 * @property string|null $notes
 * @property string|null $type
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property CarbonImmutable|null $deleted_at
 * @property-read Collection<int, Address> $addresses
 * @property-read int|null $addresses_count
 * @property-read Collection<int, BookingComment> $comments
 * @property-read int|null $comments_count
 * @property-read Collection<int, Payment> $payments
 * @property-read int|null $payments_count
 *
 * @method static \Database\Factories\Booking\ClientFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereDob($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client wherePhones($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client wherePhoto($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereStreet($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereUlid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereZip($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client withTrashed(bool $withTrashed = true)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Client extends Model
{
    /** @use HasFactory<ClientFactory> */
    use HasFactory;

    use SoftDeletes;

    /**
     * @var bool
     */
    public $incrementing = true;

    /**
     * @var string
     */
    protected $table = 'booking_clients';

    /**
     * @var string
     */
    protected $keyType = 'int';

    /**
     * @var array<string>
     */
    protected $fillable = [
        'ulid',
        'name',
        'address',
        'street',
        'city',
        'zip',
        'phone',
        'email',
        'phones',
        'dob',
        'birthday',
        'photo',
        'notes',
        'type',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'name' => 'string',
        'birthday' => 'date',
        'address' => 'string',
        'street' => 'string',
        'city' => 'string',
        'zip' => 'string',
        'phone' => 'string',
        'email' => 'string',
        'phones' => 'array',
        'dob' => 'string',
        'photo' => 'string',
        'notes' => 'string',
        'type' => 'string',
    ];

    /** @return MorphToMany<Address, $this> */
    public function addresses(): MorphToMany
    {
        return $this->morphToMany(Address::class, 'booking_addressable');
    }

    /** @return HasMany<Comment, $this> */
    public function comments(): HasMany
    {
        return $this->hasMany(BookingComment::class);
    }

    /** @return HasManyThrough<Payment, Order, $this> */
    public function payments(): HasManyThrough
    {
        return $this->hasManyThrough(Payment::class, Order::class, 'booking_client_id');
    }

    protected static function newFactory()
    {
        return ClientFactory::new();
    }

    /**
     * Boot the model.
     */
    protected static function boot(): void
    {
        parent::boot();

        self::creating(function (Client $client) {
            if (empty($client->ulid)) {
                $client->ulid = (string) Str::ulid();
            }
        });
    }
}
