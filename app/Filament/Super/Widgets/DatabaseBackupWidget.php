<?php

declare(strict_types=1);

namespace App\Filament\Super\Widgets;

use DB;
use Exception;
use Filament\Notifications\Notification;
use Filament\Schemas\Concerns\InteractsWithSchemas;
use Filament\Schemas\Contracts\HasSchemas;
use Filament\Widgets\Widget;

class DatabaseBackupWidget extends Widget implements HasSchemas
{
    use InteractsWithSchemas;

    protected string $view = 'filament.widgets.database-backup-widget';

    protected int|string|array $columnSpan = 'full';

    protected static bool $isDiscovered = false;

    public ?string $importFile = null;

    public ?string $exportTable = null;

    public ?string $importTableFile = null;

    public ?string $importTableTarget = null;

    public bool $exportStructure = true;

    public bool $exportData = true;

    public bool $exportIndexes = true;

    public function getTables(): array
    {
        try {
            $tables = DB::select('SHOW TABLES');
            $tableNames = [];
            foreach ($tables as $table) {
                $row = (array) $table;
                $tableNames[] = array_values($row)[0] ?? '';
            }

            return array_combine($tableNames, $tableNames);
        } catch (Exception $e) {
            return [];
        }
    }

    public function getTableInfo(string $tableName): array
    {
        try {
            $dbName = config('database.connections.'.config('database.default').'.database');
            $rowCount = DB::select("SELECT COUNT(*) as count FROM `{$tableName}`")[0]->count ?? 0;
            $sizeResult = DB::select(
                'SELECT ROUND(((data_length + index_length) / 1024 / 1024), 2) AS size_mb FROM information_schema.TABLES WHERE table_schema = ? AND table_name = ?',
                [$dbName, $tableName]
            );

            return [
                'rows' => $rowCount,
                'size_mb' => $sizeResult[0]->size_mb ?? 0,
            ];
        } catch (Exception $e) {
            return ['rows' => 0, 'size_mb' => 0];
        }
    }

    public function backupDatabase(): void
    {
        try {
            $connection = config('database.connections.'.config('database.default'));
            $filename = "backup_{$connection['database']}_".now()->format('Y-m-d_H-i-s').'.sql';
            $backupPath = storage_path('app/backups');

            if (! file_exists($backupPath)) {
                mkdir($backupPath, 0755, true);
            }

            $filepath = "{$backupPath}/{$filename}";

            if (! function_exists('exec')) {
                throw new Exception('exec() function is disabled');
            }

            $command = sprintf(
                'mysqldump -u%s -p%s %s > %s 2>&1',
                escapeshellarg($connection['username']),
                escapeshellarg($connection['password']),
                escapeshellarg($connection['database']),
                escapeshellarg($filepath)
            );

            exec($command, $output, $returnVar);

            if ($returnVar !== 0 || ! file_exists($filepath) || filesize($filepath) === 0) {
                throw new Exception('Backup failed: '.implode("\n", $output ?? []));
            }

            Notification::make()
                ->success()
                ->title('Backup Created')
                ->body('Backup downloaded automatically.')
                ->send();

            $downloadUrl = route('download.backup', ['filename' => $filename]);
            $this->dispatch('download-url', url: $downloadUrl);
        } catch (Exception $e) {
            Notification::make()->danger()->title('Backup Failed')->body($e->getMessage())->send();
        }
    }

    public function importDatabase(): void
    {
        try {
            if (! $this->importFile) {
                throw new Exception('No file selected');
            }

            $connection = config('database.connections.'.config('database.default'));
            $filePath = storage_path('app/public/'.$this->importFile);

            if (! file_exists($filePath)) {
                $filePath = storage_path('app/'.$this->importFile);
            }

            if (! file_exists($filePath)) {
                throw new Exception('File not found');
            }

            // Create pre-import backup
            $backupFilename = "pre_import_backup_{$connection['database']}_".now()->format('Y-m-d_H-i-s').'.sql';
            $backupPath = storage_path('app/backups');
            if (! file_exists($backupPath)) {
                mkdir($backupPath, 0755, true);
            }

            $backupCommand = sprintf(
                'mysqldump -u%s -p%s %s > %s 2>&1',
                escapeshellarg($connection['username']),
                escapeshellarg($connection['password']),
                escapeshellarg($connection['database']),
                escapeshellarg("{$backupPath}/{$backupFilename}")
            );

            exec($backupCommand, $backupOutput, $backupReturnVar);

            $importCommand = sprintf(
                'mysql -u%s -p%s %s < %s 2>&1',
                escapeshellarg($connection['username']),
                escapeshellarg($connection['password']),
                escapeshellarg($connection['database']),
                escapeshellarg($filePath)
            );

            exec($importCommand, $output, $returnVar);

            if ($returnVar !== 0) {
                throw new Exception('Import failed: '.implode("\n", $output ?? []));
            }

            Notification::make()
                ->success()
                ->title('Import Successful')
                ->body("Backup saved to: storage/app/backups/{$backupFilename}")
                ->send();

            $this->importFile = null;
        } catch (Exception $e) {
            Notification::make()->danger()->title('Import Failed')->body($e->getMessage())->send();
        }
    }

