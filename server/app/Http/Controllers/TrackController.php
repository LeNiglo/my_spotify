<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Track;

class TrackController extends Controller
{
    public function list(Request $request)
    {
        return Track::where('name', 'LIKE', "%{$request->search}%")->get();
    }

    public function show(Track $track)
    {
        $track->load('album', 'album.artist', 'albums.genres');
        return $track;
    }
}
