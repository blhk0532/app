<?php

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
        if (! Schema::hasTable('terminal_logs')) {
            return;
        }

        Schema::table('terminal_logs', function (Blueprint $table): void {
            $table->foreignId('tenant_id')->nullable()->constrained('teams')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('terminal_logs', function (Blueprint $table) {
            //
        });
    }
};
