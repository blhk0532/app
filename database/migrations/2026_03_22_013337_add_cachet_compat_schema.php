<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $this->updateComponentGroupsTable();
        $this->updateComponentsTable();
        $this->updateIncidentsTable();
        $this->updateMetricsTable();
        $this->updateMetricPointsTable();
        $this->createIncidentComponentsTable();
        $this->createUpdatesTable();
        $this->createCachetSchedulesTables();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Non-destructive compatibility migration.
    }

    private function updateComponentGroupsTable(): void
    {
        if (! Schema::hasColumn('component_groups', 'order')) {
            Schema::table('component_groups', function (Blueprint $table): void {
                $table->unsignedInteger('order')->default(0)->after('name');
            });
        }

        if (! Schema::hasColumn('component_groups', 'collapsed')) {
            Schema::table('component_groups', function (Blueprint $table): void {
                $table->unsignedInteger('collapsed')->default(0)->after('order');
            });
        }

        if (! Schema::hasColumn('component_groups', 'visible')) {
            Schema::table('component_groups', function (Blueprint $table): void {
                $table->unsignedTinyInteger('visible')->default(1)->after('collapsed');
            });
        }
    }

    private function updateComponentsTable(): void
    {
        if (! Schema::hasColumn('components', 'component_group_id')) {
            Schema::table('components', function (Blueprint $table): void {
                $table->unsignedInteger('component_group_id')->nullable()->after('group_id');
            });

            if (Schema::hasColumn('components', 'group_id')) {
                DB::table('components')
                    ->whereNull('component_group_id')
                    ->update(['component_group_id' => DB::raw('group_id')]);
            }
        }

        if (! Schema::hasColumn('components', 'enabled')) {
            Schema::table('components', function (Blueprint $table): void {
                $table->boolean('enabled')->default(true)->after('component_group_id');
            });
        }

        if (! Schema::hasColumn('components', 'meta')) {
            Schema::table('components', function (Blueprint $table): void {
                $table->json('meta')->nullable()->after('enabled');
            });
        }
    }

    private function updateIncidentsTable(): void
    {
        if (! Schema::hasColumn('incidents', 'visible')) {
            Schema::table('incidents', function (Blueprint $table): void {
                $table->unsignedTinyInteger('visible')->default(1)->after('status');
            });
        }

        if (! Schema::hasColumn('incidents', 'stickied')) {
            Schema::table('incidents', function (Blueprint $table): void {
                $table->boolean('stickied')->default(false)->after('visible');
            });
        }

        if (! Schema::hasColumn('incidents', 'notifications')) {
            Schema::table('incidents', function (Blueprint $table): void {
                $table->boolean('notifications')->default(false)->after('stickied');
            });
        }

        if (! Schema::hasColumn('incidents', 'occurred_at')) {
            Schema::table('incidents', function (Blueprint $table): void {
                $table->timestamp('occurred_at')->nullable()->after('notifications');
            });

            DB::table('incidents')
                ->whereNull('occurred_at')
                ->update(['occurred_at' => DB::raw('created_at')]);
        }

        if (! Schema::hasColumn('incidents', 'guid')) {
            Schema::table('incidents', function (Blueprint $table): void {
                $table->uuid('guid')->nullable()->after('id');
            });

            DB::table('incidents')
                ->select('id')
                ->orderBy('id')
                ->chunkById(100, function ($incidents): void {
                    foreach ($incidents as $incident) {
                        DB::table('incidents')
                            ->where('id', $incident->id)
                            ->update(['guid' => (string) Str::uuid()]);
                    }
                });

            Schema::table('incidents', function (Blueprint $table): void {
                $table->uuid('guid')->nullable(false)->change();
                $table->unique('guid');
            });
        }
    }

    private function updateMetricsTable(): void
    {
        if (! Schema::hasColumn('metrics', 'places')) {
            Schema::table('metrics', function (Blueprint $table): void {
                $table->unsignedInteger('places')->default(2)->after('display_chart');
            });
        }

        if (! Schema::hasColumn('metrics', 'show_when_empty')) {
            Schema::table('metrics', function (Blueprint $table): void {
                $table->boolean('show_when_empty')->default(false)->after('display_chart');
            });
        }

        if (! Schema::hasColumn('metrics', 'default_view')) {
            Schema::table('metrics', function (Blueprint $table): void {
                $table->unsignedTinyInteger('default_view')->default(1)->after('places');
            });
        }

        if (! Schema::hasColumn('metrics', 'threshold')) {
            Schema::table('metrics', function (Blueprint $table): void {
                $table->unsignedInteger('threshold')->default(5)->after('default_view');
            });
        }

        if (! Schema::hasColumn('metrics', 'order')) {
            Schema::table('metrics', function (Blueprint $table): void {
                $table->unsignedTinyInteger('order')->default(0)->after('threshold');
            });
        }

        if (! Schema::hasColumn('metrics', 'visible')) {
            Schema::table('metrics', function (Blueprint $table): void {
                $table->unsignedTinyInteger('visible')->default(1)->after('order');
            });
        }
    }

    private function updateMetricPointsTable(): void
    {
        if (! Schema::hasColumn('metric_points', 'counter')) {
            Schema::table('metric_points', function (Blueprint $table): void {
                $table->unsignedInteger('counter')->default(1)->after('value');
            });
        }
    }

    private function createIncidentComponentsTable(): void
    {
        if (! Schema::hasTable('incident_components')) {
            Schema::create('incident_components', function (Blueprint $table): void {
                $table->increments('id');
                $table->unsignedInteger('incident_id')->index();
                $table->unsignedInteger('component_id')->index();
                $table->unsignedTinyInteger('component_status')->nullable();
                $table->timestamps();
            });
        }
    }

    private function createUpdatesTable(): void
    {
        if (! Schema::hasTable('updates')) {
            Schema::create('updates', function (Blueprint $table): void {
                $table->increments('id');
                $table->unsignedInteger('status')->nullable();
                $table->longText('message');
                $table->unsignedInteger('user_id')->nullable();
                $table->morphs('updateable');
                $table->timestamps();
            });
        }
    }

    private function createCachetSchedulesTables(): void
    {
        if (! Schema::hasTable('cachet_schedules')) {
            Schema::create('cachet_schedules', function (Blueprint $table): void {
                $table->increments('id');
                $table->string('name');
                $table->longText('message')->nullable();
                $table->timestamp('scheduled_at');
                $table->timestamp('completed_at')->nullable();
                $table->timestamps();
                $table->softDeletes();
            });
        }

        if (! Schema::hasTable('cachet_schedule_components')) {
            Schema::create('cachet_schedule_components', function (Blueprint $table): void {
                $table->increments('id');
                $table->unsignedInteger('schedule_id')->index();
                $table->unsignedInteger('component_id')->index();
                $table->unsignedTinyInteger('component_status')->nullable();
                $table->timestamps();
            });
        }
    }
};
