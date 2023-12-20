<?php

namespace App\Http\Controllers;

use App\Models\NewArticle;
use Illuminate\Http\Request;

class PageController extends Controller { // Контроллер для страниц отображения постов

    public function articleUpdatePage ($id) {

        // Получаем пост по id
        $article = NewArticle::find($id);

        /*dd ($article);*/

        // Проверка на наличие указанного поста
        if (!$article) {
            return abort (404, "Article not found!");
        }

        // Выводим данные в представление
        return view ( 'article_update', compact ('article', 'id'));


    }

}
