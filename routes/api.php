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

/*
 * Изменение (редактирование/обновление) поста в БД с помощью методов PUT | PATCH.
 * PUT метод отвечает за то, чтобы обновить полностью всю запись (пост содержит заголовок и контент, метод PUT обновит и заголовок и контент). PATCH метод позволяет обновлять только те данные, которые мы отправили (если мы отправили только измененный заголовок, тогда будет перезаписан только данный заголовок, а контент поста останется без изменений)
 * URI: {host}/api/articles/{id}
 */

/*
 * Изменение (редактирование/обновление) поста с помощью метода PUT
 * URI: {host}/api/articles/{id}
 */

Route::put ('/articles/{id}', [ArticlesController::class, "putArticle"]);

/*
 * Изменение частичное (редактирование/обновление) поста с помощью метода PATCH
 * URI: {host}/api/articles/{id}
 */

Route::patch ('/articles/{id}', [ArticlesController::class, "patchArticle"]);
