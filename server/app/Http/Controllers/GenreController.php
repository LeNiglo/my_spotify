<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Genre;

class GenreController extends Controller
{
    public function list()
    {
        return Genre::all();
    }

    public function show(Genre $genre)
    {
        $genre->load('albums', 'albums.artist', 'albums.tracks', 'albums.tracks.album', 'albums.tracks.album.artist');
        return $genre;
    }
}
