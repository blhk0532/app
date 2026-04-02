<?php

declare(strict_types=1);

use App\Filament\App\Resources\RingaDatas\Widgets\RingaDataOutcomeWidget;
use App\Models\RingaData;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

use function Pest\Livewire\livewire;

uses(TestCase::class);

beforeEach(function (): void {
    Schema::dropIfExists('ringa_data');

    Schema::create('ringa_data', function (Blueprint $table): void {
        $table->id();
        $table->string('telefon')->nullable();
        $table->longText('telfonnummer')->nullable();
        $table->boolean('is_telefon')->default(false);
        $table->timestamps();
    });
});

afterEach(function (): void {
    Schema::dropIfExists('ringa_data');
});

it('saves unique phone numbers from the add phone numbers action', function (): void {
    $record = RingaData::query()->create([
        'telefon' => null,
        'telfonnummer' => ['0701234567'],
        'is_telefon' => false,
    ]);

    livewire(RingaDataOutcomeWidget::class, ['record' => $record])
        ->callAction('addPhoneNumbers', data: [
            'phone_numbers' => [
                ['number' => '0701234567'],
                ['number' => ' 0707654321 '],
                ['number' => '0701112233'],
                ['number' => ''],
            ],
        ])
        ->assertHasNoActionErrors();

    expect($record->fresh()->telfonnummer)
        ->toBe(['0701234567', '0707654321', '0701112233'])
        ->and($record->fresh()->is_telefon)
        ->toBeTrue();
});
