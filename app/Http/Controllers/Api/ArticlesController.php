<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArticlesController extends Controller { // Контроллер для получения постов по api

    public function showArticles() { // Метод для вывода списка постов по api
        $articles = Article::all(); // Выводим все записи из БД
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

    public function putArticle ($id, Request $request) { // Метод для обновления данных поста по id в БД. При отправке данных (например, Postman) методом PUT мы должны использовать только строку (raw JSON), а не form-data, где мы можем отправлять строки и файлы. Если бы нам нужно было обновить картинку поста, в этом случае нам не подходит метод PUT или PATCH - для этого нужно использовать только метод POST (он поддерживает form-data и загрузку файлов)!

        // Указываем только переменные, которые подлежат получению и сохранению в БД (любые другие поля будут проигнорированы)
        $request_data = $request->only(['title', 'content']); // На выходе - массив с данными

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

        // Проверяем наличие поста с указанным id
        $article = Article::find($id);
        if (!$article) { // Если такого поста нет в БД, выдаем страницу c ошибкой в формате json в виде:
            return response()->json([
                "status" => false,
                "message" => "Article Not Found"
            ])->setStatusCode(404, 'Article Not Found'); // Передаем статус ответа
        }

        // Обновляем (перезаписываем) данные поста с указанным id. $request_data является обычным массивом
        $article->title = $request_data['title'];
        $article->content = $request_data['content'];

        // Сохраняем выполненные изменения
        $article->save ();

        // Передаем сообщение об успешном обновлении поста
        return response()->json([
            "status" => true,
            "message" => "Article is updated!"
        ])->setStatusCode(200, 'Article is updated!'); // Передаем статус ответа

    }

    public function patchArticle ($id, Request $request) { // Метод для частичного обновления данных поста по id в БД. Например, если мы хотим заменить только заголовок (title), тогда методом PATCH мы будем передавать только заголовок (title)

        // Указываем только переменные, которые подлежат получению и сохранению в БД (любые другие поля будут проигнорированы)
        $request_data = $request->only(['title', 'content']); // На выходе - массив с данными

        // Проверка наличия данных (заголовков и контента) в массиве $request_data
        if (count ($request_data) == 0) {
            return response()->json([
                "status" => false,
                "message" => "All fields is empty!"
            ])->setStatusCode(422, "All fields is empty!");
        }

        // Указываем правила валидации
        $rules_const = [
            "title" => ['required', 'string'],
            "content" => ['required', 'string']
        ];
        $rules = [];

        foreach ( $request_data as $key => $data ) {
            $rules[$key] = $rules_const[$key];
        }

        /*dd ($rules);*/

        $validator = Validator::make($request_data, $rules);

        // Если ошибка валидации
        if ($validator->fails()) {
            return response()->json([
                "status" => false,
                "errors" => $validator->messages()
            ])->setStatusCode(422);
        }

        // Проверяем наличие поста с указанным id
        $article = Article::find($id);
        if (!$article) { // Если такого поста нет в БД, выдаем страницу c ошибкой в формате json в виде:
            return response()->json([
                "status" => false,
                "message" => "Article Not Found"
            ])->setStatusCode(404, 'Article Not Found'); // Передаем статус ответа
        }

        // Обновляем (перезаписываем) данные поста с указанным id. $request_data является обычным массивом
        foreach ( $request_data as $key => $data ) {
            $article->$key = $data;
        }

        // Сохраняем выполненные изменения
        $article->save ();

        // Передаем сообщение об успешном обновлении поста
        return response()->json([
            "status" => true,
            "message" => "Article is updated!"
        ])->setStatusCode(200, 'Article is updated!'); // Передаем статус ответа
    }

    public function deleteArticle ($id) { // Метод удаления постов из БД по api

        // Проверяем наличие поста с указанным id
        $article = Article::find($id);
        if (!$article) { // Если такого поста нет в БД, выдаем страницу c ошибкой в формате json в виде:
            return response()->json([
                "status" => false,
                "message" => "Article Not Found"
            ])->setStatusCode(404, 'Article Not Found'); // Передаем статус ответа
        }

        // Удаляем пост
        $article->delete ();
        return response()->json([
            "status" => true,
            "message" => "Article is deleted!"
        ])->setStatusCode(200, 'Article is deleted!'); // Передаем статус ответа


    }


}
