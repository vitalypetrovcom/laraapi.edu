<?php

use App\Http\Controllers\Api\ArticlesController;

use App\Http\Controllers\Api\NewArticleController;
use App\Http\Controllers\UserController;
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
 * Получение списка постов из таблицы new-articles
 * URI: {host}/api/articles
 */

/*Route::get('/new-articles', [NewArticleController::class, "getAll"]);*/

/*
 * Получение списка постов из таблицы new-articles с использованием метода apiResource
 * URI: {host}/api/articles
 */

Route::apiResource ('new-articles', NewArticleController::class);

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

/*
 * Удаление поста по id с помощью метода DELETE
 * URI: {host}/api/articles/{id}
 */

Route::delete ('/articles/{id}', [ArticlesController::class, "deleteArticle"]);

/*
 * Маршруты для пользователей user
 * URI: {host}/api/
 */

/*
 * Маршрут для регистрации пользователя user
 * URI: {host}/api/register
 */

Route::post ('/register', [UserController::class, "register"]);

/*
 * Маршрут для авторизации пользователя user
 * URI: {host}/api/login
 */

Route::post ('/login', [UserController::class, "login"]);

/*
 * Маршрут для теста. Нам нужно создать посредника, который будет проверять, авторизован ли пользователь и может ли он обратиться к этому url
 * URI: {host}/api/test
 */

Route::get ('test', function () {
    return [
        "key" => \Illuminate\Support\Str::random (30),
        "port" => 4743,
        "api_url" => "http://test-hide-url.dev"
    ];
})->middleware ('bearer-auth'); // Указываем нашему маршруту посредник 'bearer-auth'. Теперь наш маршрут и все запросы по данному маршруту будут работать через посредника.
