<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
/*use App\Http\Resources\Comment as CommentResource;
use App\Http\Resources\CommentCollection;*/ // Тк у нас оба ресурса находятся в одном пространстве имен, нам здесь не нужно импортировать классы CommentResource | CommentCollection

class Article extends JsonResource { // Класс для создания ресурса для постов
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array // Метод для использования данных в качестве ресурса - создания ресурса
    {
        // Возвращаем массив, в котором указываем поля, которые мы хотим вернуть
        return [
            "id" => $this->id, // Обращаемся к текущему контексту сущности, чтобы указать здесь ключ нашего поста, который мы хотим к этому ключу привязать
            "title" => $this->title,
            "body" => $this->body,
            /*"comments" => $this->comments // Тк $this ссылается к контексту текущей сущности (текущего поста), он так же имеет доступ к всем отношениям поста (к comments)*/

            // Альтернативный вариант предыдущего кода с использованием ресурса CommentResource | CommentCollection
            "comments" => new CommentCollection($this->comments)
        ];
    }
}
