<?php

declare(strict_types=1);

namespace App\Filament\App\Resources\RingaListan\Schemas;

use Filament\Schemas\Schema;

class RingaDataInfolist
{
    public static function configure(Schema $schema, $record = null, $component = null): Schema
    {
        if (! $record) {
            $record = $schema->getRecord();
        }

        $components = [
            RingaDataInfolistPrimary::make(),
            RingaDataInfolistOutcomes::make($record, $component),
        ];

        $phoneNumbersSection = RingaDataInfolistPhoneNumbers::make($record);

        if ($phoneNumbersSection) {
            $components[] = $phoneNumbersSection;
        }

        $components[] = RingaDataInfolistNotes::make();

        return $schema->components($components);
    }
}
