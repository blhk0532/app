<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('hitta_data') && ! $this->indexExists('hitta_data', 'hitta_data_postnummer_index')) {
            DB::statement('ALTER TABLE `hitta_data` ADD INDEX `hitta_data_postnummer_index` (`postnummer`(10))');
        }

        if (Schema::hasTable('merinfo_data') && ! $this->indexExists('merinfo_data', 'merinfo_data_postnummer_index')) {
            DB::statement('ALTER TABLE `merinfo_data` ADD INDEX `merinfo_data_postnummer_index` (`postnummer`(10))');
        }
    }

    public function down(): void
    {
        if ($this->indexExists('hitta_data', 'hitta_data_postnummer_index')) {
            DB::statement('ALTER TABLE `hitta_data` DROP INDEX `hitta_data_postnummer_index`');
        }

        if ($this->indexExists('merinfo_data', 'merinfo_data_postnummer_index')) {
            DB::statement('ALTER TABLE `merinfo_data` DROP INDEX `merinfo_data_postnummer_index`');
        }
    }

    private function indexExists(string $table, string $index): bool
    {
        return collect(DB::select("SHOW INDEX FROM `{$table}`"))
            ->contains('Key_name', $index);
    }
};
