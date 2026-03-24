<?php

declare(strict_types=1);

namespace App\Filament\App\Pages\Tenancy;

use App\Models\Team;
use App\Models\User;
use Closure;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Pages\Tenancy\EditTenantProfile;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

/**
 * @property Team $tenant
 */
class EditTeamProfile extends EditTenantProfile
{
    public static function getLabel(): string
    {
        return '';
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                Section::make(__('Team Settings'))
                    ->description(__('Manage your team name and avatar'))
                    ->schema([
                        TextInput::make('name'),
                        FileUpload::make('avatar')
                            ->image()
                            ->directory('team-avatars')
                            ->disk('public'),
                    ]),
                Section::make(__('Team Invitations'))
                    ->collapsible()
                    ->description(__('Invite new members to your team'))
                    ->schema([
                        Repeater::make('teamInvitations')
                            ->relationship('teamInvitations')
                            ->simple(
                                TextInput::make('email')
                                    ->unique('team_invitations', 'email', modifyRuleUsing: fn ($rule) => $rule->where('team_id', $this->tenant->id))
                                    ->rules([fn (): Closure => function (string $attribute, mixed $value, Closure $fail) {
                                        if ($this->tenant->users()->where('email', $value)->exists()) {
                                            $fail('The email has already been taken.');
                                        }
                                        if ($this->tenant->owner()->where('email', $value)->exists()) {
                                            $fail('The email has already been taken.');
                                        }
                                    }])
                                    ->email()
                                    ->required(),
                            )
                            ->mutateRelationshipDataBeforeSaveUsing(function (array $data): array {
                                $data['team_id'] = $this->tenant->id;

                                return $data;
                            }),
                    ]),
                Section::make(__('Team Members'))
                    ->description(__('Add or remove members from your team'))
                    ->collapsible()
                    ->schema([
                        Repeater::make('users')
                            ->relationship('users')
                            ->schema([
                                Select::make('id')
                                    ->label(__('User'))
                                    ->options(fn (): array => User::query()
                                        ->whereNotIn('id', [$this->tenant->user_id])
                                        ->where('id', '!=', auth()->id())
                                        ->pluck('name', 'id')
                                        ->toArray())
                                    ->searchable()
                                    ->preload()
                                    ->required()
                                    ->distinct()
                                    ->disableOptionsWhenSelectedInSiblingRepeaterItems(),
                            ])
                            ->addActionLabel(__('Add Team Member'))
                            ->itemLabel(fn (array $state): ?string => $state['id'] ? User::find($state['id'])?->name : null),
                    ]),
            ]);
    }
}
