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
        $hasDescription = Schema::hasColumn('components', 'description');
        $hasLink = Schema::hasColumn('components', 'link');
        $hasStatus = Schema::hasColumn('components', 'status');
        $hasOrder = Schema::hasColumn('components', 'order');
        $hasGroupId = Schema::hasColumn('components', 'group_id');
        $hasComponentGroupId = Schema::hasColumn('components', 'component_group_id');
        $hasUserId = Schema::hasColumn('components', 'user_id');

        if (! ($hasDescription || $hasLink || $hasStatus || $hasOrder || $hasGroupId || $hasComponentGroupId || $hasUserId)) {
            return;
        }

        Schema::table('components', function (Blueprint $table) use ($hasDescription, $hasLink, $hasStatus, $hasOrder, $hasGroupId, $hasComponentGroupId, $hasUserId): void {
            if ($hasDescription) {
                $table->text('description')->nullable()->change();
            }

            if ($hasLink) {
                $table->text('link')->nullable()->change();
            }

            if ($hasStatus) {
                $table->integer('status')->nullable()->change();
            }

            if ($hasOrder) {
                $table->integer('order')->nullable()->change();
            }

            if ($hasGroupId) {
                $table->integer('group_id')->nullable()->change();
            }

            if ($hasComponentGroupId) {
                $table->unsignedInteger('component_group_id')->nullable()->change();
            }

            if ($hasUserId) {
                $table->integer('user_id')->nullable()->change();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Non-destructive compatibility migration.
    }
};
