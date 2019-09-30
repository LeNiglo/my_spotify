<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $fillable = [
        'name',
        'description',
        'cover',
        'cover_small',
        'text',
        'release_date',
        'popularity',
    ];

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'genres_albums');
    }

    public function tracks()
    {
        return $this->hasMany(Track::class);
    }
}
