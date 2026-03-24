<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SwedenGator extends Model
{
    use HasFactory;

    protected $table = 'sweden_gator';

    /** @var array<int, string> */
    protected $fillable = [
        'gata', 'post_nummer', 'post_ort', 'kommun', 'lan', 'latitude', 'longitude', 'personer', 'foretag',
    ];

    /**
     * @return array{lat: string, lng: string}
     */
    public static function getLatLngAttributes(): array
    {
        return [
            'lat' => 'latitude',
            'lng' => 'longitude',
        ];
    }
}
