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
        if (! Schema::hasTable('webhook_subscriptions')) {
            Schema::create('webhook_subscriptions', function (Blueprint $table): void {
                $table->id();
                $table->string('url');
                $table->string('secret');
                $table->string('description')->nullable();
                $table->boolean('send_all_events')->default(true);
                $table->json('selected_events')->nullable();
                $table->decimal('success_rate_24h', 5, 2)->nullable();
                $table->timestamps();
            });
        }

        if (! Schema::hasTable('webhook_attempts')) {
            Schema::create('webhook_attempts', function (Blueprint $table): void {
                $table->id();
                $table->unsignedBigInteger('subscription_id');
                $table->string('event');
                $table->unsignedTinyInteger('attempt');
                $table->json('payload');
                $table->unsignedSmallInteger('response_code')->nullable();
                $table->unsignedTinyInteger('transfer_time')->nullable();
                $table->timestamps();

                $table->index('subscription_id');
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
