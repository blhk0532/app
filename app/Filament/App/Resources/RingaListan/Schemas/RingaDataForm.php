<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Schemas;

use Anish\TextInputEntry\Infolists\Components\TextInputEntry;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Enums\TextSize;

class RingaDataForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Anteckningar')
                    ->schema([
                        RichEditor::make('user_notes')
                            ->columnSpanFull()
                            ->toolbarButtons([
                                ['bold', 'italic', 'underline', 'strike', 'subscript', 'superscript', 'link'],
                                ['h2', 'h3', 'alignStart', 'alignCenter', 'alignEnd'],
                                ['blockquote', 'codeBlock', 'bulletList', 'orderedList'],
                                ['table', 'attachFiles', 'customBlocks', 'mergeTags'],
                                ['undo', 'redo'],
                            ]),
                    ])
                    ->columns(1)
                    ->columnSpanFull(),

                Section::make('Adress')
                    ->schema([
                        Textarea::make('gatuadress')
                            ->columnSpanFull(),
                        Textarea::make('postnummer'),
                        Textarea::make('postort'),
                        Textarea::make('kommun'),
                        Textarea::make('adressandring')
                            ->columnSpanFull(),
                    ])
                    ->columns([
                        'md' => 2,
                    ])
                    ->columnSpanFull(),

                Section::make('Personuppgifter')
                    ->schema([
                        Textarea::make('fornamn'),
                        Textarea::make('efternamn'),
                        Textarea::make('personnamn')
                            ->columnSpanFull(),
                        Textarea::make('fodelsedag'),
                        Textarea::make('personnummer'),
                        Textarea::make('alder'),
                        Textarea::make('kon'),
                        Textarea::make('civilstand'),
                    ])
                    ->columns([
                        'md' => 2,
                    ])
                    ->columnSpanFull(),

                Section::make('Kontakt')
                    ->schema([
                        TextInput::make('telfonnummer')
                            ->tel(),
                        TextInputEntry::make('telefon')
                            ->editable(true)
                            ->border(true)
                            ->size(TextSize::Large),
                        TextInputEntry::make('epost_adress')
                            ->editable(true)
                            ->border(true)
                            ->size(TextSize::Large),
                    ])
                    ->columns([
                        'md' => 2,
                    ])
                    ->columnSpanFull(),

                Section::make('Boende')
                    ->schema([
                        Textarea::make('agandeform'),
                        Textarea::make('bostadstyp'),
                        Textarea::make('boarea'),
                        Textarea::make('byggar'),
                    ])
                    ->columns([
                        'md' => 2,
                    ])
                    ->columnSpanFull(),

                Section::make('Övrigt')
                    ->schema([
                        TextInput::make('personer'),
                        TextInput::make('foretag'),
                        TextInput::make('grannar'),
                        TextInput::make('fordon'),
                        TextInput::make('hundar'),
                        TextInput::make('bolagsengagemang'),
                        TextInput::make('attempts'),
                    ])
                    ->columns([
                        'md' => 3,
                    ])
                    ->columnSpanFull(),
            ]);
    }
}
