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
        $connection = config('activitylog.database_connection');
        $tableName = config('activitylog.table_name', 'activity_log');

        if (! Schema::connection($connection)->hasTable($tableName)) {
            return;
        }

        Schema::connection($connection)->table($tableName, function (Blueprint $table): void {
            $table->dropIndex('subject');
            $table->dropIndex('causer');
        });

        Schema::connection($connection)->table($tableName, function (Blueprint $table): void {
            $table->char('subject_id', 36)->nullable()->change();
            $table->char('causer_id', 36)->nullable()->change();
            $table->index(['subject_type', 'subject_id'], 'subject');
            $table->index(['causer_type', 'causer_id'], 'causer');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $connection = config('activitylog.database_connection');
        $tableName = config('activitylog.table_name', 'activity_log');

        if (! Schema::connection($connection)->hasTable($tableName)) {
            return;
        }

        Schema::connection($connection)->table($tableName, function (Blueprint $table): void {
            $table->dropIndex('subject');
            $table->dropIndex('causer');
        });

        Schema::connection($connection)->table($tableName, function (Blueprint $table): void {
            $table->unsignedBigInteger('subject_id')->nullable()->change();
            $table->unsignedBigInteger('causer_id')->nullable()->change();
            $table->index(['subject_type', 'subject_id'], 'subject');
            $table->index(['causer_type', 'causer_id'], 'causer');
        });
    }
};
