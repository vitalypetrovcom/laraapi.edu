<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewArticle extends Model
{
    protected $fillable = ['title', 'body'];

    public function comments () { // Метод для связи моделей NewArticle и Comment

        return $this->hasMany (Comment::class, 'article_id', 'id'); // Указываем модель, с которой мы делаем связь Comment::class, внешний ключ (из таблицы comments) article_id и локальный ключ (ключ в нашей таблице new_articles) . Данная запись вернет все комментарии, у которых article_id (внешний ключ) будет относиться к идентификатору текущего поста id (локальный ключ)

    }

}
