<?php

use App\Http\Controllers\NewArticleController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/*Route::get('/', function () {
    return view('home');
})->name ('home');*/

Route::get('/', function () {
    return view('welcome');
});

// Маршрут для отображения всех постов из таблицы new_articles
Route::get ('/new-articles', [NewArticleController::class, "index"])->name ('new-articles');

// Маршрут для отображения одного поста из таблицы new_articles
Route::get ('/new-articles/{id}', [NewArticleController::class, "show"])->name ('new-article');

// Маршрут для отправки формы для создания поста методом POST
Route::post ('/new-articles', [NewArticleController::class, "store"]);

// Маршрут для удаления постов
Route::post ('/new-articles/delete', [NewArticleController::class, "destroy"]);

// Маршрут для страницы обновления поста
Route::get('/new-articles/{id}/update', [PageController::class, "articleUpdatePage"]);

// Маршрут для обновления поста
Route::post ('/new-articles/update', [NewArticleController::class, "update"])->name('new-article-update');
