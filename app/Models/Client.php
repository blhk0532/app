<?php

declare(strict_types=1);

namespace App\Models;

use App\Traits\ClientTranslations;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property int $client_id
 * @property string $client_fname
 * @property string $client_lname
 * @property string|null $client_phone
 * @property string|null $email
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property CarbonImmutable|null $deleted_at
 * @property-read mixed $f_name
 * @property-read mixed $full_name
 * @property-read mixed $l_name
 * @property-read Collection<int, Income> $income
 * @property-read int|null $income_count
 * @property-read ClientTranslation|null $translation
 * @property-read Collection<int, ClientTranslation> $translations
 * @property-read int|null $translations_count
 * @property-read Collection<int, ClientType> $types
 * @property-read int|null $types_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereClientFname($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereClientLname($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereClientPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client withTrashed(bool $withTrashed = true)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Client withoutTrashed()
 *
 * @mixin \Eloquent
 */
class Client extends Model
{
    use ClientTranslations, HasFactory, SoftDeletes;

    protected $table = 'clients';

    protected $primaryKey = 'client_id';

    protected $dates = [
        'deleted_at',
        'created_at',
        'updated_at',
    ];

    protected $fillable = ['client_fname', 'client_lname', 'client_phone', 'email'];

    public function types()
    {
        return $this->belongsToMany(ClientType::class, 'client_types_relation', 'client_id', 'type_id');

    }

    public function income(): HasMany
    {
        return $this->hasMany(Income::class, 'client_id');
    }
}
