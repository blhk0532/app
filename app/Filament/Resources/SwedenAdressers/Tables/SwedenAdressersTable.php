<?php

namespace App\Filament\Resources\SwedenAdressers\Tables;

use EightyNine\ExcelImport\ExcelImportAction;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ViewAction;
use Filament\Forms\Components\FileUpload;
use Filament\Notifications\Notification;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\Facades\DB;

class SwedenAdressersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->headerActions([
                ExcelImportAction::make()
                    ->color('primary'),
                static::importSqlAction(),
            ])
            ->columns([
                TextColumn::make('id')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->label('ID')
                    ->sortable(),
                TextColumn::make('adress')
                    ->label('Gatuadress')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('postnummer')
                    ->label('Postnr')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('postort')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('kommun')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('lan')
                    ->label('Landskap')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('personer')
                    ->label('Pers')
                    ->numeric()
                    ->sortable(),
                TextColumn::make('företag')
                    ->hidden()
                    ->numeric()
                    ->sortable(),
                TextColumn::make('adresser')
                    ->hidden()
                    ->numeric()
                    ->sortable(),
                TextColumn::make('ratsit_link')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                IconColumn::make('is_active')
                    ->label('Active')
                    ->boolean(),
                IconColumn::make('is_queue')
                    ->label('Queue')
                    ->boolean(),
                IconColumn::make('is_done')
                    ->label('Done')
                    ->boolean(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    private static function importSqlAction(): Action
    {
        return Action::make('importSql')
            ->label('Import SQL')
            ->icon('heroicon-o-arrow-up-on-square')
            ->color('success')
            ->form([
                FileUpload::make('file')
                    ->label('SQL File')
                    ->acceptedFileTypes(['application/sql', 'text/plain', '.sql'])
                    ->storeFiles(false)
                    ->required(),
            ])
            ->action(function (array $data): void {
                self::handleSqlImport($data);
            });
    }

    private static function handleSqlImport(array $data): void
    {
        try {
            $files = $data['file'] ?? [];
            if (empty($files)) {
                throw new \Exception('No file uploaded');
            }
            $filePath = is_array($files) ? ($files[0] ?? null) : $files;
            if (! $filePath) {
                throw new \Exception('No file uploaded');
            }
            $fullPath = storage_path('app/public/'.$filePath);
            if (! file_exists($fullPath)) {
                $fullPath = storage_path('app/'.$filePath);
            }
            if (! file_exists($fullPath)) {
                throw new \Exception('File not found: '.$filePath);
            }
            $sqlContent = file_get_contents($fullPath);
            if (! $sqlContent) {
                throw new \Exception('Could not read file');
            }
            $processedSql = self::processSqlForSafeImport($sqlContent, 'sweden_adresser');
            DB::unprepared($processedSql);
            Notification::make()
                ->success()
                ->title('Import Successful')
                ->body('SQL data imported safely.')
                ->send();
        } catch (\Exception $e) {
            Notification::make()
                ->danger()
                ->title('Import Failed')
                ->body($e->getMessage())
                ->send();
        }
    }

    private static function processSqlForSafeImport(string $sql, ?string $targetTable = null): string
    {
        $sql = preg_replace('/--.*$/m', '', $sql);
        $sql = preg_replace('/\/\*.*?\*\//s', '', $sql);

        $statements = [];
        $current = '';
        $inString = false;
        $stringChar = '';

        for ($i = 0, $len = strlen($sql); $i < $len; $i++) {
            $char = $sql[$i];
            $prev = $i > 0 ? $sql[$i - 1] : '';

            if (($char === "'" || $char === '"') && $prev !== '\\') {
                if (! $inString) {
                    $inString = true;
                    $stringChar = $char;
                } elseif ($char === $stringChar) {
                    $inString = false;
                }
            }

            if ($char === ';' && ! $inString) {
                $trimmed = trim($current);
                if (! empty($trimmed)) {
                    $statements[] = $trimmed;
                }
                $current = '';
            } else {
                $current .= $char;
            }
        }

        $trimmed = trim($current);
        if (! empty($trimmed)) {
            $statements[] = $trimmed;
        }

        $processed = [];
        foreach ($statements as $stmt) {
            $upper = strtoupper(ltrim($stmt));

            if (str_starts_with($upper, 'DROP TABLE') ||
                str_starts_with($upper, 'TRUNCATE') ||
                str_starts_with($upper, 'DELETE FROM')) {
                continue;
            }

            if (preg_match('/^\s*INSERT\s+INTO/i', $stmt)) {
                $stmt = preg_replace('/^\s*INSERT\s+INTO/i', 'INSERT IGNORE INTO', $stmt);
            }

            if (preg_match('/^\s*CREATE\s+TABLE/i', $stmt)) {
                $stmt = preg_replace('/^\s*CREATE\s+TABLE/i', 'CREATE TABLE IF NOT EXISTS', $stmt);
            }

            if ($targetTable) {
                $stmt = preg_replace(
                    '/(INSERT\s+(?:IGNORE\s+)?INTO|CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?|ALTER\s+TABLE)\s+[`"\']?[^`"\s(]+[`"\']?/i',
                    '$1 `'.$targetTable.'`',
                    $stmt
                );
            }

            $processed[] = $stmt;
        }

        return implode(";\n", $processed).";\n";
    }
}
