<?php

declare(strict_types=1);
use Zap\Services\ScheduleService;

if (! function_exists('zap')) {
    /**
     * Get the Zap service instance.
     */
    function zap(): ScheduleService
    {
        return app('zap');
    }
}
