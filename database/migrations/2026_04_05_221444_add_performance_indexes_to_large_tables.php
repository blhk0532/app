<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        // sweden_personer (312K rows, 254MB) — no indexes beyond PK
        $this->addIndexIfNotExists('sweden_personer', 'idx_sp_efternamn', ['efternamn']);
        $this->addIndexIfNotExists('sweden_personer', 'idx_sp_personnummer', ['personnummer']);
        $this->addIndexIfNotExists('sweden_personer', 'idx_sp_postnummer', ['postnummer']);
        $this->addIndexIfNotExists('sweden_personer', 'idx_sp_postort', ['postort']);
        $this->addIndexIfNotExists('sweden_personer', 'idx_sp_kommun', ['kommun']);
        $this->addIndexIfNotExists('sweden_personer', 'idx_sp_status', ['is_active', 'is_queue', 'is_done']);

        // sweden_adresser (558K rows, 124MB) — no indexes beyond PK
        $this->addIndexIfNotExists('sweden_adresser', 'idx_sa_postnummer', ['postnummer']);
        $this->addIndexIfNotExists('sweden_adresser', 'idx_sa_postort', ['postort']);
        $this->addIndexIfNotExists('sweden_adresser', 'idx_sa_kommun', ['kommun']);
        $this->addIndexIfNotExists('sweden_adresser', 'idx_sa_status', ['is_active', 'is_queue', 'is_done']);

        // sweden_gator (281K rows, 51MB) — no indexes beyond PK
        $this->addIndexIfNotExists('sweden_gator', 'idx_sg_gata', ['gata']);
        $this->addIndexIfNotExists('sweden_gator', 'idx_sg_postnummer', ['postnummer']);
        $this->addIndexIfNotExists('sweden_gator', 'idx_sg_postort', ['postort']);
        $this->addIndexIfNotExists('sweden_gator', 'idx_sg_status', ['is_active', 'is_queue', 'is_done']);

        // carry_data (651K rows, 101MB) — no indexes beyond PK
        $this->addIndexIfNotExists('carry_data', 'idx_cd_personnr', ['personnr']);
        $this->addIndexIfNotExists('carry_data', 'idx_cd_efternamn', ['efternamn']);
        $this->addIndexIfNotExists('carry_data', 'idx_cd_postnr', ['postnr']);
        $this->addIndexIfNotExists('carry_data', 'idx_cd_status', ['is_active', 'is_phone', 'is_epost']);

        // hitta_data (349K rows, 111MB) — key columns are TEXT, only flags are indexable
        $this->addIndexIfNotExists('hitta_data', 'idx_hd_status', ['is_active', 'is_telefon', 'is_hus', 'is_ratsit']);

        // hitta_se (331K rows, 105MB) — same, key columns are TEXT
        $this->addIndexIfNotExists('hitta_se', 'idx_hs_status', ['is_active', 'is_telefon', 'is_hus', 'is_ratsit']);

        // private_data (15K rows, 139MB) — text-heavy but lookup fields are indexable
        $this->addIndexIfNotExists('private_data', 'idx_pd_hitta_id', ['hitta_id']);
        $this->addIndexIfNotExists('private_data', 'idx_pd_ratsit_id', ['ratsit_id']);
        $this->addIndexIfNotExists('private_data', 'idx_pd_luid', ['luid']);
        $this->addIndexIfNotExists('private_data', 'idx_pd_status', ['is_active', 'is_update', 'ratsit_queue']);
    }

    public function down(): void
    {
        $indexes = [
            'sweden_personer' => ['idx_sp_efternamn', 'idx_sp_personnummer', 'idx_sp_postnummer', 'idx_sp_postort', 'idx_sp_kommun', 'idx_sp_status'],
            'sweden_adresser' => ['idx_sa_postnummer', 'idx_sa_postort', 'idx_sa_kommun', 'idx_sa_status'],
            'sweden_gator' => ['idx_sg_gata', 'idx_sg_postnummer', 'idx_sg_postort', 'idx_sg_status'],
            'carry_data' => ['idx_cd_personnr', 'idx_cd_efternamn', 'idx_cd_postnr', 'idx_cd_status'],
            'hitta_data' => ['idx_hd_status'],
            'hitta_se' => ['idx_hs_status'],
            'private_data' => ['idx_pd_hitta_id', 'idx_pd_ratsit_id', 'idx_pd_luid', 'idx_pd_status'],
        ];

        foreach ($indexes as $table => $names) {
            foreach ($names as $name) {
                $this->dropIndexIfExists($table, $name);
            }
        }
    }

    private function addIndexIfNotExists(string $table, string $indexName, array $columns): void
    {
        try {
            $cols = implode(', ', array_map(fn (string $c) => "`{$c}`", $columns));
            DB::statement("ALTER TABLE `{$table}` ADD INDEX `{$indexName}` ({$cols})");
        } catch (QueryException $e) {
            // 1061 = Duplicate key name — index already exists, skip
            if (! str_contains($e->getMessage(), 'Duplicate key name')) {
                throw $e;
            }
        }
    }

    private function dropIndexIfExists(string $table, string $indexName): void
    {
        try {
            DB::statement("ALTER TABLE `{$table}` DROP INDEX `{$indexName}`");
        } catch (QueryException $e) {
            // 1091 = Can't DROP ... check that column/key exists — index doesn't exist, skip
            if (! str_contains($e->getMessage(), 'check that column/key exists')) {
                throw $e;
            }
        }
    }
};
