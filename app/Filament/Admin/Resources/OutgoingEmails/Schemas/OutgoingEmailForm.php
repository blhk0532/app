<?php

namespace App\Filament\Admin\Resources\OutgoingEmails\Schemas;

use Filament\Schemas\Schema;

class OutgoingEmailForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                //
            ]);
    }
}
