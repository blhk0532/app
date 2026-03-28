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
        Schema::create('outgoing_emails', function (Blueprint $table) {
            $table->id();
            $table->string('subject')->nullable();
            $table->string('email')->index();
            $table->string('message')->nullable();
            $table->string('table')->default('ringa_data');
            $table->unsignedBigInteger('record_id')->default(0);
            $table->unsignedBigInteger('user_id')->index();
            $table->unsignedBigInteger('team_id')->nullable()->default(0);
            $table->unsignedBigInteger('company_id')->nullable()->default(0);
            $table->string('type')->nullable()->default('offert');
            $table->string('status')->nullable()->default('sent');
            $table->boolean('is_active')->default(true)->index();
            $table->boolean('is_success')->default(false)->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('outgoing_emails');
    }
};
