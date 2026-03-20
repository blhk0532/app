<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\BookingDataLeads\Pages;

use App\Filament\App\Resources\BookingDataLeads\BookingDataLeadResource;
use Filament\Resources\Pages\CreateRecord;

class CreateBookingDataLead extends CreateRecord
{
    protected static string $resource = BookingDataLeadResource::class;
}
