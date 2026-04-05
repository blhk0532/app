<?php

declare(strict_types=1);

namespace App\Filament\Resources\SwedenKommuners\RelationPages;

use App\Models\SwedenPostorter;
use BackedEnum;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Table;
use gheith3\FilamentRelationPages\RelationPage;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Model;

class KommunPostorterPage extends RelationPage implements HasTable
{
    use InteractsWithTable;

    protected static ?string $title = 'Postorter';

    protected static string|BackedEnum|null $icon = Heroicon::OutlinedBuildingOffice;

    protected static bool $isLazy = true;

    public static function getBadge(Model $ownerRecord, string $pageClass): ?string
    {
        return (string) SwedenPostorter::where('kommun', $ownerRecord->kommun)->count();
    }

    public function table(Table $table): Table
    {
        return $table
            ->query(
                SwedenPostorter::query()->where('kommun', $this->ownerRecord->kommun)
            )
            ->columns([
                TextColumn::make('post_ort')
                    ->label('Postort')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('lan')
                    ->label('Län')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('personer')
                    ->label('Personer')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('foretag')
                    ->label('Företag')
                    ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('post_ort')
            ->paginated([25, 50, 100, 200])
            ->defaultPaginationPageOption(25);
    }

    public function render(): View
    {
        return view('filament.resources.sweden-kommuners.kommun-postorter-page');
    }
}
