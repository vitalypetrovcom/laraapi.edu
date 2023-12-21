<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Comment;
use App\Models\NewArticle;
use Illuminate\Http\Request;
use App\Http\Resources\Article as ArticleResource;
use App\Http\Resources\ArticleCollection; // Важно! Класс-ресурс ArticleCollection не будет работать без класса-ресурса Article. В любом случае нужно импортировать в use всегда оба класса, даже если единичный класс-ресурс (Article) мы не будем использовать!



class NewArticleController extends Controller
{

    private $articlesList = []; // Создаем переменную $articlesList для добавления дополнительных полей при выводе постов

    public function __construct () { // Метод для использования токена для доступа к ресурсу
        $this->middleware('bearer-auth')->only ('store'); // Используем посредник 'bearer-auth' и метод only (указываем в нем методы текущего контроллера, к которым мы применим данный посредник) (применяем посредник к методу 'store' - мы не хотим, чтобы не авторизованные пользователи могли добавлять посты - только авторизованный пользователь!)
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

       $articles = NewArticle::all (); // Записываем в переменную $articles список всех постов

// --->> Один раз сформировав необходимый ресурс(ресурсы), который будет формировать вывод постов в нужном нам виде мы можем в любом месте других контроллеров (там где нужно вывод постов) эти ресурсы использовать: как ресурс для отображения единичной сущности, так и ресурс для коллекции сущностей
        return response ()->json ([ // Для того, чтобы код работал корректно, создаем специальный класс ресурс ArticleCollection
            "articles" => new ArticleCollection($articles),
        ]);  // -->> При использовании ресурсов, этот короткий заменяет длинный код (закомментирован) ниже, который нам бы пришлось писать каждый раз, когда нам нужно необходимое отображение вывода постов


//        foreach ( $articles as $article ) { // Проходим в цикле по массиву $articles, выбираем поля для отображения и добавляем дополнительные поля и записываем эти данные в массив articlesList[]
//
//            /*$comments = Comment::where('article_id', $article->id)->get();*/
//            $comments = $article->comments; // Вызываем в объекте $article !свойство! (а не метод) comments
//
//            $commentsList = [];
//
//            foreach ( $comments as $comment ) {
//                $commentsList[] = $comment->body;
//            }
//
//            $this->articlesList[] = [
//                "id" => $article->id,
//                "title" => $article->title,
//                "body" => $article->body,
//                "comments" => $commentsList
//            ];
//        }
//
//        return $this->articlesList; // Возвращаем articlesList
//
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // Получаем данные из формы и записываем их в свойства поста
        $article = NewArticle::create([
            'title' => $request->title,
            'body' => $request->body
        ]);

        // Сохраняем полученные данные в БД
       /* $article->save();*/

        return $article;
        /*return response()->json([
            "status" => true,
            "message" => "Post is created!"
        ])->setStatusCode(201, 'Post is created!'); // Передаем статус ответа*/
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        /*$article = NewArticle::find($id);*/

        // Выводим только те поля, которые нам нужны
        /*return [
            "id" => $article->id,
            "title" => $article->title,
            "body" => $article->body,
        ];*/

        // Возвращаем пост с полями (как в предыдущей записи) с использованием класса ресурса ArticleResource с аргументом $article. В итоге мы получаем текущий пост в нужном виде (определяется ресурсом ArticleResource)
        /*return response ()->json ([
           "article" => new ArticleResource($article)
        ]);*/

        return response ()->json ([
            "article" => new ArticleResource(NewArticle::find($id)) // Сокращенный вариант записи выражения
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

//        dd ($request->all ());

        // Проверяем наличие поста с указанным id
        $article = NewArticle::find($id);

        // Обновляем (перезаписываем) данные поста с указанным id.
        if ($request->title) {
            $article->title = $request->title;
        }

        if ($request->body) {
            $article->body = $request->body;
        }


        // Сохраняем выполненные изменения
        $article->save ();

        return $article;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Проверяем наличие поста с указанным id
        $article = NewArticle::find($id);
        // Удаляем пост с указанным id из БД
        $article->delete();

        return response ()->json ([
            "status" => true,
            "message" => "Post is deleted!",
    ])->setStatusCode (200, "Post is deleted!");
    }
}
