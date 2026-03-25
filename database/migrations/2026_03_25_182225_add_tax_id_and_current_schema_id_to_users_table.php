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
        Schema::table('users', function (Blueprint $table) {
            $table->string('tax_id')->nullable()->after('password');
            $table->unsignedBigInteger('current_schema_id')->nullable()->after('tax_id');
            $table->string('nationality')->nullable()->after('current_schema_id');
            $table->string('whatsapp')->nullable()->after('nationality');
            $table->unsignedBigInteger('company_id')->nullable()->after('whatsapp');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['tax_id', 'current_schema_id', 'nationality', 'whatsapp', 'company_id']);
        });
    }
};
