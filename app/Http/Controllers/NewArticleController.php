<?php

namespace App\Http\Controllers;

use App\Models\NewArticle;
use Illuminate\Http\Request;

class NewArticleController extends Controller { // Контроллер для работы с постами

    public function index () {

        $articles = NewArticle::all ();
        return view ('article', compact ('articles'));

    }

    public function store (Request $request) {

        // Ограничиваем получаемые данные полями title | body
        $request_data = $request->only (['title', 'body']);

        // Получаем данные из формы и записываем их в свойства поста
        $article = NewArticle::create([
            'title' => $request_data['title'],
            'body' => $request_data['body']
        ]);

        // Сохраняем полученные данные в БД
        /* $article->save();*/

        if ($article) { // Возврат на страницу с которой отправляли форму
            return redirect ()->back ();
        } else {
            return false;
        }
    }

    public function destroy (Request $request) {

        // Получим пост по id
        $article = NewArticle::find($request->id);

        // Если такого поста нет, выдаем ошибку 404
        if (!$article) {
            return abort(404, 'Article not found!');
        }

        // Если пост есть, удаляем его
        $article->delete ();

        // Возвращаемся на предыдущую страницу
        return redirect ()->back ();
    }

    public function update (Request $request) {

        // Ограничиваем получаемые данные полями title | body
        $request_data = $request->only (['title', 'body', 'id']);

//        dd ($request_data);

        // Получаем пост по id
        $article = NewArticle::find($request_data['id']);

        // Если такого поста нет, выдаем ошибку 404
        if (!$article) {
            return abort(404, 'Article not found!');
        }

        // Если пост есть, обновляем (перезаписываем) его
        $article->title = $request_data['title'];
        $article->body = $request_data['body'];

        // Сохраняем данные поста в БД
        $article->save ();

        // Возвращаемся на страницу /new-articles
        return redirect ()->route ('new-articles');

    }

}
