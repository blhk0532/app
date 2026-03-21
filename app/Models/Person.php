<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $table = 'personer';

    protected $fillable = [
        'personnummer',
        'personnamn',
        'fornamn',
        'efternamn',
        'fodelsedag',
        'alder',
        'kon',
        'civilstand',
        'epost_adress',
        'gatuadress',
        'postnummer',
        'postort',
        'forsamling',
        'kommun',
        'lan',
        'adressandring',
        'longitude',
        'latitud',
        'telefonnummer',
        'bostadstyp',
        'bostadspris',
        'agandeform',
        'boarea',
        'byggar',
        'fastighet',
        'foretag',
        'grannar',
        'fordon',
        'hundar',
        'bolagsengagemang',
        'sources',
    ];

    protected $casts = [
        'telefonnummer' => 'array',
        'sources' => 'array',
    ];
}
