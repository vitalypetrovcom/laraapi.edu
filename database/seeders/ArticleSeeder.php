<?php

namespace Database\Seeders;

use Database\Factories\ArticleFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ArticleFactory::factoryForModel ('Article')
            ->count(10)
            ->create();
        // Обращаемся к классу ArticleFactory и методу factoryForModel с указанием к какой модели мы обращаемся 'Article', количества записей count(...), которые нам нужно сгенерировать с помощью фабрики ArticleFactory для модели 'Article' и запускаем метод create
    }
}
