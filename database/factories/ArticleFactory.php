<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->words (3, true),
            'content' => $this->faker->paragraph (1),
            'created_at' => $this->faker->dateTime (),
            'updated_at' => $this->faker->dateTime (),
        ];
    }
}
