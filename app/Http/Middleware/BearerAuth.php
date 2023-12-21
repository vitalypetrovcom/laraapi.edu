<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BearerAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Проверяем авторизацию пользователя (да/нет). Чтобы дать понять системе, что пользователь авторизован - используются заголовки. Заголовки делятся на 2 типа: Response | Request. Response - это заголовки, которые пришли к нам от сервера (заголовок - это ключ-значение). Request - это заголовки, которые мы отправляем через браузер/JS. Нам нужно будет отправить токен в виде заголовка в Request-заголовке (тк мы будем работать через клиента, через JS - мы делаем запрос, передаем этот токен, а сервер этот токен принимает).

        // Получаем bearerToken
        $token = $request->bearerToken ();

        // Загружаем пользователя с данным токеном
        $user = User::where('token', $token)->first ();

        // Проверяем, есть ли у нас пользователь с таким токеном
        if (is_null($user)) { // Если у нас нет пользователя с таким токеном, это говорит о том, что пользователь не авторизован
            return response ()->json ([
                "status" => false,
                "message" => "Access denied!"
            ], 401);
        }




        return $next($request);
    }
}
