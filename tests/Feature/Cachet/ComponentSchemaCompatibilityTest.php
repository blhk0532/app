<?php

declare(strict_types=1);

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

test('legacy components schema accepts cachet v3 style inserts', function () {
    Schema::dropIfExists('components');

    Schema::create('components', function (Blueprint $table): void {
        $table->increments('id');
        $table->string('name');
        $table->text('description');
        $table->text('link');
        $table->integer('status');
        $table->integer('order');
        $table->integer('group_id');
        $table->unsignedInteger('component_group_id')->nullable();
        $table->boolean('enabled')->default(true);
        $table->json('meta')->nullable();
        $table->integer('user_id');
        $table->timestamps();
        $table->softDeletes();
    });

    $migration = require database_path('migrations/2026_03_22_020652_alter_legacy_cachet_components_columns_for_compatibility.php');
    $migration->up();

    $componentId = DB::table('components')->insertGetId([
        'name' => 'Schema',
        'status' => 1,
        'description' => 'zzz',
        'component_group_id' => 1,
        'link' => null,
        'meta' => json_encode(['ping' => 'pong'], JSON_THROW_ON_ERROR),
        'enabled' => false,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $component = DB::table('components')->where('id', $componentId)->first();

    expect($component)->not->toBeNull()
        ->and($component?->link)->toBeNull()
        ->and($component?->order)->toBeNull()
        ->and($component?->group_id)->toBeNull()
        ->and($component?->user_id)->toBeNull();
});
