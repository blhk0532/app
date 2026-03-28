<?php

declare(strict_types=1);

namespace Livewire\Facades;

use Illuminate\Support\Facades\Facade;
use Livewire\Features\SupportFileUploads\GenerateSignedUploadUrl;

/**
 * @internal
 *
 * @method static string forLocal()
 * @method static string forS3($file, $visibility = 'private')
 *
 * @see GenerateSignedUploadUrl
 */
class GenerateSignedUploadUrlFacade extends Facade
{
    public static function getFacadeAccessor()
    {
        return GenerateSignedUploadUrl::class;
    }
}
