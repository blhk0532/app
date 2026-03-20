<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\Contacts\Widgets;

use App\Models\RingaData;
use Filament\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Support\Facades\Auth;

class ContactWidget extends BaseWidget
{
    protected static ?string $heading = ' ';

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        $userId = Auth::id();

        return $table
            ->query(fn () => RingaData::getContactQuery(RingaData::query())->where('user_id', $userId))
            ->columns([
                TextColumn::make('personnamn')
                    ->label('Namn')
                    ->searchable(),
                TextColumn::make('gatuadress')
                    ->label('Adress')
                    ->searchable(),
                TextColumn::make('postort')
                    ->label('Ort')
                    ->searchable(),
                TextColumn::make('outcome')
                    ->label('Utfall')
                    ->default('Ej satt')
                    ->badge(),
            ])
            ->recordActions([
                Action::make('ring')
                    ->label('Ring')
                    ->icon('heroicon-o-phone-arrow-up-right')
                    ->color('success')
                    ->url(function (RingaData $record): string {
                        $telefon = $record->telefon;

                        if (is_array($telefon)) {
                            $telefon = $telefon[0] ?? '';
                        }

                        if (is_string($telefon) && str_contains($telefon, ',')) {
                            $telefon = explode(',', $telefon)[0];
                        }

                        return 'tel:'.trim((string) $telefon);
                    }),
            ])
            ->toolbarActions([

            ])
            ->paginated(true)
            ->emptyStateHeading('Inga resultat hittades')
            ->emptyStateDescription('Du har ingen utfallshistorik.');
    }
}
