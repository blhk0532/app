<?php

declare(strict_types=1);

use App\Actions\TransferSwedenPersonerToRingaDataAction;
use App\Models\RingaData;
use App\Models\SwedenPersoner;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

uses(TestCase::class);

beforeEach(function (): void {
    Schema::dropIfExists('sweden_personer');
    Schema::dropIfExists('ringa_data');

    Schema::create('sweden_personer', function (Blueprint $table): void {
        $table->id();
        $table->string('adress')->nullable();
        $table->string('postnummer')->nullable();
        $table->string('postort')->nullable();
        $table->string('fornamn')->nullable();
        $table->string('efternamn')->nullable();
        $table->string('personnamn')->nullable();
        $table->string('alder')->nullable();
        $table->string('kommun')->nullable();
        $table->string('personnummer')->nullable();
        $table->string('kon')->nullable();
        $table->string('telefon')->nullable();
        $table->json('telefonnummer')->nullable();
        $table->string('civilstand')->nullable();
        $table->string('adressandring')->nullable();
        $table->string('bostadstyp')->nullable();
        $table->string('agandeform')->nullable();
        $table->string('boarea')->nullable();
        $table->string('byggar')->nullable();
        $table->json('ratsit_data')->nullable();
        $table->string('ratsit_se')->nullable();
        $table->boolean('is_active')->default(true);
        $table->timestamps();
    });

    Schema::create('ringa_data', function (Blueprint $table): void {
        $table->id();
        $table->string('gatuadress')->nullable();
        $table->string('postnummer')->nullable();
        $table->string('postort')->nullable();
        $table->string('forsamling')->nullable();
        $table->string('kommun')->nullable();
        $table->string('kommun_ratsit')->nullable();
        $table->string('lan')->nullable();
        $table->string('adressandring')->nullable();
        $table->json('telfonnummer')->nullable();
        $table->string('stjarntacken')->nullable();
        $table->string('fodelsedag')->nullable();
        $table->string('personnummer')->nullable();
        $table->string('alder')->nullable();
        $table->string('kon')->nullable();
        $table->string('civilstand')->nullable();
        $table->string('fornamn')->nullable();
        $table->string('efternamn')->nullable();
        $table->string('personnamn')->nullable();
        $table->string('telefon')->nullable();
        $table->json('telefonnummer')->nullable();
        $table->json('epost_adress')->nullable();
        $table->json('bolagsengagemang')->nullable();
        $table->string('agandeform')->nullable();
        $table->string('bostadstyp')->nullable();
        $table->string('boarea')->nullable();
        $table->string('byggar')->nullable();
        $table->string('fastighet')->nullable();
        $table->json('personer')->nullable();
        $table->json('foretag')->nullable();
        $table->json('grannar')->nullable();
        $table->json('fordon')->nullable();
        $table->json('hundar')->nullable();
        $table->decimal('longitude', 10, 7)->nullable();
        $table->decimal('latitud', 10, 7)->nullable();
        $table->string('google_maps')->nullable();
        $table->string('google_streetview')->nullable();
        $table->string('ratsit_se')->nullable();
        $table->boolean('is_active')->default(true);
        $table->boolean('is_telefon')->default(false);
        $table->boolean('is_hus')->default(false);
        $table->boolean('is_queued')->default(false);
        $table->unsignedBigInteger('user_id')->nullable();
        $table->unsignedBigInteger('team_id')->nullable();
        $table->string('status')->nullable();
        $table->string('outcome')->nullable();
        $table->unsignedInteger('attempts')->default(0);
        $table->timestamps();
    });
});

afterEach(function (): void {
    Schema::dropIfExists('sweden_personer');
    Schema::dropIfExists('ringa_data');
});

it('skips records that already exist in ringa_data by personnummer', function (): void {
    $existing = RingaData::query()->create([
        'personnummer' => '197001011234',
        'personnamn' => 'Anna Andersson',
        'telefon' => '0701111111',
    ]);

    $duplicateRecord = SwedenPersoner::query()->create([
        'adress' => 'Storgatan 1',
        'postnummer' => '11111',
        'postort' => 'Stockholm',
        'fornamn' => 'Anna',
        'efternamn' => 'Andersson',
        'personnamn' => 'Anna Andersson',
        'alder' => '55',
        'kommun' => 'Stockholm',
        'personnummer' => '197001011234',
        'kon' => 'Kvinna',
        'telefon' => '0701111111',
        'telefonnummer' => ['0701111111'],
        'civilstand' => 'Gift',
        'bostadstyp' => 'Villa',
        'agandeform' => 'Ager',
        'ratsit_data' => [
            'fodelsedag' => '1970-01-01',
            'fastighet' => 'Stockholm X',
            'personer' => ['A'],
            'foretag' => [],
            'grannar' => [],
            'fordon' => [],
            'hundar' => [],
        ],
        'is_active' => true,
    ]);

    $newRecord = SwedenPersoner::query()->create([
        'adress' => 'Sveavagen 2',
        'postnummer' => '22222',
        'postort' => 'Stockholm',
        'fornamn' => 'Bertil',
        'efternamn' => 'Bengtsson',
        'personnamn' => 'Bertil Bengtsson',
        'alder' => '44',
        'kommun' => 'Stockholm',
        'personnummer' => '198202021234',
        'kon' => 'Man',
        'telefon' => '0702222222',
        'telefonnummer' => ['0702222222'],
        'civilstand' => 'Ogift',
        'bostadstyp' => 'Lagenhet',
        'agandeform' => 'Bostadsratt',
        'ratsit_data' => [
            'fodelsedag' => '1982-02-02',
            'fastighet' => 'Stockholm Y',
            'personer' => ['B'],
            'foretag' => [],
            'grannar' => [],
            'fordon' => [],
            'hundar' => [],
        ],
        'is_active' => true,
    ]);

    $action = new TransferSwedenPersonerToRingaDataAction;

    $action->handle(
        new Collection([$duplicateRecord, $newRecord]),
        ['user_id' => 1, 'team_id' => 1],
    );

    expect($existing->fresh())->not->toBeNull()
        ->and(RingaData::query()->where('personnummer', '197001011234')->count())->toBe(1)
        ->and(RingaData::query()->where('personnummer', '198202021234')->count())->toBe(1)
        ->and(RingaData::query()->count())->toBe(2);
});
