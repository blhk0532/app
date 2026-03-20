<?php

declare(strict_types=1);

namespace App\Filament\Queue\Resources\BookingDataLeads\Pages;

use App\Filament\Queue\Resources\BookingDataLeads\BookingDataLeadResource;
use Filament\Resources\Pages\CreateRecord;

class CreateBookingDataLead extends CreateRecord
{
    protected static string $resource = BookingDataLeadResource::class;
}
