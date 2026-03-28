<?php

namespace App\Filament\Admin\Resources\OutgoingEmails\Pages;

use App\Filament\Admin\Resources\OutgoingEmails\OutgoingEmailResource;
use Filament\Resources\Pages\CreateRecord;

class CreateOutgoingEmail extends CreateRecord
{
    protected static string $resource = OutgoingEmailResource::class;
}
