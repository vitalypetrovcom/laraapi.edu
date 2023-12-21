<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserController extends Controller { // Контроллер для работы с регистрацией и авторизацией пользователей

    public function register (Request $request) { // Метод для регистрации пользователя

        User::create([
            "username" => $request->username,
            "password" => Hash::make ($request->password)
        ]);

        return response ()->json ([
            "status" => true,
            "message" => "User is created!"
        ])->setStatusCode (201, 'User is created!');
    }


// --->> Laravel Passport (Создание полноценной аутентификации по токену) (https://laravel.com/docs/10.x/passport). Это официальная библиотека ларавель, которая работает используя токен. Эта система немного сложнее рассмотренного нами варианта. Так же есть дополнение к ларавель для аутентификации пользователей JWT-AUTH (ее очень часто используют, но у нее есть свои нюансы) (https://github.com/tymondesigns/jwt-auth)



    public function login (Request $request) { // Метод для авторизации пользователя

        // Получаем данные пользователя из формы авторизации
        $user = User::where('username', $request->username)->first (); // Используем метод first, чтобы выгрузить из БД первый полученный результат

        // Проверяем, существует ли указанный пользователь
        if (is_null($user)) {
            return response ()->json ([
                "status" => false,
                "message" => "User is not authorized!"
            ])->setStatusCode (401, "User is not authorized!");
        }

        // Проверяем введенный пользователем пароль на соответствие с паролем в БД
        if (Hash::check ($request->password, $user->password)) {

            // Генерируем токен для конкретного пользователя
            $token = Str::random (150);

            // Присваиваем токен пользователю, которого мы только что авторизовали
            $user->token = $token;

            // Сохраняем данные пользователя
            $user->save ();

            // Вернем токен после авторизации (мы будем использовать его, чтобы выполнять действия, которые будут доступны текущему пользователю, те это наша цифровая подпись к любым запросам, которые должны иметь какого-то посредника)
            return response ()->json ([
                "status" => true,
                "token" => $token
            ]);

        } else {
            return response ()->json ([
                "status" => false,
                "message" => "User is not authorized!"
            ])->setStatusCode (401, "User is not authorized!");
        }

    }

}
