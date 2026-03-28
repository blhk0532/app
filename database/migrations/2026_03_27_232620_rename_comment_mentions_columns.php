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
        Schema::table('comment_mentions', function (Blueprint $table) {
            // Drop foreign key constraint first
            $table->dropForeign(['comment_id']);

            // Drop existing indexes
            $table->dropIndex('comment_mentions_comment_id_user_id_user_type_unique');
            $table->dropIndex('comment_mentions_user_type_user_id_index');

            // Rename columns
            $table->renameColumn('user_id', 'commenter_id');
            $table->renameColumn('user_type', 'commenter_type');

            // Recreate indexes with new column names
            $table->unique(['comment_id', 'commenter_id', 'commenter_type']);
            $table->index(['commenter_type', 'commenter_id']);

            // Recreate foreign key constraint
            $table->foreign('comment_id')->references('id')->on('comments')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('comment_mentions', function (Blueprint $table) {
            // Drop foreign key
            $table->dropForeign(['comment_id']);

            // Drop indexes
            $table->dropIndex(['comment_id', 'commenter_id', 'commenter_type']);
            $table->dropIndex(['commenter_type', 'commenter_id']);

            // Rename columns back
            $table->renameColumn('commenter_id', 'user_id');
            $table->renameColumn('commenter_type', 'user_type');

            // Recreate original indexes
            $table->unique(['comment_id', 'user_id', 'user_type']);
            $table->index(['user_type', 'user_id']);

            // Recreate foreign key
            $table->foreign('comment_id')->references('id')->on('comments')->cascadeOnDelete();
        });
    }
};
