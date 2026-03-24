<?php

declare(strict_types=1);

namespace FinityLabs\FinMail\Settings;

use FinityLabs\FinMail\Enums\CleanupFrequency;
use Spatie\LaravelSettings\Settings;

class LoggingSettings extends Settings
{
    public bool $enabled = true;

    public bool $store_rendered_body = true;

    public ?int $retention_days = 90;

    public bool $cleanup_enabled = false;

    public CleanupFrequency $cleanup_frequency = CleanupFrequency::Daily;

    public static function group(): string
    {
        return 'fin-mail-logging';
    }

    /**
     * @return array<string, mixed>
     */
    public static function defaults(): array
    {
        return [
            'enabled' => true,
            'store_rendered_body' => true,
            'retention_days' => 90,
            'cleanup_enabled' => false,
            'cleanup_frequency' => CleanupFrequency::Daily,
        ];
    }
}
