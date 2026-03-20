<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\PostNums\Pages;

use App\Filament\Queue\Resources\PostNums\PostNumResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePostNum extends CreateRecord
{
    protected static string $resource = PostNumResource::class;
}
