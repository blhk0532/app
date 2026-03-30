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
        if (! Schema::hasTable('booking_bookings')) {
            return;
        }

        Schema::table('booking_bookings', function (Blueprint $table) {
            $table->after('personnummer', function (Blueprint $table) {
                $table->string('phone')->default('')->nullable();
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (! Schema::hasTable('booking_bookings')) {
            return;
        }

        Schema::table('booking_bookings', function (Blueprint $table) {
            $table->dropColumn(['phone']);
        });
    }
};
