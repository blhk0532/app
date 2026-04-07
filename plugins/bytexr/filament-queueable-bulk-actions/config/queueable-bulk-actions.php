<?php

declare(strict_types=1);
use Bytexr\QueueableBulkActions\Enums\StatusEnum;
use Bytexr\QueueableBulkActions\Filament\Resources\BulkActionResource;
use Bytexr\QueueableBulkActions\Models\BulkAction;
use Bytexr\QueueableBulkActions\Models\BulkActionRecord;
use Filament\Tables\View\TablesRenderHook;

return [
    /**
     * Table names used to created database tables needed for the package
     */
    'tables' => [
        'bulk_actions' => 'bulk_actions',
        'bulk_action_records' => 'bulk_action_records',
    ],

    /**
     * Models used in the package, they can be overridden with your own models, just make sure to extend the ones below
     */
    'models' => [
        'bulk_action' => BulkAction::class,
        'bulk_action_record' => BulkActionRecord::class,
    ],

    /**
     * Where to render notification components.
     *
     * More information: 'https://ndsth.com'/4.x/advanced/render-hooks
     */
    'render_hook' => TablesRenderHook::TOOLBAR_BEFORE,

    /**
     * How often notification component will be polled, set to null if don't want to poll
     */
    'polling_interval' => '5s',

    /**
     * Which queue connection and queue name should be used
     */
    'queue' => [
        'connection' => env('QUEUE_CONNECTION', 'sync'),
        'queue' => 'default',
    ],

    /**
     * Resource used to display historical bulk actions, set to null if you would not like to have this functionality
     */
    'resource' => BulkActionResource::class,

    /**
     * Default colors used to display notifications and statuses. Uses filament colors.
     *
     * More information: 'https://ndsth.com'/3.x/support/colors
     */
    'colors' => [
        StatusEnum::QUEUED->value => 'gray',
        StatusEnum::IN_PROGRESS->value => 'info',
        StatusEnum::FINISHED->value => 'success',
        StatusEnum::FAILED->value => 'danger',
    ],
];
