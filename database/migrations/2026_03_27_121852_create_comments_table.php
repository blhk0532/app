<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable(config('comments.table_names.comments', 'comments'))) {
            Schema::table(config('comments.table_names.comments', 'comments'), function (Blueprint $table) {
                if (! Schema::hasColumn(config('comments.table_names.comments', 'comments'), 'parent_id')) {
                    $table->foreignId('parent_id')
                        ->nullable()
                        ->after('body')
                        ->constrained(config('comments.table_names.comments', 'comments'))
                        ->cascadeOnDelete();
                }
                if (! Schema::hasColumn(config('comments.table_names.comments', 'comments'), 'edited_at')) {
                    $table->timestamp('edited_at')->nullable()->after('parent_id');
                }
                if (! Schema::hasColumn(config('comments.table_names.comments', 'comments'), 'deleted_at')) {
                    $table->softDeletes()->after('edited_at');
                }
                if (! Schema::hasColumn(config('comments.table_names.comments', 'comments'), 'commenter_type')) {
                    $table->morphs('commenter');
                }
            });

            return;
        }

        Schema::hasTable($table = config('comments.table_names.reactions', 'comment_reactions')) ? null : Schema::create(config('comments.table_names.comments', 'comments'), function (Blueprint $table) {
            $table->id();
            $table->morphs('commentable');
            $table->morphs('commenter');
            $table->foreignId('parent_id')
                ->nullable()
                ->constrained(config('comments.table_names.comments', 'comments'))
                ->cascadeOnDelete();
            $table->text('body');
            $table->timestamp('edited_at')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->index(['commentable_type', 'commentable_id', 'parent_id']);
        });
    }
};
