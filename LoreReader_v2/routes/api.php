<?php

use App\Http\Controllers\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\ChampionController;
use \App\Http\Controllers\StoryController;
use \App\Http\Controllers\LocationController;
use \App\Http\Controllers\HomeController;

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


Route::get('create/latest/champion/files', [ChampionController::class, 'index'])->middleware('api');
Route::get('champions/all', [ChampionController::class, 'index'])->middleware('api');
Route::get('stories/all', [StoryController::class, 'index'])->middleware('api');
Route::get('locations/all', [LocationController::class, 'index'])->middleware('api');
Route::get('files/all', [StoryController::class, 'files'])->middleware('api');
Route::get('champion/{slug}', [ChampionController::class, 'show'])->middleware('api');
Route::get('story/{text_id}', [StoryController::class, 'show'])->middleware('api');
Route::get('location/{slug}', [LocationController::class, 'show'])->middleware('api');
Route::get('search/{search_term}', [SearchController::class, 'show'])->middleware('api');
Route::get('home', [HomeController::class, 'index'])->middleware('api');