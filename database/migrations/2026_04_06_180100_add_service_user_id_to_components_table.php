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
        Schema::table('components', function (Blueprint $table): void {
            $table->unsignedBigInteger('service_user_id')->nullable()->after('team_id');
            $table->foreign('service_user_id')->references('id')->on('users')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('components', function (Blueprint $table): void {
            $table->dropForeign(['service_user_id']);
            $table->dropColumn('service_user_id');
        });
    }
};
