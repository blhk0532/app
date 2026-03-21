<?php

declare(strict_types=1);

use App\Models\Person;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

// Source tables have no migrations; create lightweight stubs for each test run.
beforeEach(function (): void {
    foreach (['ratsit_data', 'merinfo_data', 'hitta_data', 'hitta_se', 'merinfos'] as $table) {
        Schema::dropIfExists($table);
    }

    Schema::create('ratsit_data', function ($t): void {
        $t->id();
        $t->text('personnamn')->nullable();
        $t->string('fornamn')->nullable();
        $t->string('efternamn')->nullable();
        $t->string('personnummer')->nullable();
        $t->text('gatuadress')->nullable();
        $t->string('postnummer')->nullable();
        $t->string('postort')->nullable();
        $t->string('alder')->nullable();
        $t->string('kon')->nullable();
        $t->string('civilstand')->nullable();
        $t->longText('epost_adress')->nullable();
        $t->string('forsamling')->nullable();
        $t->string('kommun')->nullable();
        $t->string('lan')->nullable();
        $t->text('adressandring')->nullable();
        $t->string('longitude')->nullable();
        $t->string('latitud')->nullable();
        $t->string('telefon')->nullable();
        $t->longText('telfonnummer')->nullable();
        $t->string('bostadstyp')->nullable();
        $t->string('agandeform')->nullable();
        $t->string('boarea')->nullable();
        $t->string('byggar')->nullable();
        $t->string('fastighet')->nullable();
        $t->longText('foretag')->nullable();
        $t->longText('grannar')->nullable();
        $t->longText('fordon')->nullable();
        $t->longText('hundar')->nullable();
        $t->longText('bolagsengagemang')->nullable();
        $t->boolean('is_active')->default(1);
        $t->boolean('is_hus')->default(0);
        $t->boolean('is_telefon')->default(0);
        $t->boolean('is_queued')->default(0);
        $t->string('kommune_ratsit')->nullable();
        $t->timestamps();
    });

    Schema::create('merinfo_data', function ($t): void {
        $t->id();
        $t->text('personnamn')->nullable();
        $t->string('givenNameOrFirstName')->nullable();
        $t->string('personalNumber')->nullable();
        $t->string('alder')->nullable();
        $t->string('kon')->nullable();
        $t->text('gatuadress')->nullable();
        $t->string('postnummer')->nullable();
        $t->string('postort')->nullable();
        $t->string('telefon')->nullable();
        $t->longText('telefonnummer')->nullable();
        $t->longText('telefoner')->nullable();
        $t->string('bostadstyp')->nullable();
        $t->string('bostadspris')->nullable();
        $t->boolean('is_active')->default(1);
        $t->boolean('is_hus')->default(0);
        $t->boolean('is_telefon')->default(0);
        $t->boolean('is_ratsit')->default(0);
        $t->timestamps();
    });

    Schema::create('hitta_data', function ($t): void {
        $t->id();
        $t->text('personnamn')->nullable();
        $t->string('alder')->nullable();
        $t->string('kon')->nullable();
        $t->text('gatuadress')->nullable();
        $t->string('postnummer')->nullable();
        $t->string('postort')->nullable();
        $t->string('telefon')->nullable();
        $t->longText('telefonnummer')->nullable();
        $t->longText('telefonnumer')->nullable();
        $t->string('bostadstyp')->nullable();
        $t->string('bostadspris')->nullable();
        $t->boolean('is_active')->default(1);
        $t->boolean('is_hus')->default(0);
        $t->boolean('is_telefon')->default(0);
        $t->boolean('is_ratsit')->default(0);
        $t->timestamps();
    });

    Schema::create('hitta_se', function ($t): void {
        $t->id();
        $t->text('personnamn')->nullable();
        $t->string('alder')->nullable();
        $t->string('kon')->nullable();
        $t->text('gatuadress')->nullable();
        $t->string('postnummer')->nullable();
        $t->string('postort')->nullable();
        $t->longText('telefon')->nullable();
        $t->longText('telefonnumer')->nullable();
        $t->string('bostadstyp')->nullable();
        $t->string('bostadspris')->nullable();
        $t->boolean('is_active')->default(1);
        $t->boolean('is_hus')->default(0);
        $t->boolean('is_telefon')->default(0);
        $t->boolean('is_ratsit')->default(0);
        $t->timestamps();
    });

    Schema::create('merinfos', function ($t): void {
        $t->id();
        $t->string('type')->nullable();
        $t->string('title')->nullable();
        $t->string('short_uuid')->nullable();
        $t->text('name')->nullable();
        $t->text('givenNameOrFirstName')->nullable();
        $t->string('personalNumber')->nullable();
        $t->longText('pnr')->nullable();
        $t->json('address')->nullable();
        $t->string('gender')->nullable();
        $t->boolean('is_celebrity')->default(0);
        $t->boolean('has_company_engagement')->default(0);
        $t->integer('number_plus_count')->default(0);
        $t->json('phone_number')->nullable();
        $t->text('url')->nullable();
        $t->text('same_address_url')->nullable();
        $t->timestamps();
    });
});

