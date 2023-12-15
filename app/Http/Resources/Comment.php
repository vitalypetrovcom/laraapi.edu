<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Comment extends JsonResource { // Класс для создания ресурса для комментариев
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // Возвращаем массив, в котором указываем поля, которые мы хотим вернуть
        return [
            "id" => $this->id, // Обращаемся к текущему контексту сущности, чтобы указать здесь ключ нашего комментария, который мы хотим к этому ключу привязать
            "body" => $this->body,

        ];
    }
}
