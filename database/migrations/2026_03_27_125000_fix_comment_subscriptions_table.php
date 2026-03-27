<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        $tableName = config('comments.table_names.subscriptions', 'comment_subscriptions');

        if (! Schema::hasTable($tableName)) {
            Schema::create($tableName, function (Blueprint $table) {
                $table->id();
                $table->morphs('commentable');
                $table->morphs('commenter');
                $table->timestamps();

                $table->unique(['commentable_type', 'commentable_id', 'commenter_type', 'commenter_id'], 'comment_subscriptions_unique');
            });

            return;
        }

        Schema::table($tableName, function (Blueprint $table) use ($tableName) {
            if (Schema::hasColumn($tableName, 'subscribable_type') && ! Schema::hasColumn($tableName, 'commentable_type')) {
                $table->renameColumn('subscribable_type', 'commentable_type');
            }
            if (Schema::hasColumn($tableName, 'subscribable_id') && ! Schema::hasColumn($tableName, 'commentable_id')) {
                $table->renameColumn('subscribable_id', 'commentable_id');
            }
            if (Schema::hasColumn($tableName, 'subscriber_type') && ! Schema::hasColumn($tableName, 'commenter_type')) {
                $table->renameColumn('subscriber_type', 'commenter_type');
            }
            if (Schema::hasColumn($tableName, 'subscriber_id') && ! Schema::hasColumn($tableName, 'commenter_id')) {
                $table->renameColumn('subscriber_id', 'commenter_id');
            }
        });

        // Drop old unique index and add new one if columns were renamed
        Schema::table($tableName, function (Blueprint $table) use ($tableName) {
            $indexes = Schema::getIndexes($tableName);
            $hasOldIndex = false;
            foreach ($indexes as $index) {
                if ($index['name'] === 'commentions_subscriptions_unique') {
                    $hasOldIndex = true;
                    break;
                }
            }

            if ($hasOldIndex) {
                $table->dropUnique('commentions_subscriptions_unique');
            }

            $hasNewIndex = false;
            foreach ($indexes as $index) {
                if ($index['name'] === 'comment_subscriptions_unique') {
                    $hasNewIndex = true;
                    break;
                }
            }

            if (! $hasNewIndex) {
                $table->unique(['commentable_type', 'commentable_id', 'commenter_type', 'commenter_id'], 'comment_subscriptions_unique');
            }
        });
    }

    public function down(): void
    {
        // No down migration needed for this surgical fix
    }
};
