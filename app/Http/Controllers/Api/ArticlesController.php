<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArticlesController extends Controller { // Контроллер для получения постов по api

    public function showArticles() { // Метод для вывода списка постов по api
        $articles = Article::all(); // Выводим все записи
        return response()->json($articles); // Возвращаем записи в стандартном формате json (правильное отображение всех заголовков итд.). Так же можем вторым параметром передать желаемый статус (код) ответа json($articles, 201)
    }

    public function showArticle($id) { // Метод для вывода поста по id
        $article = Article::find($id); // Получаем пост по id

        if (!$article) { // Если такого поста нет в БД, выдаем страницу c ошибкой в формате json в виде:
            return response()->json([
                "status" => false,
                "message" => "Post Not Found"
            ])->setStatusCode(404, 'Post Not Found'); // Передаем статус ответа
        }

        return response()->json($article); // Если пост есть, возвращаем его в формате json
    }

    public function storeArticle(Request $request)
    {

        // Указываем только переменные, которые подлежат получению и сохранению в БД (любые другие поля будут проигнорированы)
        $request_data = $request->only(['title', 'content']);

        // Указываем правила валидации и валидируем данные
        $validator = Validator::make($request_data, [
            "title" => ['required', 'string'],
            "content" => ['required', 'string']
        ]);

        // Если ошибка валидации
        if ($validator->fails()) {
            return response()->json([
                "status" => false,
                "errors" => $validator->messages()
            ])->setStatusCode(422);
        }

        // Если валидация прошла успешно, Сохраняем передаваемые данные
        $article = Article::create([
            "title" => $request->title,
            "content" => $request->content
        ]);

        // Выдаем сообщение об успешном сохранении данных
        return response()->json([
            "status" => true,
            "article" => $article
        ])->setStatusCode(201, "Article is store");


    }
}
