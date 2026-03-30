<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaData\Tables;

use App\Enums\Outcomes;
use App\Enums\OutcomeType;
use App\Models\BookingCalendar;
use App\Models\Campaign;
use App\Models\RatsitData;
use App\Models\RingaData;
use App\Models\Team;
use App\Models\User;
use Carbon\Carbon;
use Crumbls\Layup\View\Section;
use EightyNine\ExcelImport\ExcelImportAction;
use Faker\Factory as Faker;
use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Enums\FiltersLayout;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Laravel\Prompts\Grid;
use Shreejan\ActionableColumn\Tables\Columns\ActionableColumn;
use Webbingbrasil\FilamentCopyActions\Tables\CopyableTextColumn;
use Zvizvi\UserFields\Components\UserColumn;
use Filament\Schemas\Components\Grid as FilamentGrid;
use Filament\Schemas\Components\Section as FilamentSection;
use Filament\AdvancedExport\Traits\HasAdvancedExport;
use Asmit\ResizedColumn\HasResizableColumn;

final class RingaDataTable
{

    use HasAdvancedExport;
    use HasResizableColumn;

    public static function configure(Table $table): Table
    {
        return $table
            ->headerActions([
            ])
            ->columns([

                TextColumn::make('gatuadress')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('postnummer')
                    ->label('Postnr')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('postort')
                    ->label('Postort')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),

                TextColumn::make('personnamn')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('fodelsedag')
                    ->label('Ålder')
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->state(fn (RingaData $record) => $record->fodelsedag ? Carbon::parse($record->fodelsedag)->age : '-')
                    ->sortable(),

                TextColumn::make('bostadstyp')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                TextColumn::make('byggar')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                TextColumn::make('adressandring')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('agandeform')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                ActionableColumn::make('outcome_category')
                    ->badge()
                    ->sortable()
                    ->default('...')
                    ->toggleable(false)
                    ->label('Utfall')
                    ->color(
                        static fn ($state) => $state instanceof OutcomeType
                            ? $state->getColor()
                            : (is_string($state) ? OutcomeType::tryFrom($state)?->getColor() ?? 'success' : 'success')
                    )
                    ->actionIcon(
                        static fn ($state) => $state instanceof OutcomeType
                            ? $state->getIcon()
                            : (is_string($state) ? OutcomeType::tryFrom($state)?->getIcon() ?? 'heroicon-o-clock' : 'heroicon-o-clock')
                    )
                    ->actionIconColor(
                        static fn ($state) => $state instanceof OutcomeType
                            ? $state->getColor()
                            : (is_string($state) ? OutcomeType::tryFrom($state)?->getColor() ?? 'success' : 'success')
                    )
                    ->clickableColumn()
                    ->tapAction(
                        Action::make('changeOutcome')
                            ->label('Change Outcome')
                            ->tooltip('Click to change outcome')
                            ->schema([
                                Select::make('outcome')
                                    ->options(fn () => collect(OutcomeType::cases())->mapWithKeys(
                                        fn (OutcomeType $outcome) => [$outcome->value => $outcome->getLabel()]
                                    )->toArray())
                                    ->required(),
                            ])
                            ->fillForm(fn ($record) => [
                                'outcome' => $record->outcome,
                            ])
                            ->action(function ($record, array $data) {
                                $record->update($data);
                            })
                    ),
                CopyableTextColumn::make('telefon')
                    ->state(function ($record) {
                        $telefon = $record->telefon;
                        if (is_array($telefon)) {
                            $telefon = $telefon[0] ?? '';
                        }
                        if (is_string($telefon) && str_contains($telefon, ',')) {
                            $telefon = explode(',', $telefon)[0];
                        }
                        // Remove [, ], ", - characters and replace +46 with 0
                        $telefon = preg_replace('/[\[\]\"\-]/', '', $telefon);
                        $telefon = preg_replace('/^\+46/', '0', $telefon);

                        return $telefon;
                    })
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                UserColumn::make('user')
                    ->label('Användare'),
                TextColumn::make('attempts')
                    ->label('Försök')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->alignCenter(),
                ToggleColumn::make('is_active')
                    ->label('Active')
                    ->sortable(),
                TextColumn::make('expires_at')
                    ->dateTime()
                    ->hidden()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->hidden()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->hidden()
                    ->toggleable(isToggledHiddenByDefault: true),
                IconColumn::make('outcome')
                    ->label('🕻')
                    ->sortable()
                    ->hidden()
                    ->color('gray')
                    ->tooltip(
                        fn ($state) => $state instanceof Outcomes
                            ? $state->getLabel()
                            : (is_string($state) ? Outcomes::tryFrom($state)?->getLabel() ?? 'Unknown' : 'Unknown')
                    )
                    ->action(
                        Action::make('changeOutcome')
                            ->label('Change Outcome')
                            ->icon('heroicon-o-pencil')
                            ->modalHeading('Change Outcome')
                            ->modalSubmitActionLabel('Update')
                            ->schema([
                                Select::make('outcome')
                                    ->label('Select New Outcome')
                                    ->options(fn () => collect(Outcomes::cases())->mapWithKeys(
                                        fn (Outcomes $outcome) => [$outcome->value => $outcome->getLabel()]
                                    )->toArray())
                                    ->required()
                                    ->native(false)
                                    ->searchable(),
                            ])
                            ->action(function (RingaData $record, array $data): void {
                                $record->update(['outcome' => $data['outcome']]);

                                Notification::make()
                                    ->title('Outcome Updated')
                                    ->success()
                                    ->send();
                            })
                    ),
            ])
            ->columnManagerColumns(3)
            ->filters([

                Filter::make('postnummer')
                    ->schema([
                        TextInput::make('postnummer')
                            ->label('Postnummer'),
                    ])
                    ->query(function ($query, array $data) {
                        return $query->when(
                            $data['postnummer'] ?? null,
                            fn ($q, $postnummer) => $q->where('postnummer', 'like', '%'.$postnummer.'%'),
                        );
                    }),

                SelectFilter::make('postort')
                    ->label('Postort')
                    ->multiple()
                    ->searchable()
                    ->options(fn () => self::getCachedRatsitOptions('postort')),

                SelectFilter::make('kommun')
                    ->label('Kommun')
                    ->multiple()
                    ->searchable()
                    ->options(fn () => self::getCachedRatsitOptions('kommun')),

                SelectFilter::make('outcome')
                    ->label('Utfall')
                    ->options(fn () => ['__null__' => 'No outcome'] + collect(Outcomes::cases())->mapWithKeys(
                        fn (Outcomes $outcome) => [$outcome->value => $outcome->getLabel()]
                    )->toArray())
                    ->query(function ($query, array $data) {
                        $value = $data['value'] ?? null;

                        return match ($value) {
                            '__null__' => $query->whereNull('outcome'),
                            null, '' => $query,
                            default => $query->where('outcome', $value),
                        };
                    })
                    ->searchable(),
                SelectFilter::make('max_age')
                    ->label('Under 75år')
                    ->options(fn () => [
                ]),
                Filter::make('fodelsedag_min')
                    ->schema([
                        DatePicker::make('fodelsedag_min')
                            ->label('Min Ålder'),
                    ])
                    ->query(function ($query, array $data) {
                        return $query
                            ->when(
                                $data['fodelsedag_min'] ?? null,
                                fn ($q, $date) => $q->whereDate('fodelsedag', '>=', $date),
                            );
                    }),
                Filter::make('fodelsedag_max')
                    ->schema([
                        DatePicker::make('fodelsedag_max')
                            ->label('Max Ålder'),
                    ])
                    ->query(function ($query, array $data) {
                        return $query
                            ->when(
                                $data['fodelsedag_max'] ?? null,
                                fn ($q, $date) => $q->whereDate('fodelsedag', '<=', $date),
                            );
                    }),

                SelectFilter::make('agandeform')
                    ->label('Ägandeform')
                    ->multiple()
                    ->searchable()
                    ->options(fn () => self::getCachedRatsitOptions('agandeform')),

                SelectFilter::make('bostadstyp')
                    ->label('Bostadstyp')
                    ->multiple()
                    ->searchable()
                    ->options(fn () => self::getCachedRatsitOptions('bostadstyp')),

                SelectFilter::make('campaign_id')
                    ->label('Kampanj')
                    ->options(function () {
                        $tenantId = filament()->getTenant()?->id;
                        if (! $tenantId) {
                            return [];
                        }

                        return Campaign::where('team_id', $tenantId)
                            ->pluck('title', 'id')
                            ->toArray();
                }),
                SelectFilter::make('team_id')
                    ->label('Team')
                    ->options(Team::pluck('name', 'id')->toArray()),
                SelectFilter::make('user_id')
                    ->label('User')
                    ->options(User::pluck('name', 'id')->toArray())
                ->searchable(),

            ], layout: FiltersLayout::Modal)
            ->filtersFormColumns(3)
            ->persistFiltersInSession(false)
            ->paginated([10, 25, 50, 100, 150, 200, 250, 300, 400, 500])
            ->defaultPaginationPageOption(10)
            ->recordAction('view')
            ->recordActions([
                EditAction::make()
                    ->iconButton(),
                ViewAction::make('view')
                    ->iconButton()
                    ->icon('heroicon-o-eye')
                    ->iconButton()
                    ->modalHeading('Info')
                    ->modalWidth('xl'),
                Action::make('view_details')
                    ->iconButton()
                    ->icon('heroicon-o-phone-arrow-up-right')
                    ->color('success')
                    ->url(fn (RingaData $record) => 'tel:'.$record->telefon),

            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make()
                        ->label('Radera Uppgifterna'),
                    BulkAction::make('transferCampaign')
                        ->label('Kampanjöverföring')
                        ->icon('heroicon-o-arrow-path')
                        ->hidden()
                        ->color('info')
                        ->schema([
                            Select::make('campaign_id')
                                ->label('Välj Kampanj')
                                ->searchable()
                                ->options(function () {
                                    $tenantId = filament()->getTenant()?->id;
                                    if (! $tenantId) {
                                        return [];
                                    }

                                    return Campaign::where('title', '!=', 'Unassigned')
                                        ->pluck('title', 'id')
                                        ->toArray();
                                })
                                ->required()
                                ->validationMessages([
                                    'required' => 'Please select a campaign.',
                                ]),
                        ])
                        ->action(function (Collection $records, array $data): void {
                            $records->each(function ($record) use ($data) {
                                $record->update(['campaign_id' => $data['campaign_id']]);
                            });

                            Notification::make()
                                ->title('Campaign transferred successfully')
                                ->success()
                                ->body(count($records).' record(s) transferred.')
                                ->send();
                        })
                        ->visible(fn () => in_array(auth()->user()->role, ['admin', 'super', 'super_admin', 'superadmin', 'manager'])),
                    BulkAction::make('resetResults')
                        ->label('Nollställ Resultat')
                        ->icon('heroicon-o-arrow-path-rounded-square')
                        ->color('warning')
                        ->requiresConfirmation()
                        ->modalHeading('Nollställ Resultaten')
                        ->modalDescription('Detta kommer att återställa user_id, outcome och attempts för de valda posterna.')
                        ->modalSubmitActionLabel('Nollställ')
                        ->action(function (Collection $records): void {
                            $records->each(function ($record) {
                                $record->update([
                                    'user_id' => null,
                                    'outcome' => null,
                                    'outcome_category' => null,
                                    'attempts' => 0,
                                    'is_active' => false,
                                ]);
                            });

                            Notification::make()
                                ->title('Resultat nollställda')
                                ->success()
                                ->body(count($records).' post(er) har nollställts.')
                                ->send();
                        })
                        ->visible(fn () => in_array(auth()->user()->role, ['admin', 'super', 'super_admin', 'superadmin', 'manager'])),
                    BulkAction::make('selectTeam')
                        ->label('Välj Arbetsgrupp')
                        ->hidden()
                        ->icon('heroicon-o-user-group')
                        ->color('primary')
                        ->schema([
                            Select::make('team_id')
                                ->label('Välj Arbetsgrupp')
                                ->searchable()
                                ->options(Team::pluck('name', 'id')->toArray())
                                ->required()
                                ->validationMessages([
                                    'required' => 'Vänligen välj en arbetsgrupp.',
                                ]),
                        ])
                        ->action(function (Collection $records, array $data): void {
                            $records->each(function ($record) use ($data) {
                                $record->update(['team_id' => $data['team_id']]);
                            });

                            Notification::make()
                                ->title('Arbetsgrupp tilldelad')
                                ->success()
                                ->body(count($records).' post(er) har tilldelats en arbetsgrupp.')
                                ->send();
                        })
                        ->visible(fn () => in_array(auth()->user()->role, ['super', 'super_admin', 'superadmin'])),
                    BulkAction::make('assignToUsers')
                        ->label('Tilldela användare')
                        ->color('gray')
                        ->icon('heroicon-o-users')
                        ->schema([
                            FilamentGrid::make()
                                ->schema([
                            Select::make('users')
                                ->label('Välj användare')
                                ->multiple()
                                ->searchable()
                                ->options(function () {
                                    $tenantId = filament()->getTenant()?->id
                                        ?? auth()->user()?->current_team_id;

                                    if (! $tenantId) {
                                        return [];
                                    }

                                    return DB::table('users')
                                        ->where(function ($query) use ($tenantId) {
                                            $query->where('current_team_id', $tenantId)
                                                ->orWhereExists(function ($sub) use ($tenantId) {
                                                    $sub->selectRaw(1)
                                                        ->from('membership')
                                                        ->whereColumn('membership.user_id', 'users.id')
                                                        ->where('membership.team_id', $tenantId);
                                                })
                                                ->orWhereExists(function ($sub) use ($tenantId) {
                                                    $sub->selectRaw(1)
                                                        ->from('teams')
                                                        ->whereColumn('teams.user_id', 'users.id')
                                                        ->where('teams.id', $tenantId);
                                                });
                                        })
                                        ->orderBy('name')
                                        ->pluck('name', 'id')
                                        ->toArray();
                                })
                                ->required()
                                ->validationMessages([
                                    'required' => 'Detta fält är obligatoriskt.',
                                ]),
                            Select::make('teams')
                                ->label('Välj Arbetsgrupp')
                                ->multiple()
                                ->searchable()
                                ->options(Team::pluck('name', 'id')->toArray()),
                            Select::make('campaign_id')
                                ->label('Välj Kampanj')
                                ->searchable()
                                ->options(function () {
                                    $tenantId = filament()->getTenant()?->id
                                        ?? auth()->user()?->current_team_id;

                                    if (! $tenantId) {
                                        return Campaign::pluck('title', 'id')->toArray();
                                    }

                                    return Campaign::where('team_id', $tenantId)
                                        ->orderBy('title')
                                        ->pluck('title', 'id')
                                        ->toArray();
                                }),
                            Select::make('calendar_id')
                                ->label('Välj kalender')
                                ->searchable()
                                ->options(BookingCalendar::all()->pluck('name', 'id'))
                                ->required()
                                ->validationMessages([
                                    'required' => 'Detta fält är obligatoriskt.',
                                ]),
                            DatePicker::make('available_at')
                                ->default(Carbon::yesterday())
                                ->hidden()
                                ->label('Available At'),
                            DatePicker::make('started_at')
                                ->default(today())
                                ->label('Startdatum')
                                ->required()
                                ->validationMessages([
                                    'required' => 'Detta fält är obligatoriskt.',
                                ]),
                            DatePicker::make('expires_at')
                                ->default(today()->addMonth())
                                ->label('Slutdatum')
                                ->required()
                                ->validationMessages([
                                    'required' => 'Detta fält är obligatoriskt.',
                                ])
                            ])
                        ])
                        ->action(function (Collection $records, array $data): void {
                            $userIds = $data['users'];
                            $teamIds = $data['teams'] ?? null;

                            // Only assign the first user ID (or null)
                            $singleUserId = is_array($userIds) ? ($userIds[0] ?? null) : $userIds;
                            // Only assign the first team ID (or null)
                            $singleTeamId = is_array($teamIds) ? ($teamIds[0] ?? null) : $teamIds;

                            foreach ($records as $record) {
                                $updateData = [
                                    'user_id' => $singleUserId,
                                    'calendar_id' => $data['calendar_id'],
                                    'available_at' => $data['available_at'],
                                    'started_at' => $data['started_at'],
                                    'expires_at' => $data['expires_at'],
                                    'attempts' => 0,
                                    'outcome' => null,
                                    'outcome_category' => null,
                                    'is_active' => true,
                                ];

                                if ($singleTeamId) {
                                    $updateData['team_id'] = $singleTeamId;
                                }

                                if (isset($data['campaign_id'])) {
                                    $updateData['campaign_id'] = $data['campaign_id'];
                                }

                                $record->update($updateData);
                            }

                            Notification::make()
                                ->title('Användare tilldelade')
                                ->success()
                                ->body(count($records).' post(er) uppdaterade.')
                                ->send();
                        })
                        ->visible(fn () => in_array(auth()->user()->role, ['admin', 'super', 'super_admin', 'superadmin', 'manager'])),
                ]),
                                ExcelImportAction::make()
                    ->color('primary'),
            ]);
    }

    private static function generateFakeDataAction(): Action
    {
        return Action::make('generateFakeData')
            ->label('Generate Fake Data')
            ->icon('heroicon-o-sparkles')
            ->color('warning')
            ->schema([
                TextInput::make('count')
                    ->label('Number of records')
                    ->numeric()
                    ->required()
                    ->default(10)
                    ->minValue(1)
                    ->maxValue(500)
                    ->helperText('Generate between 1 and 500 fake records'),
            ])
            ->requiresConfirmation()
            ->modalHeading('Generate Fake RingaData Records')
            ->modalDescription('This will create fake RingaData records for testing purposes.')
            ->modalSubmitActionLabel('Generate')
            ->action(function (array $data): void {
                $count = $data['count'] ?? 10;
                $faker = Faker::create('sv_SE');

                $created = 0;
                for ($i = 0; $i < $count; $i++) {
                    RingaData::create([
                        'gatuadress' => $faker->streetAddress(),
                        'postnummer' => $faker->postcode(),
                        'postort' => $faker->city(),
                        'forsamling' => $faker->word(),
                        'kommun' => $faker->city(),
                        'kommun_ratsit' => $faker->city(),
                        'lan' => $faker->randomElement(['Västra Götaland', 'Stockholms', 'Skåne', 'Örebro', 'Värmland', 'Dalarna', 'Gävleborg', 'Västernorrland', 'Jämtland', 'Norrbotten']),
                        'adressandring' => $faker->optional()->text(100),
                        'telfonnummer' => [$faker->phoneNumber(), $faker->optional()->phoneNumber()],
                        'stjarntacken' => $faker->optional()->word(),
                        'fodelsedag' => $faker->dateTimeBetween('-100 years', '-18 years')->format('Y-m-d'),
                        'personnummer' => $faker->numerify('##########'),
                        'alder' => $faker->numberBetween(18, 100),
                        'kon' => $faker->randomElement(['M', 'K']),
                        'civilstand' => $faker->randomElement(['ogift', 'gift', 'skild', 'änka']),
                        'fornamn' => $faker->firstName(),
                        'efternamn' => $faker->lastName(),
                        'personnamn' => $faker->name(),
                        'telefon' => $faker->phoneNumber(),
                        'epost_adress' => [$faker->email(), $faker->optional()->email()],
                        'agandeform' => $faker->randomElement(['ägo', 'hyres', 'andels']),
                        'bostadstyp' => $faker->randomElement(['villa', 'lägenhet', 'radhus']),
                        'boarea' => $faker->numberBetween(30, 200),
                        'byggar' => $faker->year(),
                        'fastighet' => $faker->word(),
                        'personer' => [$faker->firstName(), $faker->optional()->firstName()],
                        'foretag' => [$faker->optional()->company()],
                        'grannar' => [$faker->firstName(), $faker->optional()->firstName()],
                        'fordon' => [$faker->optional()->word()],
                        'hundar' => [$faker->optional()->word()],
                        'bolagsengagemang' => [$faker->optional()->company()],
                        'longitude' => $faker->longitude(),
                        'latitud' => $faker->latitude(),
                        'google_maps' => $faker->url(),
                        'google_streetview' => $faker->url(),
                        'ratsit_se' => $faker->url(),
                        'is_active' => $faker->boolean(80),
                        'is_hus' => $faker->boolean(50),
                        'is_telefon' => $faker->boolean(70),
                        'is_queued' => $faker->boolean(20),
                        'started_at' => $faker->dateTimeThisYear(),
                        'expires_at' => $faker->dateTimeBetween('now', '+1 year'),
                    ]);
                    $created++;
                }

                Notification::make()
                    ->success()
                    ->title('Fake data generated')
                    ->body("Successfully created {$created} fake RingaData records.")
                    ->send();
            });
    }

    private static function getCachedRatsitOptions(string $column): array
    {
        return Cache::remember("ringa-data:ratsit-options:{$column}", now()->addMinutes(30), function () use ($column): array {
            return RatsitData::query()
                ->whereNotNull($column)
                ->where($column, '!=', '')
                ->distinct()
                ->orderBy($column)
                ->pluck($column, $column)
                ->toArray();
        });
    }
}
