<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (! Schema::hasTable('incident_templates')) {
            return;
        }

        if (! Schema::hasColumn('incident_templates', 'engine')) {
            Schema::table('incident_templates', function (Blueprint $table): void {
                $table->char('engine')->default('twig')->after('template');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Non-destructive compatibility migration.
    }
};
