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
    <hr>
    <div class="row mt-4 mb-4">
        <form action="">
            <div class="mb-3">
                <label for="title" class="form-label">Article title</label>
                <input type="text" class="form-control" id="title">
                <div class="alert alert-danger mt-2 d-none" id="title-error" role="alert">

                </div>
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">Article content</label>
                <textarea class="form-control" id="content" rows="3"></textarea>
                <div class="alert alert-danger mt-2 d-none" id="content-error" role="alert">

                </div>
            </div>
            <button type="button" class="btn btn-success" onclick="storeArticle()">Add</button>
        </form>
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

    function storeArticle() { // Функция для добавления постов через api используя JS.
        // Будем получать данные из полей формы id="title"/id="content". Для этого, создадим константы const title|content и запишем в них данные из соответствующих полей формы
        const title = $('#title'),
            content = $('#content');

        // Добавляем класс 'd-none' в классы полей с id '#title-error'|'#content-error' для того, чтобы после отображения ошибки данные были введены и форма отправлена заново, поля с ошибками стали снова скрытыми
        $('#title-error').addClass('d-none');
        $('#content-error').addClass('d-none');

        // Обращаемся к jQuery запросу ajax
        $.ajax({
            url: "/api/articles", // url, по которому мы будем добавлять данные
            type: "POST", // Метод добавления "POST"
            dataType: "json", // Тип данных "json" (если это api - тогда всегда "json")
            data: { // Объект, в который мы отправляем поля формы: ключ-значение
                title: title.val(),
                content: content.val()
            },
            error(err) { // Если происходит ошибка, выдаем ошибку
                /*console.log(err.responseJSON)*/
                const data = err.responseJSON; // В константу data записываем массив данных err.responseJSON из консоли нашего браузера при отправке пустых полей формы

                for (let key in err.responseJSON.errors) { // В цикле пройдемся по массиву err.responseJSON.errors с перебором ключей и индексов записей
                    /*console.log(err.responseJSON.errors) - Получаем: */
                    /*
                    Object { title: (1) […], content: (1) […] }
                    content: Array [ "The content field is required." ]
                    0: "The content field is required."
                    length: 1
                    <prototype>: Array []
                    title: Array [ "The title field is required." ]
                    0: "The title field is required."
                    length: 1
                     */

                     let error_text = err.responseJSON.errors[key][0];
                     /* console.log(err.responseJSON.errors[key][0]) - Получаем: */
                    /*
                    The title field is required. // Мы получаем текст ошибок и можем его использовать в дальнейшем
                    The content field is required.
                     */

                    $(`#${key}-error`).removeClass('d-none').text(error_text); // Добавляем записи об ошибках снизу полей формы значение text(error_text) для каждой формы по конкретному id (`#${key}-error`) (id="title-error"|id="content-error") и удаляем класс 'd-none' для скрытия поля
                }



            },
            success(data) { // Если наш пост успешно добавился, метод success, на вход получит данные объекта data
                title.val(''); // Очищаем поле title
                content.val(''); // Очищаем поле content

                /*console.log(data)*/

                $('.articles').append(`
                    <div class="card" style="width: 18rem; margin-right: 10px; margin-bottom: 10px;">
                        <div class="card-body">
                            <h5 class="card-title">${data.article.title}</h5>
                            <p class="card-text">${data.article.content.slice(0, 20)}...</p>
                            <a href="#" class="btn btn-primary" onclick="fullArticle(${data.article.id})">Show</a>
                        </div>
                    </div>
                `);

                /*console.log(data)*/
            }
        })
    }

</script>
</body>
</html>
