<?php

use Illuminate\Support\Facades\DB;

it('syncs merinfo bulk records into sweden_personer with typed fields', function (): void {
    $payload = [
        'items' => [[
            'short_uuid' => 'sync-typed-1',
            'name' => 'Anna Andersson',
            'givenNameOrFirstName' => 'Anna',
            'personalNumber' => '19900101-1234',
            'gender' => 'female',
            'is_hus' => true,
            'is_telefon' => true,
            'url' => 'https://www.merinfo.se/person/anna-andersson/sync-typed-1',
            'address' => [[
                'street' => 'Storgatan 1',
                'zip_code' => '123 45',
                'city' => 'Stockholm',
            ]],
            'phone_number' => [[
                'raw' => '070-123 45 67',
            ]],
        ]],
    ];

    $response = $this->postJson('/api/merinfo/bulk', $payload);

    $response
        ->assertOk()
        ->assertJsonPath('success', true)
        ->assertJsonPath('data.sweden_personer_created', 1)
        ->assertJsonPath('data.sweden_personer_updated', 0);

    $row = DB::table('sweden_personer')
        ->where('adress', 'Storgatan 1')
        ->where('fornamn', 'Anna')
        ->where('efternamn', 'Andersson')
        ->first();

    expect($row)->not->toBeNull();
    expect($row->postnummer)->toBe('12345');
    expect($row->postort)->toBe('Stockholm');
    expect($row->personnummer)->toBe('19900101-1234');
    expect((int) $row->is_hus)->toBe(1);
    expect((int) $row->is_active)->toBe(1);
    expect($row->kon)->toBe('F');
    expect($row->alder)->toBeInt();
    expect($row->telefon)->toBe('070-123 45 67');
    expect($row->merinfo_link)->toBe('https://www.merinfo.se/person/anna-andersson/sync-typed-1');
});

it('updates existing sweden_personer without overwriting populated fields with null incoming values', function (): void {
    DB::table('sweden_personer')->insert([
        'adress' => 'Storgatan 1',
        'postnummer' => '12345',
        'postort' => 'Stockholm',
        'fornamn' => 'Anna',
        'efternamn' => 'Andersson',
        'personnamn' => 'Anna Andersson',
        'telefon' => '08-555 00 00',
        'is_hus' => false,
        'is_active' => true,
        'is_queue' => false,
        'is_done' => false,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $payload = [
        'items' => [[
            'short_uuid' => 'sync-typed-2',
            'name' => 'Anna Andersson',
            'givenNameOrFirstName' => 'Anna',
            'gender' => 'female',
            'is_hus' => true,
            'url' => 'https://www.merinfo.se/person/anna-andersson/sync-typed-2',
            'address' => [[
                'street' => 'Storgatan 1',
                'zip_code' => '12345',
                'city' => 'Stockholm',
            ]],
        ]],
    ];

    $response = $this->postJson('/api/merinfo/bulk', $payload);

    $response
        ->assertOk()
        ->assertJsonPath('success', true)
        ->assertJsonPath('data.sweden_personer_created', 0)
        ->assertJsonPath('data.sweden_personer_updated', 1);

    $row = DB::table('sweden_personer')
        ->where('adress', 'Storgatan 1')
        ->where('fornamn', 'Anna')
        ->where('efternamn', 'Andersson')
        ->first();

    expect($row)->not->toBeNull();
    expect($row->telefon)->toBe('08-555 00 00');
    expect((int) $row->is_hus)->toBe(1);
    expect($row->merinfo_link)->toBe('https://www.merinfo.se/person/anna-andersson/sync-typed-2');
});
