<?php

declare(strict_types=1);

namespace Tests\Unit;

use Livewire\Livewire;
use Tests\TestCase;

class WhatsappConnectorLivewireAliasTest extends TestCase
{
    public function test_qr_code_component_is_registered_with_dot_alias(): void
    {
        $this->assertTrue(Livewire::exists('filament-evolution.qr-code-display'));
    }
}