afterEach(function (): void {
    foreach (['ratsit_data', 'merinfo_data', 'hitta_data', 'hitta_se', 'merinfos'] as $table) {
        Schema::dropIfExists($table);
    }
});

// ---------------------------------------------------------------------------

it('creates a new person record from ratsit_data', function (): void {
    DB::table('ratsit_data')->insert([
        'personnamn' => 'Test Testsson',
        'fornamn' => 'Test',
        'efternamn' => 'Testsson',
        'personnummer' => '198001010000',
        'gatuadress' => 'Storgatan 1',
        'postnummer' => '12345',
        'postort' => 'Stockholm',
        'telefon' => '0701234567',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $this->artisan('personer:sync')->assertSuccessful();

    $person = Person::where('personnummer', '198001010000')->first();
    expect($person)->not->toBeNull()
        ->and($person->personnamn)->toBe('Test Testsson')
        ->and($person->gatuadress)->toBe('Storgatan 1')
        ->and($person->sources)->toContain('ratsit_data');
});

it('deduplicates records with the same personnummer across sources', function (): void {
    DB::table('ratsit_data')->insert([
        'personnamn' => 'Anna Andersson',
        'fornamn' => 'Anna',
        'personnummer' => '197005050001',
        'gatuadress' => 'Lillgatan 5',
        'postnummer' => '54321',
        'postort' => 'Göteborg',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('merinfo_data')->insert([
        'personnamn' => 'Anna Andersson',
        'personalNumber' => '197005050001',
        'gatuadress' => 'Lillgatan 5',
        'postnummer' => '54321',
        'postort' => 'Göteborg',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $this->artisan('personer:sync')->assertSuccessful();

    expect(Person::where('personnummer', '197005050001')->count())->toBe(1);

    $person = Person::where('personnummer', '197005050001')->first();
    expect($person->sources)
        ->toContain('ratsit_data')
        ->toContain('merinfo_data');
});

it('deduplicates by name+address+postnummer when personnummer is absent', function (): void {
    DB::table('hitta_data')->insert([
        'personnamn' => 'Lars Larsson',
        'gatuadress' => 'Byvägen 10',
        'postnummer' => '66600',
        'postort' => 'Malmö',
        'telefon' => '0450123456',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('hitta_se')->insert([
        'personnamn' => 'Lars Larsson',
        'gatuadress' => 'Byvägen 10',
        'postnummer' => '66600',
        'postort' => 'Malmö',
        'telefon' => '0450654321',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $this->artisan('personer:sync')->assertSuccessful();

    expect(
        Person::where('personnamn', 'Lars Larsson')->where('postnummer', '66600')->count()
    )->toBe(1);

    $person = Person::where('personnamn', 'Lars Larsson')->where('postnummer', '66600')->first();
    expect($person->sources)
        ->toContain('hitta_data')
        ->toContain('hitta_se');
});

it('merges phone numbers from multiple sources without duplicates', function (): void {
    DB::table('ratsit_data')->insert([
        'personnamn' => 'Phone Tester',
        'personnummer' => '200001010001',
        'gatuadress' => 'Telefonvägen 1',
        'postnummer' => '11100',
        'postort' => 'Lund',
        'telefon' => '0701234567',
        'telfonnummer' => json_encode(['0701234567', '0709876543']),
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('merinfo_data')->insert([
        'personnamn' => 'Phone Tester',
        'personalNumber' => '200001010001',
        'gatuadress' => 'Telefonvägen 1',
        'postnummer' => '11100',
        'postort' => 'Lund',
        'telefon' => '0701234567',
        'telefonnummer' => json_encode(['0701234567', '0700000001']),
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $this->artisan('personer:sync')->assertSuccessful();

    $person = Person::where('personnummer', '200001010001')->first();
    expect($person->telefonnummer)
        ->toContain('0701234567')
        ->toContain('0709876543')
        ->toContain('0700000001')
        ->toHaveCount(3);
});

it('does not overwrite ratsit_data values with data from lower-priority sources', function (): void {
    DB::table('ratsit_data')->insert([
        'personnamn' => 'Prio Tester',
        'fornamn' => 'CorrectFirstName',
        'personnummer' => '199912120002',
        'gatuadress' => 'Priovägen 2',
        'postnummer' => '22200',
        'postort' => 'Uppsala',
        'alder' => '26',
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    DB::table('hitta_data')->insert([
        'personnamn' => 'Prio Tester',
        'gatuadress' => 'Priovägen 2',
        'postnummer' => '22200',
        'postort' => 'Uppsala',
        'alder' => '99', // should NOT overwrite ratsit's value
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    $this->artisan('personer:sync')->assertSuccessful();

    $person = Person::where('personnummer', '199912120002')->first();
    expect($person->alder)->toBe('26');
});
