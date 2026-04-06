<?php

namespace App\Filament\Cachet\Resources\Users\Pages;

use App\Filament\Cachet\Resources\Users\UserResource;
use Filament\Resources\Pages\CreateRecord;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;
}
