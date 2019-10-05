<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Album;

class AlbumController extends Controller
{
    public function list(Request $request)
    {
        return Album::where('name', 'LIKE', "%{$request->search}%")->get();
    }

    public function show(Album $album)
    {
        $album->load('artist', 'genres', 'tracks', 'tracks.album', 'tracks.album.artist');
        return $album;
    }
}
