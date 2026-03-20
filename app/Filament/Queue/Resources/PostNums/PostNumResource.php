<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\PostNums;

use App\Filament\Queue\Resources\PostNums\Pages\CreatePostNum;
use App\Filament\Queue\Resources\PostNums\Pages\EditPostNum;
use App\Filament\Queue\Resources\PostNums\Pages\ListPostNums;
use App\Filament\Queue\Resources\PostNums\Pages\ViewPostNum;
use App\Filament\Queue\Resources\PostNums\Schemas\PostNumForm;
use App\Filament\Queue\Resources\PostNums\Schemas\PostNumInfolist;
use App\Filament\Queue\Resources\PostNums\Tables\PostNumsTable;
use App\Models\HittaSe;
use App\Models\MerinfoData;
use App\Models\PostNum;
use App\Models\RatsitData;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use UnitEnum;

class PostNumResource extends Resource
{
    protected static ?string $model = PostNum::class;

    protected static ?string $slug = 'post-nums';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $navigationLabel = 'Post Nummer';

    protected static ?int $navigationSort = 3;

    //  protected static UnitEnum|string|null $navigationGroup = 'Tasks Queue';

    public static function form(Schema $schema): Schema
    {
        return PostNumForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return PostNumInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PostNumsTable::configure($table);
    }

    public static function getEloquentQuery(): EloquentBuilder
    {
        return parent::getEloquentQuery()
            ->select('post_nums.*')
            ->selectSub(
                HittaSe::query()
                    ->selectRaw('count(*)')
                    ->whereColumn('hitta_se.postnummer', 'post_nums.post_nummer')
                    ->where('is_active', true),
                'hitta_personer_saved_live'
            )
            ->selectSub(
                HittaSe::query()
                    ->selectRaw('count(*)')
                    ->whereColumn('hitta_se.postnummer', 'post_nums.post_nummer')
                    ->where('is_active', true)
                    ->where('is_hus', true)
                    ->where('is_telefon', true),
                'hitta_foretag_saved_live'
            )
            ->selectSub(
                HittaSe::query()
                    ->selectRaw('count(*)')
                    ->whereColumn('hitta_se.postnummer', 'post_nums.post_nummer')
                    ->where('is_active', true)
                    ->where('is_telefon', true),
                'hitta_personer_phone_saved_live'
            )
            ->selectSub(
                HittaSe::query()
                    ->selectRaw('count(*)')
                    ->whereColumn('hitta_se.postnummer', 'post_nums.post_nummer')
                    ->where('is_active', true)
                    ->where('is_hus', true),
                'hitta_personer_house_saved_live'
            )
            ->selectSub(
                RatsitData::query()
                    ->selectRaw('count(*)')
                    ->whereColumn('ratsit_data.postnummer', 'post_nums.post_nummer')
                    ->where('is_active', true),
                'ratsit_personer_saved_live'
            )
            ->selectSub(
                RatsitData::query()
                    ->selectRaw('count(*)')
                    ->whereColumn('ratsit_data.postnummer', 'post_nums.post_nummer')
                    ->where('is_active', true)
                    ->whereNotNull('telefon')
                    ->where('telefon', '!=', ''),
                'ratsit_personer_phone_saved_live'
            )
            ->selectSub(
                RatsitData::query()
                    ->selectRaw('count(*)')
                    ->whereColumn('ratsit_data.postnummer', 'post_nums.post_nummer')
                    ->where('agandeform', 'Äganderätt'),
                'ratsit_personer_house_saved_live'
            )
            ->selectSub(
                RatsitData::query()
                    ->selectRaw('count(*)')
                    ->whereRaw('1 = 0'),
                'ratsit_foretag_saved_live'
            )
            ->selectSub(
                MerinfoData::query()
                    ->selectRaw('count(*)')
                    ->whereRaw("merinfo_data.postnummer = REPLACE(post_nums.post_nummer, ' ', '')"),
                'merinfo_personer_saved_live'
            )
            ->selectSub(
                MerinfoData::query()
                    ->selectRaw('count(*)')
                    ->whereRaw("merinfo_data.postnummer = REPLACE(post_nums.post_nummer, ' ', '')")
                    ->where('is_active', true)
                    ->where('is_hus', true),
                'merinfo_personer_house_saved_live'
            )
            ->selectSub(
                MerinfoData::query()
                    ->selectRaw('count(*)')
                    ->whereRaw("merinfo_data.postnummer = REPLACE(post_nums.post_nummer, ' ', '')")
                    ->where('is_active', true)
                    ->where('is_telefon', true),
                'merinfo_personer_phone_saved_live'
            )
            ->selectSub(
                MerinfoData::query()
                    ->selectRaw('count(*)')
                    ->whereRaw('1 = 0'),
                'merinfo_foretag_saved_live'
            );
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return (string) self::getModel()::count();
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPostNums::route('/'),
            'create' => CreatePostNum::route('/create'),
            'view' => ViewPostNum::route('/{record}'),
            'edit' => EditPostNum::route('/{record}/edit'),
        ];
    }
}
