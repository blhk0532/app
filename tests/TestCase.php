<?php

namespace Tests;

use Cachet\Settings\AppSettings;
use FinityLabs\FinMail\Settings\LoggingSettings;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Laravel\Fortify\Features;

abstract class TestCase extends BaseTestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // Create settings table if it doesn't exist
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

        // Seed default settings if the table is empty
        if (DB::table('settings')->count() === 0) {
            $this->seedDefaultSettings();
        }

        // Create sweden_kommuner table if it doesn't exist
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

        // Create schedules table if it doesn't exist
        if (! Schema::hasTable('schedules')) {
            Schema::create('schedules', function (Blueprint $table) {
                $table->id();
                $table->morphs('schedulable'); // User, Resource, etc.
                $table->string('name')->nullable();
                $table->text('description')->nullable();
                $table->date('start_date');
                $table->date('end_date')->nullable();
                $table->boolean('is_recurring')->default(false);
                $table->string('frequency')->nullable(); // daily, weekly, monthly
                $table->json('frequency_config')->nullable();
                $table->json('metadata')->nullable();
                $table->boolean('is_active')->default(true);
                $table->timestamps();

                // Indexes for performance
                $table->index(['schedulable_type', 'schedulable_id'], 'schedules_schedulable_index');
                $table->index(['start_date', 'end_date'], 'schedules_date_range_index');
                $table->index('is_active', 'schedules_is_active_index');
                $table->index('is_recurring', 'schedules_is_recurring_index');
                $table->index('frequency', 'schedules_frequency_index');
            });
        }

        // Add schedule_type column and indexes if the column doesn't exist
        if (Schema::hasTable('schedules') && ! Schema::hasColumn('schedules', 'schedule_type')) {
            Schema::table('schedules', function (Blueprint $table) {
                $table->string('schedule_type')->default('custom')->after('description');

                // Add indexes for performance
                $table->index('schedule_type', 'schedules_type_index');
                $table->index(['schedulable_type', 'schedulable_id', 'schedule_type'], 'schedules_schedulable_type_index');
            });
        }

        // Create incident_updates table if it doesn't exist (needed for drop column migration)
        if (! Schema::hasTable('incident_updates')) {
            Schema::create('incident_updates', function (Blueprint $table) {
                $table->id();
                $table->integer('incident_id')->unsigned();
                $table->timestamps();

                // Add the index that the drop migration tries to drop
                $table->index('incident_id', 'incident_updates_incident_id_index');
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
