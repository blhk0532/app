<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('personer', function (Blueprint $table): void {
            $table->id();

            // Identity
            $table->string('personnummer', 13)->nullable()->index();
            $table->text('personnamn')->nullable();
            $table->string('fornamn')->nullable();
            $table->string('efternamn')->nullable();
            $table->string('fodelsedag')->nullable();
            $table->string('alder')->nullable();
            $table->string('kon')->nullable();
            $table->string('civilstand')->nullable();
            $table->longText('epost_adress')->nullable();

            // Address
            $table->text('gatuadress')->nullable();
            $table->string('postnummer', 10)->nullable();
            $table->string('postort')->nullable();
            $table->string('forsamling')->nullable();
            $table->string('kommun')->nullable();
            $table->string('lan')->nullable();
            $table->text('adressandring')->nullable();
            $table->string('longitude')->nullable();
            $table->string('latitud')->nullable();

            // Contact
            $table->json('telefonnummer')->nullable();

            // Housing
            $table->string('bostadstyp')->nullable();
            $table->string('bostadspris')->nullable();
            $table->string('agandeform')->nullable();
            $table->string('boarea')->nullable();
            $table->string('byggar')->nullable();
            $table->string('fastighet')->nullable();

            // Related data (rich fields kept as-is from source)
            $table->longText('foretag')->nullable();
            $table->longText('grannar')->nullable();
            $table->longText('fordon')->nullable();
            $table->longText('hundar')->nullable();
            $table->longText('bolagsengagemang')->nullable();

            // Provenance
            $table->json('sources')->nullable();

            $table->timestamps();
        });

        // Composite fallback unique key using prefix lengths (required for TEXT columns)
        // SQLite (used in tests) does not support prefix-length unique indexes
        if (DB::getDriverName() === 'mysql') {
            DB::statement(
                'ALTER TABLE `personer` ADD UNIQUE `personer_name_address_unique` (personnamn(191), gatuadress(191), postnummer)'
            );
        }
    }

    public function down(): void
    {
        Schema::dropIfExists('personer');
    }
};
