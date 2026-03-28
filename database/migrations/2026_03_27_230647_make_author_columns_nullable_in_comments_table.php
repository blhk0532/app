<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('comments', function (Blueprint $table) {
            $table->string('author_type')->nullable()->change();
            $table->unsignedBigInteger('author_id')->nullable()->change();
        });

        // Update existing rows to set author fields from commenter fields
        DB::table('comments')
            ->whereNull('author_type')
            ->update([
                'author_type' => DB::raw('commenter_type'),
                'author_id' => DB::raw('commenter_id'),
            ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('comments', function (Blueprint $table) {
            //
        });
    }
};
