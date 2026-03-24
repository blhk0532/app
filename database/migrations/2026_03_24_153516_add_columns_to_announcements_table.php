<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        try {
            Schema::table('announcements', function (Blueprint $table) {
                $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            });
        } catch (Exception $e) {
            // Column may already exist
        }

        try {
            Schema::table('announcements', function (Blueprint $table) {
                $table->foreignId('tekniker_id')->nullable()->constrained('users')->onDelete('set null');
            });
        } catch (Exception $e) {
            // Column may already exist
        }

        try {
            Schema::table('announcements', function (Blueprint $table) {
                $table->foreignId('component_id')->nullable()->constrained('components')->onDelete('set null');
            });
        } catch (Exception $e) {
            // Column may already exist
        }
    }

    public function down(): void
    {
        Schema::table('announcements', function (Blueprint $table) {
            $table->dropForeign(['component_id']);
            $table->dropForeign(['tekniker_id']);
            $table->dropForeign(['user_id']);
        });
    }
};
