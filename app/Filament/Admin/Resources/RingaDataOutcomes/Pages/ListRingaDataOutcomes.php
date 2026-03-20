<?php

declare(strict_types=1);

namespace App\Filament\Admin\Resources\RingaDataOutcomes\Pages;

use App\Filament\Admin\Resources\RingaDataOutcomes\RingaDataOutcomesResource;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;

class ListRingaDataOutcomes extends ListRecords
{
    protected static string $resource = RingaDataOutcomesResource::class;

    protected function getHeaderActions(): array
    {
        return [];
    }

  public function getHeading(): string|Htmlable|null
  {
    return null;
  }


  public function getBreadcrumbs(): array
  {
    return [];
  }
}
