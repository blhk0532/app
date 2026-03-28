<?php

declare(strict_types=1);

namespace App\Models;

use App\Observers\TeamObserver;
use App\Policies\TeamPolicy;
use Carbon\CarbonImmutable;
use Filament\Models\Contracts\HasAvatar;
use Filament\Models\Contracts\HasCurrentTenantLabel;
use Filament\Models\Contracts\HasName;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Attributes\UsePolicy;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Relaticle\Comments\Concerns\HasComments;
use Relaticle\Comments\Contracts\Commentable;

/**
 * @property int $id
 * @property string $ulid
 * @property int $user_id
 * @property int|null $company_id
 * @property int $is_active
 * @property string $name
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $website
 * @property string|null $address
 * @property string|null $city
 * @property string|null $country
 * @property string|null $description
 * @property string|null $slug
 * @property bool $personal_team
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property string|null $avatar
 * @property-read Company|null $company
 * @property-read User|null $owner
 * @property-read Collection<int, TeamInvitation> $teamInvitations
 * @property-read int|null $team_invitations_count
 * @property-read Membership|null $membership
 * @property-read Collection<int, User> $users
 * @property-read int|null $users_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team wherePersonalTeam($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team whereUlid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Team whereUserId($value)
 *
 * @mixin \Eloquent
 */
#[ObservedBy(TeamObserver::class)]
#[UsePolicy(TeamPolicy::class)]
class Team extends Model implements Commentable, HasAvatar, HasCurrentTenantLabel, HasName
{
    use HasComments;

    protected $fillable = [
        'user_id',
        'company_id',
        'name',
        'phone',
        'email',
        'website',
        'address',
        'city',
        'country',
        'description',
        'slug',
        'personal_team',
        'ulid',
        'avatar',
        'is_admin',
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function hasUser($user): bool
    {
        return $this->users->contains($user) || $user->ownsTeam($this);
    }

    public function hasUserWithEmail(string $email): bool
    {
        return $this->allUsers()->contains(fn ($user): bool => $user->email === $email);
    }

    public function allUsers(): Collection
    {
        return $this->users->merge([$this->owner]);
    }

    public function teamInvitations(): HasMany
    {
        return $this->hasMany(TeamInvitation::class);
    }

    public function removeUser(User $user): void
    {
        if ($user->current_team_id === $this->id) {
            $user->forceFill(['current_team_id' => null])->save();
        }

        $this->users()->detach($user);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'membership')
            ->using(Membership::class)
            ->withTimestamps()
            ->as('membership');
    }

    public function getFilamentAvatarUrl(): ?string
    {
        if ($this->avatar && Storage::disk('public')->exists($this->avatar)) {
            return Storage::disk('public')->url($this->avatar);
        }

        return null;
    }

    public function getFilamentName(): string
    {
        return "{$this->name}".' | TEAM';
    }

    public function getCurrentTenantLabel(): string
    {
        $usernames = Auth::user()->name_first.' '.Auth::user()->name_last;
        $username = $usernames != ' ' ? $usernames : Auth::user()->name;
        $tenantLabel = 'Nordic Digital Marketing Co Limited';

        return $tenantLabel;
    }

    protected static function boot(): void
    {
        parent::boot();

        self::creating(function ($model) {
            if (empty($model->ulid)) {
                $model->ulid = (string) Str::ulid();
            }
        });
    }

    protected function casts(): array
    {
        return [
            'personal_team' => 'boolean',
            'is_admin' => 'boolean',
        ];
    }
}
