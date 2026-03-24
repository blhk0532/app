<?php

declare(strict_types=1);

use App\Actions\BackfillSwedenCoordinates;
use Illuminate\Container\Container;
use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\Schema;

beforeEach(function () {
    $container = new Container;
    Container::setInstance($container);

    Facade::clearResolvedInstances();
    Facade::setFacadeApplication($container);

    $capsule = new Capsule($container);
    $capsule->addConnection([
        'driver' => 'sqlite',
        'database' => ':memory:',
        'prefix' => '',
    ]);

    $capsule->setAsGlobal();
    $capsule->bootEloquent();

    $container->instance('db', $capsule->getDatabaseManager());
    $container->instance('db.connection', $capsule->getConnection());
    $container->instance('db.schema', $capsule->schema());

    Schema::create('sweden_adresser', function (Blueprint $table): void {
        $table->id();
        $table->string('adress')->nullable();
        $table->string('postnummer')->nullable();
        $table->string('postort')->nullable();
        $table->string('kommun')->nullable();
        $table->string('lan')->nullable();
        $table->unsignedInteger('personer')->nullable();
        $table->unsignedInteger('företag')->nullable();
        $table->unsignedInteger('adresser')->nullable();
        $table->string('ratsit_link')->nullable();
        $table->boolean('is_active')->default(true);
        $table->boolean('is_queue')->default(false);
        $table->boolean('is_done')->default(false);
        $table->timestamps();
    });

    Schema::create('sweden_gator', function (Blueprint $table): void {
        $table->id();
        $table->string('gata')->nullable();
        $table->string('postnummer')->nullable();
        $table->string('postort')->nullable();
        $table->string('kommun')->nullable();
        $table->string('lan')->nullable();
        $table->unsignedInteger('personer')->nullable();
        $table->unsignedInteger('företag')->nullable();
        $table->unsignedInteger('adresser')->nullable();
        $table->string('ratsit_link')->nullable();
        $table->boolean('is_active')->default(true);
        $table->boolean('is_queue')->default(false);
        $table->boolean('is_done')->default(false);
        $table->timestamps();
    });

    Schema::create('sweden_personer', function (Blueprint $table): void {
        $table->id();
        $table->string('adress')->nullable();
        $table->string('postnummer')->nullable();
        $table->string('postort')->nullable();
        $table->string('fornamn')->nullable();
        $table->string('efternamn')->nullable();
        $table->string('personnamn')->nullable();
        $table->integer('alder')->nullable();
        $table->string('kommun')->nullable();
        $table->string('personnummer')->nullable();
        $table->string('kon')->nullable();
        $table->string('telefon')->nullable();
        $table->text('telefonnummer')->nullable();
        $table->string('civilstand')->nullable();
        $table->string('adressandring')->nullable();
        $table->string('bostadstyp')->nullable();
        $table->string('agandeform')->nullable();
        $table->string('boarea')->nullable();
        $table->string('byggar')->nullable();
        $table->unsignedInteger('personer')->nullable();
        $table->string('ratsit_link')->nullable();
        $table->text('ratsit_data')->nullable();
        $table->string('hitta_link')->nullable();
        $table->text('hitta_data')->nullable();
        $table->string('merinfo_link')->nullable();
        $table->text('merinfo_data')->nullable();
        $table->string('eniro_link')->nullable();
        $table->text('eniro_data')->nullable();
        $table->string('upplysning_link')->nullable();
        $table->text('upplysning_data')->nullable();
        $table->string('mrkoll_link')->nullable();
        $table->text('mrkoll_data')->nullable();
        $table->boolean('is_hus')->default(false);
        $table->boolean('is_owner')->default(false);
        $table->boolean('is_active')->default(true);
        $table->boolean('is_queue')->default(false);
        $table->boolean('is_done')->default(false);
        $table->timestamps();
    });

    Schema::create('sweden_geo', function (Blueprint $table): void {
        $table->id();
        $table->string('postnummer')->nullable();
        $table->string('postort')->nullable();
        $table->string('kommun')->nullable();
        $table->string('lan')->nullable();
        $table->decimal('latitude', 10, 7)->nullable();
        $table->decimal('longitude', 10, 7)->nullable();
        $table->boolean('is_active')->default(true);
        $table->boolean('is_queue')->default(false);
        $table->boolean('is_done')->default(false);
        $table->timestamps();
    });

    Schema::create('ratsit_postorter', function (Blueprint $table): void {
        $table->id();
        $table->string('post_ort')->nullable();
        $table->string('kommun')->nullable();
        $table->decimal('lat', 10, 8)->nullable();
        $table->decimal('lng', 11, 8)->nullable();
        $table->string('post_nummer')->nullable();
        $table->integer('personer_count')->nullable();
        $table->integer('foretag_count')->nullable();
        $table->string('personer_link')->nullable();
        $table->boolean('personer_link_status')->default(false);
        $table->string('foretag_link')->nullable();
        $table->string('personer_kommun')->nullable();
        $table->string('foretag_kommun')->nullable();
        $table->boolean('foretag_link_status')->default(false);
        $table->timestamps();
    });

    Schema::create('ratsit_data', function (Blueprint $table): void {
        $table->id();
        $table->text('gatuadress')->nullable();
        $table->text('postnummer')->nullable();
        $table->text('postort')->nullable();
        $table->text('kommun')->nullable();
        $table->text('lan')->nullable();
        $table->text('adressandring')->nullable();
        $table->longText('telfonnummer')->nullable();
        $table->text('stjarntacken')->nullable();
        $table->text('fodelsedag')->nullable();
        $table->text('personnummer')->nullable();
        $table->text('alder')->nullable();
        $table->text('kon')->nullable();
        $table->text('civilstand')->nullable();
        $table->text('fornamn')->nullable();
        $table->text('efternamn')->nullable();
        $table->text('personnamn')->nullable();
        $table->text('telefon')->nullable();
        $table->longText('epost_adress')->nullable();
        $table->text('agandeform')->nullable();
        $table->text('bostadstyp')->nullable();
        $table->text('boarea')->nullable();
        $table->text('byggar')->nullable();
        $table->text('fastighet')->nullable();
        $table->longText('personer')->nullable();
        $table->longText('foretag')->nullable();
        $table->longText('grannar')->nullable();
        $table->longText('fordon')->nullable();
        $table->longText('hundar')->nullable();
        $table->longText('bolagsengagemang')->nullable();
        $table->text('longitude')->nullable();
        $table->text('latitud')->nullable();
        $table->text('google_maps')->nullable();
        $table->text('google_streetview')->nullable();
        $table->text('ratsit_se')->nullable();
        $table->boolean('is_active')->default(true);
        $table->boolean('is_hus')->default(false);
        $table->boolean('is_telefon')->default(false);
        $table->text('kommun_ratsit')->nullable();
        $table->boolean('is_queued')->default(false);
        $table->timestamps();
    });

    Schema::create('ratsit_kommuner', function (Blueprint $table): void {
        $table->id();
        $table->string('kommun')->nullable();
        $table->integer('personer_count')->nullable();
        $table->integer('foretag_count')->nullable();
        $table->string('personer_link')->nullable();
        $table->integer('personer_postorter')->nullable();
        $table->string('foretag_link')->nullable();
        $table->integer('foretag_postorter')->nullable();
        $table->decimal('lat', 10, 7)->nullable();
        $table->decimal('lng', 10, 7)->nullable();
        $table->timestamps();
    });
});