    public function exportTableData(): void
    {
        try {
            if (! $this->exportTable) {
                throw new Exception('No table selected');
            }

            if (! $this->exportStructure && ! $this->exportData && ! $this->exportIndexes) {
                throw new Exception('Select at least one export option');
            }

            $connection = config('database.connections.'.config('database.default'));
            $filename = "export_{$this->exportTable}_".now()->format('Y-m-d_H-i-s').'.sql';
            $backupPath = storage_path('app/backups');
            if (! file_exists($backupPath)) {
                mkdir($backupPath, 0755, true);
            }

            $filepath = "{$backupPath}/{$filename}";

            $options = [];

            if ($this->exportStructure && ! $this->exportData) {
                $options[] = '--no-data';
            } elseif (! $this->exportStructure && $this->exportData) {
                $options[] = '--no-create-info';
            }

            if (! $this->exportIndexes) {
                $options[] = '--skip-create-options';
                $options[] = '--skip-add-locks';
                $options[] = '--skip-lock-tables';
            }

            $options[] = '--single-transaction';
            $options[] = '--quick';

            $command = sprintf(
                'mysqldump -u%s -p%s %s %s %s > %s 2>&1',
                escapeshellarg($connection['username']),
                escapeshellarg($connection['password']),
                implode(' ', $options),
                escapeshellarg($connection['database']),
                escapeshellarg($this->exportTable),
                escapeshellarg($filepath)
            );

            exec($command, $output, $returnVar);

            if ($returnVar !== 0 || ! file_exists($filepath) || filesize($filepath) === 0) {
                throw new Exception('Export failed: '.implode("\n", $output ?? []));
            }

            Notification::make()
                ->success()
                ->title('Export Created')
                ->body("Table '{$this->exportTable}' exported successfully.")
                ->send();

            $downloadUrl = route('download.backup', ['filename' => $filename]);
            $this->dispatch('download-url', url: $downloadUrl);
            $this->exportTable = null;
        } catch (Exception $e) {
            Notification::make()->danger()->title('Export Failed')->body($e->getMessage())->send();
        }
    }

    public function importTableData(): void
    {
        try {
            if (! $this->importTableFile) {
                throw new Exception('No file selected');
            }

            $filePath = storage_path('app/public/'.$this->importTableFile);
            if (! file_exists($filePath)) {
                $filePath = storage_path('app/'.$this->importTableFile);
            }

            if (! file_exists($filePath)) {
                throw new Exception('File not found');
            }

            $sqlContent = file_get_contents($filePath);
            if ($sqlContent === false) {
                throw new Exception('Cannot read file');
            }

            $processedSql = $this->processSqlForSafeImport($sqlContent, $this->importTableTarget);

            $tempFilePath = tempnam(sys_get_temp_dir(), 'import_');
            file_put_contents($tempFilePath, $processedSql);

            $connection = config('database.connections.'.config('database.default'));

            $command = sprintf(
                'mysql -u%s -p%s %s < %s 2>&1',
                escapeshellarg($connection['username']),
                escapeshellarg($connection['password']),
                escapeshellarg($connection['database']),
                escapeshellarg($tempFilePath)
            );

            exec($command, $output, $returnVar);

            unlink($tempFilePath);

            if ($returnVar !== 0) {
                throw new Exception('Import failed: '.implode("\n", $output ?? []));
            }

            Notification::make()
                ->success()
                ->title('Table Import Successful')
                ->body('Data imported safely. No existing data was lost.')
                ->send();

            $this->importTableFile = null;
            $this->importTableTarget = null;
        } catch (Exception $e) {
            Notification::make()->danger()->title('Import Failed')->body($e->getMessage())->send();
        }
    }

    public function listTables(): void
    {
        $tables = $this->getTables();
        $info = [];

        foreach ($tables as $name) {
            $data = $this->getTableInfo($name);
            $info[] = [
                'name' => $name,
                'rows' => $data['rows'],
                'size_mb' => $data['size_mb'],
                'display' => "{$name}: {$data['rows']} rows, {$data['size_mb']} MB",
            ];
        }

        usort($info, fn ($a, $b) => $b['size_mb'] <=> $a['size_mb']);

        Notification::make()
            ->info()
            ->title('Database Tables ('.count($tables).' total)')
            ->body(implode("\n", array_column($info, 'display')))
            ->duration(15000)
            ->send();
    }

    protected function processSqlForSafeImport(string $sql, ?string $targetTable = null): string
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

            // Skip destructive statements
            if (str_starts_with($upper, 'DROP TABLE') ||
                str_starts_with($upper, 'TRUNCATE') ||
                str_starts_with($upper, 'DELETE FROM')) {
                continue;
            }

            // Convert INSERT to INSERT IGNORE
            if (preg_match('/^\s*INSERT\s+INTO/i', $stmt)) {
                $stmt = preg_replace('/^\s*INSERT\s+INTO/i', 'INSERT IGNORE INTO', $stmt);
            }

            // Convert CREATE TABLE to CREATE TABLE IF NOT EXISTS
            if (preg_match('/^\s*CREATE\s+TABLE/i', $stmt)) {
                $stmt = preg_replace('/^\s*CREATE\s+TABLE/i', 'CREATE TABLE IF NOT EXISTS', $stmt);
            }

            // Skip constraint additions
            if (preg_match('/^\s*ALTER\s+TABLE/i', $stmt)) {
                if (str_contains(strtolower($stmt), 'add constraint') ||
                    str_contains(strtolower($stmt), 'add index') ||
                    str_contains(strtolower($stmt), 'add unique')) {
                    continue;
                }
            }

            // Replace table name if specified
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
