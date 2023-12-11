<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test API</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body>

<div class="container">
    <div class="row mt-3 articles">

    </div>
    <div class="row mt-3 full-article d-none"> {{-- С помощью параметра d-none  мы скрываем запись до момента нажатия кнопки Show --}}
        <div class="card">
            <div class="card-header">
                Full Post
            </div>
            <div class="card-body">
                <h5 class="card-title article-title"></h5>
                <p class="card-text article-content"></p>
            </div>
        </div>
    </div>
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
<script>
    $.ajax({ // Форма для отправки данных на сервер в jQuery, мы отправляем объект
        url: "/api/articles", // Указываем url
        type: "GET", // Метод передачи данных
        dataType: "json", // Формат данных которые мы будем получать от сервера
        success(data) { // Вызываем метод success, который будет у нас в том случае, если нам пришел ответ об успешном выполнении запроса (200, 2..). Отправляем в него в качестве переменной переменную data (она будет содержать в себе то содержимое, которое возвращает нам api - ответ в json)
            for (let index in data) { // Обращаемся через jQuery к блоку '.articles' и через метод append мы добавим html разметку, в которой мы заменим статичные данные на данные из постов БД
                $('.articles').append(`
                    <div class="card" style="width: 18rem; margin-right: 10px;">
                        <div class="card-body">
                            <h5 class="card-title">${data[index].title}</h5>
                            <p class="card-text">${data[index].content.slice(0, 20)}...</p>
                            <a href="#" class="btn btn-primary" onclick="fullArticle(${data[index].id})">Show</a> <!-- Кнопка для отображения поста полностью. Добавляем на нее функцию fullArticle с помощью onclick -->
                        </div>
                    </div>
                `)
            }
        }
    })

    function fullArticle(id) { // Метод jQuery для получения данных поста по id из массива data по конкретным названиям классов ( article-title, article-content, full-article) в Таблицу Full post
        $.ajax({
            url: "/api/articles/" + id,
            type: "GET",
            dataType: "json",
            success(data) {
                $('.article-title').text(data.title); // Поле с классом .article-title заполняем текстом названия поста text(data.title), тк у нас возвращается не массив, а обычный объект - мы можем сразу обращаться к ключам
                $('.article-content').text(data.content); // Поле с классом .article-content заполняем текстом контента поста text(data.content)
                $('.full-article').removeClass('d-none'); // В классе .full-article удаляем класс 'd-none'
            }
        })
    }
</script>
</body>
</html>