it('adds latitude and longitude columns to Sweden tables that were missing', function () {
    $migration = require __DIR__.'/../../database/migrations/2026_03_22_144919_add_coordinates_to_sweden_tables.php';
    $migration->up();

    expect(Schema::hasColumn('sweden_adresser', 'latitude'))->toBeTrue()
        ->and(Schema::hasColumn('sweden_adresser', 'longitude'))->toBeTrue()
        ->and(Schema::hasColumn('sweden_gator', 'latitude'))->toBeTrue()
        ->and(Schema::hasColumn('sweden_gator', 'longitude'))->toBeTrue()
        ->and(Schema::hasColumn('sweden_personer', 'latitude'))->toBeTrue()
        ->and(Schema::hasColumn('sweden_personer', 'longitude'))->toBeTrue();
});

it('backfills missing Sweden coordinates from sweden_geo and ratsit tables', function () {
    $migration = require __DIR__.'/../../database/migrations/2026_03_22_144919_add_coordinates_to_sweden_tables.php';
    $migration->up();

    $timestamp = now();

    DB::table('sweden_geo')->insert([
        'postnummer' => '111 22',
        'postort' => 'Stockholm',
        'kommun' => 'Stockholm',
        'lan' => 'Stockholm',
        'latitude' => 59.3293000,
        'longitude' => 18.0686000,
        'is_active' => true,
        'is_queue' => false,
        'is_done' => false,
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
    ]);

    DB::table('ratsit_postorter')->insert([
        'post_ort' => 'Goteborg',
        'kommun' => 'Goteborg',
        'lat' => 57.7088700,
        'lng' => 11.9745600,
        'post_nummer' => '222 33',
        'personer_count' => 1,
        'foretag_count' => 1,
        'personer_link' => 'https://example.test/personer',
        'personer_link_status' => true,
        'foretag_link' => 'https://example.test/foretag',
        'personer_kommun' => 'Goteborg',
        'foretag_kommun' => 'Goteborg',
        'foretag_link_status' => true,
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
    ]);

    DB::table('ratsit_data')->insert([
        'gatuadress' => 'Sodergatan 5',
        'postnummer' => '333 44',
        'postort' => 'Malmo',
        'kommun' => 'Malmo',
        'lan' => 'Skane',
        'adressandring' => null,
        'telfonnummer' => null,
        'stjarntacken' => null,
        'fodelsedag' => null,
        'personnummer' => '19000101-0001',
        'alder' => '35',
        'kon' => 'M',
        'civilstand' => 'Ogift',
        'fornamn' => 'Nils',
        'efternamn' => 'Andersson',
        'personnamn' => 'Nils Andersson',
        'telefon' => '0700000000',
        'epost_adress' => null,
        'agandeform' => null,
        'bostadstyp' => null,
        'boarea' => null,
        'byggar' => null,
        'fastighet' => null,
        'personer' => null,
        'foretag' => null,
        'grannar' => null,
        'fordon' => null,
        'hundar' => null,
        'bolagsengagemang' => null,
        'longitude' => '13.0038000',
        'latitud' => '55.6050000',
        'google_maps' => null,
        'google_streetview' => null,
        'ratsit_se' => 'https://example.test/ratsit',
        'is_active' => true,
        'is_hus' => false,
        'is_telefon' => true,
        'kommun_ratsit' => 'Malmo',
        'is_queued' => false,
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
    ]);

    DB::table('sweden_adresser')->insert([
        'adress' => 'Drottninggatan 1',
        'postnummer' => '11122',
        'postort' => 'Stockholm',
        'kommun' => 'Stockholm',
        'lan' => 'Stockholm',
        'personer' => 1,
        'företag' => 0,
        'adresser' => 1,
        'ratsit_link' => null,
        'is_active' => true,
        'is_queue' => false,
        'is_done' => false,
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
    ]);

    DB::table('sweden_gator')->insert([
        'gata' => 'Avenyn',
        'postnummer' => '22233',
        'postort' => 'Goteborg',
        'kommun' => 'Goteborg',
        'lan' => 'Vastra Gotaland',
        'personer' => 1,
        'företag' => 0,
        'adresser' => 1,
        'ratsit_link' => null,
        'is_active' => true,
        'is_queue' => false,
        'is_done' => false,
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
    ]);

    $personId = DB::table('sweden_personer')->insertGetId([
        'adress' => 'Sodergatan 5',
        'postnummer' => '33344',
        'postort' => 'Malmo',
        'fornamn' => 'Nils',
        'efternamn' => 'Andersson',
        'personnamn' => 'Nils Andersson',
        'alder' => 35,
        'kommun' => 'Malmo',
        'personnummer' => '19000101-0001',
        'kon' => 'M',
        'telefon' => '0700000000',
        'telefonnummer' => '[]',
        'civilstand' => 'Ogift',
        'adressandring' => null,
        'bostadstyp' => null,
        'agandeform' => null,
        'boarea' => null,
        'byggar' => null,
        'personer' => 1,
        'ratsit_link' => 'https://example.test/ratsit',
        'ratsit_data' => null,
        'hitta_link' => null,
        'hitta_data' => null,
        'merinfo_link' => null,
        'merinfo_data' => null,
        'eniro_link' => null,
        'eniro_data' => null,
        'upplysning_link' => null,
        'upplysning_data' => null,
        'mrkoll_link' => null,
        'mrkoll_data' => null,
        'is_hus' => false,
        'is_owner' => false,
        'is_active' => true,
        'is_queue' => false,
        'is_done' => false,
        'created_at' => $timestamp,
        'updated_at' => $timestamp,
    ]);

    $stats = (new BackfillSwedenCoordinates)->handle();

    $adress = DB::table('sweden_adresser')->where('postnummer', '11122')->first();
    $gata = DB::table('sweden_gator')->where('postnummer', '22233')->first();
    $person = DB::table('sweden_personer')->where('id', $personId)->first();

    expect($stats)->toHaveKeys(['sweden_adresser', 'sweden_gator', 'sweden_personer'])
        ->and((float) $adress->latitude)->toEqualWithDelta(59.3293, 0.0000001)
        ->and((float) $adress->longitude)->toEqualWithDelta(18.0686, 0.0000001)
        ->and((float) $gata->latitude)->toEqualWithDelta(57.70887, 0.0000001)
        ->and((float) $gata->longitude)->toEqualWithDelta(11.97456, 0.0000001)
        ->and((float) $person->latitude)->toEqualWithDelta(55.605, 0.0000001)
        ->and((float) $person->longitude)->toEqualWithDelta(13.0038, 0.0000001);
});
