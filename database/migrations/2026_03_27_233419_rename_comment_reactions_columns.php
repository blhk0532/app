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
        Schema::table('comment_reactions', function (Blueprint $table) {
            // Drop foreign key constraint first
            $table->dropForeign(['comment_id']);

            // Drop existing index
            $table->dropIndex('comment_reactions_reactor_type_reactor_id_index');

            // Rename columns
            $table->renameColumn('reactor_id', 'commenter_id');
            $table->renameColumn('reactor_type', 'commenter_type');

            // Recreate index with new column names
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
        Schema::table('comment_reactions', function (Blueprint $table) {
            // Drop foreign key
            $table->dropForeign(['comment_id']);

            // Drop index
            $table->dropIndex(['commenter_type', 'commenter_id']);

            // Rename columns back
            $table->renameColumn('commenter_id', 'reactor_id');
            $table->renameColumn('commenter_type', 'reactor_type');

            // Recreate original index
            $table->index(['reactor_type', 'reactor_id']);

            // Recreate foreign key
            $table->foreign('comment_id')->references('id')->on('comments')->cascadeOnDelete();
        });
    }
};
