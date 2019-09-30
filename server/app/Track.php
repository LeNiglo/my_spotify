<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
    protected $fillable = [
        'name',
        'track_no',
        'duration',
        'mp3',
  ];

  public function album()
  {
      return $this->belongsTo(Album::class);
  }
}
