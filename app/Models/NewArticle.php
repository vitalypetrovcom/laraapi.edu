<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class NewArticle extends Model
{
    protected $fillable = ['title', 'body', 'created_at', 'updated_at'];

    public function comments () { // Метод для связи моделей NewArticle и Comment

        return $this->hasMany (Comment::class, 'article_id', 'id'); // Указываем модель, с которой мы делаем связь Comment::class, внешний ключ (из таблицы comments) article_id и локальный ключ (ключ в нашей таблице new_articles). Данная запись вернет все комментарии, у которых article_id (внешний ключ) будет относиться к идентификатору текущего поста id (локальный ключ)

    }

/* ---------- Eloquent: Accessors & Mutators. Accessors (Getters, геттеры), Mutators (Setters, сеттеры). Это методы, которые позволяют работать с аттрибутами, устанавливать и получать их значения. -----------*/

    public function setTitleAttribute ($value) { // Получает (форма/сидер) и устанавливает (сохраняет в БД). Мутатор для установки названия статей title в таблице posts в БД. Аргументом передаем значение title из формы для заполнения
        $this->attributes['title'] = Str::title ($value); // Для записи атрибута 'title' в нужном нам формате (Каждое слово с большой буквы) используем класс-хелпер Support\Str и метод title, в который мы передаем значением $value

    }

}
