<?php

declare(strict_types=1);

namespace App\Models;

use AdultDate\FilamentWirechat\Models\Conversation;
use Adultdate\Wirechat\Contracts\WirechatUser;
use Adultdate\Wirechat\Panel as WirechatStandalonePanel;
use Adultdate\Wirechat\Traits\InteractsWithWirechat;
use App\Observers\AdminObserver;
use Carbon\CarbonImmutable;
use Filament\Models\Contracts\FilamentUser;
use Filament\Models\Contracts\HasAvatar;
use Filament\Panel;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\MustVerifyEmail;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Contracts\Auth\MustVerifyEmail as MustVerifyEmailContract;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * @property int $id
 * @property string $ulid
 * @property bool $status
 * @property int $is_super_admin
 * @property string $role
 * @property string $name
 * @property string $email
 * @property string|null $phone
 * @property CarbonImmutable|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property string|null $two_factor_confirmed_at
 * @property string|null $remember_token
 * @property string|null $avatar_url
 * @property array<array-key, mixed>|null $custom_fields
 * @property string|null $locale
 * @property string|null $theme_color
 * @property CarbonImmutable|null $created_at
 * @property CarbonImmutable|null $updated_at
 * @property-read Collection<int, Conversation> $conversations
 * @property-read int|null $conversations_count
 * @property-read string|null $cover_url
 * @property-read string|null $display_name
 * @property-read string|null $profile_url
 * @property-read string|null $wirechat_avatar_url
 * @property-read string|null $wirechat_name
 * @property-read string|null $wirechat_profile_url
 * @property-read DatabaseNotificationCollection<int, DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 *
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereAvatarUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereCustomFields($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereIsSuperAdmin($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereLocale($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereRole($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereThemeColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereTwoFactorConfirmedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereTwoFactorRecoveryCodes($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereTwoFactorSecret($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereUlid($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Admin whereUpdatedAt($value)
 *
 * @mixin \Eloquent
 */
#[ObservedBy(AdminObserver::class)]
class Admin extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract, FilamentUser, HasAvatar, MustVerifyEmailContract, WirechatUser
{
    use Authenticatable;
    use Authorizable;
    use CanResetPassword;
    use HasFactory;
    use InteractsWithWirechat;
    use MustVerifyEmail;
    use Notifiable;

    protected $fillable = [
        'status',
        'ulid',
        'name',
        'email',
        'password',
        'avatar_url',
        'custom_fields',
        'locale',
        'theme_color',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function canAccessPanel(Panel $panel): bool
    {
        return true;
    }

    public function canImpersonate(): bool
    {
        return true;
    }

    public function getFilamentAvatarUrl(): ?string
    {
        $avatarColumn = config('filament-edit-profile.avatar_column', 'avatar_url');

        return $this->$avatarColumn ? Storage::url($this->$avatarColumn) : null;
    }

    /**
     * Determine if the user can create new groups.
     */
    public function canCreateGroups(): bool
    {
        // By default, allow all authenticated users to create groups
        // You can customize this logic based on your requirements
        return true;
    }

    /**
     * Determine if the user can create new chats with other users.
     */
    public function canCreateChats(): bool
    {
        // By default, allow all authenticated users to create chats
        // You can customize this logic based on your requirements
        return true;
    }

    /**
     * Determine if the user can access wirechat panel.
     * Accepts both Filament Panel (for Filament routes) and Wirechat Panel (for standalone routes).
     */
    public function canAccessWirechatPanel(Panel|WirechatStandalonePanel $panel): bool
    {
        // By default, allow all authenticated users to access the panel
        // You can customize this logic based on your requirements
        return true;
    }

    /**
     * Override belongsToConversation to accept both Filament and standalone Conversation types.
     * This method works with both Filament wirechat routes and standalone wirechat routes.
     */
    public function belongsToConversation(Conversation $conversation, bool $withoutGlobalScopes = false): bool
    {
        // Check if participants are already loaded
        if ($conversation->relationLoaded('participants')) {
            // If loaded, simply check the existing collection
            $participants = $conversation->participants;

            if ($withoutGlobalScopes) {
                $participants->withoutGlobalScopes();
            }

            return $participants->contains(function ($participant) {
                return $participant->participantable_id === $this->getKey() &&
                    $participant->participantable_type === $this->getMorphClass();
            });
        }

        $participants = $conversation->participants();

        if ($withoutGlobalScopes) {
            $participants->withoutGlobalScopes();
        }

        // Perform the query to check if user is a participant
        return $participants->where('participantable_id', $this->getKey())
            ->where('participantable_type', $this->getMorphClass())
            ->exists();
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
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'status' => 'boolean',
            'custom_fields' => 'array',
        ];
    }
}
