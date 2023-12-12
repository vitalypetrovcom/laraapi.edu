<?php

use App\Http\Controllers\Api\ArticlesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// GET

/*
 * Получение списка постов из таблицы articles
 * URI: {host}/api/articles
 */

/*Route::get('/articles', [ArticlesController::class, "showArticles"]);*/
Route::get('/articles', 'App\Http\Controllers\Api\ArticlesController@showArticles');

/*
 * Получение одного поста по ID
 * URI: {host}/api/articles/{id}
 */

Route::get('/articles/{id}', [ArticlesController::class, "showArticle"]);

/*
 * Добавление нового поста
 * URI: {host}/api/articles
 */

Route::post ('/articles', [ArticlesController::class, "storeArticle"]);


