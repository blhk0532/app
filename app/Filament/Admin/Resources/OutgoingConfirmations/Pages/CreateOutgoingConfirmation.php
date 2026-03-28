<?php

namespace App\Filament\Admin\Resources\OutgoingConfirmations\Pages;

use App\Filament\Admin\Resources\OutgoingConfirmations\OutgoingConfirmationResource;
use Filament\Resources\Pages\CreateRecord;

class CreateOutgoingConfirmation extends CreateRecord
{
    protected static string $resource = OutgoingConfirmationResource::class;
}
