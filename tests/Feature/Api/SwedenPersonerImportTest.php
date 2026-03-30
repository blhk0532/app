<?php

declare(strict_types=1);

use App\Models\SwedenPersoner;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

it('can import SwedenPersoner via JSON', function () {
    $payload = [
        'data' => [
            [
                'personnummer' => '123456-7890',
                'fornamn' => 'Anna',
                'efternamn' => 'Andersson',
                'postnummer' => '12345',
                'postort' => 'Stockholm',
            ],
            [
                'personnummer' => '234567-8901',
                'fornamn' => 'Bertil',
                'efternamn' => 'Berg',
                'postnummer' => '23456',
                'postort' => 'Göteborg',
            ],
        ],
    ];
    $response = $this->postJson('/api/sweden-personer/import-json', $payload);
    $response->assertStatus(200)->assertJson(['success' => true, 'created' => 2]);
    expect(SwedenPersoner::where('personnummer', '123456-7890')->exists())->toBeTrue();
    expect(SwedenPersoner::where('personnummer', '234567-8901')->exists())->toBeTrue();
});

it('can import SwedenPersoner via CSV file', function () {
    Storage::fake('local');
    $csv = "personnummer,fornamn,efternamn,postnummer,postort\n345678-9012,Cecilia,Carlsson,34567,Malmö\n456789-0123,David,Dahl,45678,Uppsala\n";
    $file = UploadedFile::fake()->createWithContent('import.csv', $csv);
    $response = $this->postJson('/api/sweden-personer/import-file', [
        'file' => $file,
    ]);
    $response->assertStatus(200)->assertJson(['success' => true, 'created' => 2]);
    expect(SwedenPersoner::where('personnummer', '345678-9012')->exists())->toBeTrue();
    expect(SwedenPersoner::where('personnummer', '456789-0123')->exists())->toBeTrue();
});
