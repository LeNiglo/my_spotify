<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Artist;

class ArtistController extends Controller
{
    public function list(Request $request)
    {
        return Artist::where('name', 'LIKE', "%{$request->search}%")->get();
    }

    public function show(Artist $artist)
    {
        $artist->load('albums', 'albums.tracks', 'albums.genres');
        return $artist;
    }
}
