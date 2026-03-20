<?php

namespace App\Models;

use Database\Factories\PrivateDataFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PrivateData extends Model
{
    /** @use HasFactory<PrivateDataFactory> */
    use HasFactory;

    protected $table = 'private_data';

    public $timestamps = true;

    protected $casts = [
        'telfonnummer' => 'array',
        'telefon' => 'array',
        'ps_telefon' => 'array',
        'ps_epost_adress' => 'array',
        'ps_bolagsengagemang' => 'array',
        'personer' => 'array',
        'foretag' => 'array',
        'grannar' => 'array',
        'fordon' => 'array',
        'hundar' => 'array',
        'bolagsengagemang' => 'array',
        'epost_adress' => 'array',
        'bo_grannar' => 'array',
        'bo_fordon' => 'array',
        'bo_hundar' => 'array',
        'is_active' => 'boolean',
        'is_update' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    protected $fillable = [
        'gatuadress',
        'postnummer',
        'postort',
        'forsamling',
        'kommun',
        'lan',
        'adressandring',
        'bo_gatuadress',
        'bo_postnummer',
        'bo_postort',
        'bo_forsamling',
        'bo_kommun',
        'bo_lan',
        'telfonnummer',
        'telefon',
        'stjarntacken',
        'fodelsedag',
        'personnummer',
        'alder',
        'kon',
        'civilstand',
        'fornamn',
        'efternamn',
        'personnamn',
        'ps_fodelsedag',
        'ps_personnummer',
        'ps_alder',
        'ps_kon',
        'ps_civilstand',
        'ps_fornamn',
        'ps_efternamn',
        'ps_personnamn',
        'ps_telefon',
        'ps_epost_adress',
        'ps_bolagsengagemang',
        'agandeform',
        'bostadstyp',
        'boarea',
        'byggar',
        'bo_agandeform',
        'bo_bostadstyp',
        'bo_boarea',
        'bo_byggar',
        'bo_fastighet',
        'fastighet',
        'personer',
        'foretag',
        'grannar',
        'fordon',
        'hundar',
        'bolagsengagemang',
        'epost_adress',
        'bo_personer',
        'bo_foretag',
        'bo_grannar',
        'bo_fordon',
        'bo_hundar',
        'longitude',
        'latitud',
        'google_maps',
        'google_streetview',
        'ratsit_link',
        'ratsit_se',
        'kommun_ratsit',
        'bo_longitude',
        'bo_latitud',
        'hitta_link',
        'hitta_karta',
        'bostad_typ',
        'bostad_pris',
        'is_active',
        'is_update',
    ];
}
