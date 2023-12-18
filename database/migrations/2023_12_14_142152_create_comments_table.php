<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->increments ('id');
            $table->unsignedInteger ('article_id')->nullable ();
            $table->text ('body')->nullable ();
            $table->timestamps();

            $table->foreign('article_id')->references('id')->on('new_articles')->onDelete ('cascade'); // Выполняем связь между полем  таблицы 'comments' и поля 'id' таблицы new_articles с помощью установки ограничения внешнего ключа foreign('article_id')->references('id')->on('new_articles'). Важно: эти поля в обеих таблицах должны иметь одинаковый тип и параметры (например, int | int). Дополнительно, используем метод onDelete с указанием аргумента 'cascade'. Мы сейчас организовали связь м ежду этими двумя таблицами таким образом, что когда мы захотим удалить какой-либо пост, все комментарии, которые имеют в поле 'article_id' тот идентификатор, который есть у поста ('article_id' = 'id'), эти комментарии удалятся вместе с этим связанным постом.
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
    }
};
