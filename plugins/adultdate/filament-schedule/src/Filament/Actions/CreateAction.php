<?php

declare(strict_types=1);

namespace Adultdate\Schedule\Filament\Actions;

use Adultdate\Schedule\Concerns\CalendarAction;
use Adultdate\Schedule\Contracts\HasCalendar;
use Adultdate\Schedule\Models\Meeting;
use Adultdate\Schedule\Models\Schedule;
use Adultdate\Schedule\Models\Sprint;
use Adultdate\Schedule\SchedulePlugin;
use Carbon\Carbon;
use Filament\Schemas\Schema;
use Illuminate\Support\Facades\Auth;

class CreateAction extends \Filament\Actions\CreateAction
{
    use CalendarAction;

    protected function setUp(): void
    {
        parent::setUp();

        $this
            ->schema(
                fn (Schema $schema, CreateAction $action, HasCalendar $livewire) => $livewire
                    ->getFormSchemaForModel($schema, $action->getModel())
            )
            ->mutateFormDataUsing(function (array $data): array {
                $model = $this->getModel();
                if ($model && is_a($model, Schedule::class, true)) {
                    if (! isset($data['schedulable_type']) || ! isset($data['schedulable_id'])) {
                        $user = Auth::user();
                        if ($user) {
                            $data['schedulable_type'] = $user::class;
                            $data['schedulable_id'] = $user->id;
                        }
                    }
                }

                return $data;
            })
            // Ensure forms are prefilled when the action is mounted programmatically
            ->mountUsing(function ($formOrSchema, array $arguments) {
                // Reset form state to avoid leftover values from previous mounts
                if ($formOrSchema instanceof Schema) {
                    $formOrSchema->fill([]);
                } elseif (is_object($formOrSchema) && method_exists($formOrSchema, 'fill')) {
                    $formOrSchema->fill([]);
                }

                // Normalize nested `data` payload into top-level keys so callers that pass dates under `data` (calendar context) are handled.
                if (isset($arguments['data']) && is_array($arguments['data'])) {
                    foreach ($arguments['data'] as $k => $v) {
                        if (! array_key_exists($k, $arguments)) {
                            $arguments[$k] = $v;
                        }
                    }
                }

                // If no date arguments provided, do nothing
                if (! isset($arguments['start']) && ! isset($arguments['start_date'])) {
                    return;
                }

                $timezone = SchedulePlugin::make()->getTimezone();

                // Model-aware mapping: if the action creates Meetings or Sprints, set starts_at/ends_at datetimes,
                // otherwise provide start_date/start_time style values for Schedule forms.
                $model = $this->getModel();

                $isEventModel = false;

                // Avoid hard dependency by checking class names
                if ($model) {
                    $isEventModel = is_a($model, Meeting::class, true)
                        || is_a($model, Sprint::class, true);
                }

                if ($isEventModel) {
                    // Prefer explicit date/time arguments when present
                    if (isset($arguments['start_date']) || isset($arguments['start_time'])) {
                        $startDate = $arguments['start_date'] ?? null;
                        $startTime = $arguments['start_time'] ?? '00:00';
                        $endDate = $arguments['end_date'] ?? null;
                        $endTime = $arguments['end_time'] ?? null;

                        $startsAt = null;
                        $endsAt = null;

                        if ($startDate) {
                            $startDate = Carbon::parse($startDate, $timezone)->format('Y-m-d');
                            $startsAt = Carbon::createFromFormat('Y-m-d H:i', $startDate.' '.$startTime, $timezone)->toDateTimeString();
                        }

                        if ($endDate) {
                            $endDate = Carbon::parse($endDate, $timezone)->format('Y-m-d');
                            $et = $endTime ?? ($startTime ?? '00:00');
                            $endsAt = Carbon::createFromFormat('Y-m-d H:i', $endDate.' '.$et, $timezone)->toDateTimeString();
                        } elseif (isset($arguments['end'])) {
                            $endsAt = Carbon::parse($arguments['end'], $timezone)->toDateTimeString();
                        }

                        $meta = $arguments['metadata'] ?? null;
                        if (is_array($meta)) {
                            $meta = count($meta) ? json_encode($meta, JSON_PRETTY_PRINT) : null;
                        }

                        $values = [
                            'starts_at' => $startsAt,
                            'ends_at' => $endsAt,
                            'metadata' => $meta,
                        ];
                    } else {
                        // Use ISO start/end values
                        $start = isset($arguments['start']) ? Carbon::parse($arguments['start'], $timezone) : null;
                        $end = isset($arguments['end']) ? Carbon::parse($arguments['end'], $timezone) : null;

                        $meta = $arguments['metadata'] ?? null;
                        if (is_array($meta)) {
                            $meta = count($meta) ? json_encode($meta, JSON_PRETTY_PRINT) : null;
                        }

                        $values = [
                            'starts_at' => $start ? $start->toDateTimeString() : null,
                            'ends_at' => $end ? $end->toDateTimeString() : null,
                            'metadata' => $meta,
                        ];
                    }
                } else {
                    // Prefer explicit date/time arguments when present
                    if (isset($arguments['start_date']) || isset($arguments['start_time'])) {
                        $meta = $arguments['metadata'] ?? null;
                        if (is_array($meta)) {
                            $meta = count($meta) ? json_encode($meta, JSON_PRETTY_PRINT) : null;
                        }

                        $values = [
                            'start_date' => $arguments['start_date'] ?? null,
                            'start_time' => $arguments['start_time'] ?? null,
                            'end_date' => $arguments['end_date'] ?? null,
                            'end_time' => $arguments['end_time'] ?? null,
                            // Ensure metadata key exists (as JSON string for CodeEditor)
                            'metadata' => $meta,
                        ];

                        $user = Auth::user();
                        if ($user) {
                            $values['schedulable_type'] = $user::class;
                            $values['schedulable_id'] = $user->id;
                        }
                    } else {
                        $start = Carbon::parse($arguments['start'], $timezone);

                        $values = [
                            'start_date' => $start->format('Y-m-d'),
                            'end_date' => isset($arguments['end']) ? Carbon::parse($arguments['end'], $timezone)->format('Y-m-d') : null,
                            'metadata' => $arguments['metadata'] ?? [],
                        ];

                        $user = Auth::user();
                        if ($user) {
                            $values['schedulable_type'] = $user::class;
                            $values['schedulable_id'] = $user->id;
                        }

                        if ($start->format('H:i:s') !== '00:00:00') {
                            $values['start_time'] = $start->format('H:i');
                        }

                        if (isset($arguments['end'])) {
                            $end = Carbon::parse($arguments['end'], $timezone);
                            if ($end->format('H:i:s') !== '00:00:00') {
                                $values['end_time'] = $end->format('H:i');
                            }
                        }
                    }
                }

                // Prefer Schema instances
                if ($formOrSchema instanceof Schema) {
                    $formOrSchema->fillPartially($values, array_keys($values));

                    return;
                }

                if (is_object($formOrSchema) && method_exists($formOrSchema, 'fill')) {
                    $formOrSchema->fill($values);

                    return;
                }
            })
            ->after(fn (HasCalendar $livewire) => $livewire->refreshRecords())
            ->cancelParentActions();
    }
}
