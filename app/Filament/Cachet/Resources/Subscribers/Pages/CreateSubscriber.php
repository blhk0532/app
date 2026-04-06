<?php

namespace App\Filament\Cachet\Resources\Subscribers\Pages;

use App\Filament\Cachet\Resources\Subscribers\SubscriberResource;
use Filament\Resources\Pages\CreateRecord;

class CreateSubscriber extends CreateRecord
{
    protected static string $resource = SubscriberResource::class;
}
