<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function () {
    return ['status' => 'Hello World !'];
})->name('api.index');

Route::get('/artists', 'ArtistController@list')->name('artists.list');
Route::get('/artists/{artist}', 'ArtistController@show')->name('artists.show');
Route::get('/albums', 'AlbumController@list')->name('albums.list');
Route::get('/albums/{album}', 'AlbumController@show')->name('albums.show');
Route::get('/tracks', 'TrackController@list')->name('tracks.list');
Route::get('/tracks/{track}', 'TrackController@show')->name('tracks.show');
Route::get('/genres', 'GenreController@list')->name('genres.list');
Route::get('/genres/{genre}', 'GenreController@show')->name('genres.show');
