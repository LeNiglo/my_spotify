<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = [
        'name',
        'description',
        'bio',
        'photo',
    ];

    public function albums()
    {
        return $this->hasMany(Album::class);
    }
}
