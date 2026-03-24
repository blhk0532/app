<?php

namespace Tests;

use Cachet\Settings\AppSettings;
use FinityLabs\FinMail\Settings\LoggingSettings;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Laravel\Fortify\Features;

abstract class TestCase extends BaseTestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        if (! Schema::hasTable('settings')) {
            Schema::create('settings', function (Blueprint $table) {
                $table->increments('id');
                $table->string('group');
                $table->string('name');
                $table->text('payload');
                $table->unsignedBigInteger('team_id')->nullable();
                $table->boolean('locked')->default(false);
                $table->timestamps();
            });
        }

        if (DB::table('settings')->count() === 0) {
            $this->seedDefaultSettings();
        }

        if (! Schema::hasTable('sweden_kommuner')) {
            Schema::create('sweden_kommuner', function (Blueprint $table) {
                $table->id();
                $table->string('kommun');
                $table->string('lan');
                $table->unsignedInteger('personer')->nullable();
                $table->unsignedInteger('foretag')->nullable();
                $table->unsignedInteger('postorter')->nullable();
                $table->unsignedInteger('postnummer')->nullable();
                $table->unsignedInteger('gator')->nullable();
                $table->unsignedInteger('adresser')->nullable();
                $table->string('ratsit_link')->nullable();
                $table->decimal('latitude', 10, 7)->nullable();
                $table->decimal('longitude', 10, 7)->nullable();
                $table->boolean('is_active')->default(true);
                $table->boolean('is_queue')->default(false);
                $table->boolean('is_done')->default(false);
                $table->timestamps();
                $table->softDeletes();
            });
        }
    }

    protected function skipUnlessFortifyFeature(string $feature, ?string $message = null): void
    {
        if (! Features::enabled($feature)) {
            $this->markTestSkipped($message ?? "Fortify feature [{$feature}] is not enabled.");
        }
    }

    protected function seedDefaultSettings(): void
    {
        $now = now();
        $settings = [
            AppSettings::class,
            LoggingSettings::class,
        ];

        foreach ($settings as $settingsClass) {
            if (! method_exists($settingsClass, 'defaults')) {
                continue;
            }

            foreach ($settingsClass::defaults() as $name => $value) {
                DB::table('settings')->insert([
                    'group' => $settingsClass::group(),
                    'name' => $name,
                    'payload' => json_encode($value),
                    'team_id' => null,
                    'locked' => false,
                    'created_at' => $now,
                    'updated_at' => $now,
                ]);
            }
        }
    }
}
