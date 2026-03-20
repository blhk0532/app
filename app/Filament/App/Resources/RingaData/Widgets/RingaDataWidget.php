<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaData\Widgets;

use Adultdate\FilamentBooking\Enums\Failed;
use Adultdate\FilamentBooking\Enums\Paid;
use Adultdate\FilamentBooking\Enums\Pending;
use App\Enums\OutcomeType;
use App\Enums\Priority;
use App\Models\RingaData;
use EightyNine\ExcelImport\ExcelImportAction;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Guava\FilamentIconSelectColumn\Tables\Columns\IconSelectColumn;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;
use Shreejan\ActionableColumn\Tables\Columns\ActionableColumn;
use Zvizvi\UserFields\Components\UserColumn;

class RingaDataWidget extends BaseWidget
{
    protected static ?string $heading = ' ';

    protected int|string|array $columnSpan = 'full';

    public static function getBaseQuery(): Builder
    {
        $userId = Auth::id();

        if (! $userId) {
            return RingaData::query()->whereRaw('1 = 0');
        }

        return RingaData::query()
            ->where('user_id', $userId)
            ->whereNull('outcome');
    }

    public function table(Table $table): Table
    {
        return $table
            ->query(fn () => self::getBaseQuery())
            ->headerActions([
                Action::make('advancedExport')
                    ->label('Export')
                    ->color('success')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->modal()
                    ->modalHeading('Export Records')
                    ->modalDescription('Select the columns you want to export. Maximum of 2000 records will be exported.')
                    ->schema([
                        Select::make('order_column')
                            ->label('Order by Column')
                            ->options(RingaData::getExportColumns())
                            ->default('created_at'),
                        Select::make('order_direction')
                            ->label('Order Direction')
                            ->options([
                                'asc' => 'Ascending',
                                'desc' => 'Descending',
                            ])
                            ->default('desc'),
                        Repeater::make('columns')
                            ->label('Configure Export Columns')
                            ->schema([
                                Select::make('field')
                                    ->label('Field')
                                    ->options(RingaData::getExportColumns())
                                    ->required(),
                                TextInput::make('title')
                                    ->label('Custom Title')
                                    ->required(),
                            ])
                            ->default(RingaData::getDefaultExportColumns())
                            ->addActionLabel('Add Column')
                            ->collapsible(),
                    ])
                    ->action(function () {
                        // Simple test export - just export first 10 records directly
                        $data = RingaData::query()->limit(10)->get();

                        return response()->streamDownload(function () use ($data) {
                            $handle = fopen('php://output', 'w');
                            // CSV header
                            fputcsv($handle, ['ID', 'Name', 'Phone', 'Address', 'Postnr', 'Ort']);

                            foreach ($data as $row) {
                                fputcsv($handle, [
                                    $row->id,
                                    $row->personnamn ?? '',
                                    $row->telefon ?? '',
                                    $row->gatuadress ?? '',
                                    $row->postnummer ?? '',
                                    $row->postort ?? '',
                                ]);
                            }
                            fclose($handle);
                        }, 'test-export.csv', ['Content-Type' => 'text/csv']);
                    }),
                ExcelImportAction::make()
                    ->color('primary'),
                CreateAction::make(),
            ])
            ->columns([

                TextColumn::make('gatuadress')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('postnummer')
                    ->label('postnr')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('postort')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('fornamn')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                TextColumn::make('efternamn')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: false)
                    ->sortable(),
                UserColumn::make('user')
                    ->label('Användare'),
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
                IconSelectColumn::make('state')
                    ->label(' ')
                    ->options(fn () => collect(Priority::cases())->mapWithKeys(
                        fn (Priority $priority) => [$priority->value => $priority->getLabel()]
                    )->toArray())
                    ->icons([
                        Pending::class => 'heroicon-o-clock',
                        Paid::class => 'heroicon-o-check-circle',
                        Failed::class => 'heroicon-o-x-circle',
                    ]),

            ])
            ->persistFiltersInSession(false)
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

            ]);
    }
}
