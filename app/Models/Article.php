<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Article extends Model
{

    protected $fillable = ['title', 'content', 'created_at', 'updated_at'];



/* ---------- Eloquent: Accessors & Mutators. Accessors (Getters, геттеры), Mutators (Setters, сеттеры). Это методы, которые позволяют работать с аттрибутами, устанавливать и получать их значения. -----------*/

    public function setTitleAttribute ($value) { // Получает (форма/сидер) и устанавливает (сохраняет в БД). Мутатор для установки названия статей title в таблице posts в БД. Аргументом передаем значение title из формы для заполнения
        $this->attributes['title'] = Str::title ($value); // Для записи атрибута 'title' в нужном нам формате (Каждое слово с большой буквы) используем класс-хелпер Support\Str и метод title, в который мы передаем значением $value

    }

    /*public function getTitleAttribute ($value) { // Получает (таблица БД) и выводит (в браузер). Аксессор для получения названия статей title из таблицы posts БД в нужном нам формате. Аргументом передаем значение title из БД. Мы должны вернуть $value и как-то его обработать (что-то с ним сделать)
        return Str::upper ($value); // Для получения атрибута 'title' в нужном нам формате (Каждое слово большими буквами) используем класс-хелпер Support\Str и метод upper, в который мы передаем значением $value

    }*/

}
