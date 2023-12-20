<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf" content="{{ csrf_token () }}"> {{-- Установка csrf токена  для отправки формы через AJAX --}}
    <title>Test API</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
</head>
<body>

<div class="container">
    <div class="row mt-3 articles">

    </div>
    <div class="row mt-3 full-article d-none"> {{-- Форма (раскрывающаяся) для отображения  поста на странице всех постов --}} {{-- С помощью параметра d-none  мы скрываем запись до момента нажатия кнопки Show --}}
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
    <div class="row mt-4 mb-4"> {{-- Форма для добавления поста на странице всех постов. Отправка js onclick="storeArticle() --}}
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

    <hr>
    <div class="row mt-4 mb-4"> {{-- Форма для добавления поста на странице всех постов в таблицу new_articles БД. Стандартная отправка методом POST "Submit" --}}
        <form action="/new-articles" method="post">
            @csrf {{-- Обязательно указываем @csrf токен для отправки формы --}}
            <div class="mb-3">
                <label for="title" class="form-label">NewArticle title</label>
                <input type="text" name="title" class="form-control" id="title">
                {{--<div class="alert alert-danger mt-2 d-none" id="title-error" role="alert">
                </div>--}}
            </div>
            <div class="mb-3">
                <label for="body" class="form-label">NewArticle content</label>
                <textarea name="body" class="form-control" id="body" rows="3"></textarea>
                {{--<div class="alert alert-danger mt-2 d-none" id="content-error" role="alert">
                </div>--}}
            </div>
            <button type="submit" class="btn btn-primary" >Add NewArticle</button>
        </form>
    </div>

</div>





<!-- Modal --> {{-- Всплывающее модальное окно для обновления UPDATE конкретного поста c id --}}
<div class="modal fade" id="update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update Article</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action=""> {{-- Форма для редактирования (заполнения) полей --}}
                    <input type="hidden" id="id-update"> {{-- Поле для идентификации поста по id используя jQuery в функции updateArticle и setFieldsForModalUpdate --}}
                    <div class="mb-3">
                        <label for="title" class="form-label">Article title</label>
                        <input type="text" class="form-control" id="title-update">
                        <div class="alert alert-danger mt-2 d-none" id="title-error" role="alert"> {{-- Если не прошли валидацию поля, вывод ошибки валидации поля --}}

                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Article content</label>
                        <textarea class="form-control" id="content-update" rows="3"></textarea>
                        <div class="alert alert-danger mt-2 d-none" id="content-error" role="alert">

                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer"> {{-- Кнопки внизу модальной формы --}}
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="updateArticle()">Save changes</button>
            </div>
        </div>
    </div>
</div>

<div class="modal" id="delete" tabindex="-1"> {{-- Всплывающее модальное окно для удаления DELETE конкретного поста c id --}}
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Delete article</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <input type="hidden" id="delete-id">
            <div class="modal-body">
                <p>Вы действительно хотите удалить пост - <span id="delete-title"></span>?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" onclick="deleteArticle()">Continue</button>
            </div>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
<script>
    function loadArticles() { // Функция jQuery для отображения списка постов
        $('.articles').html(''); // До того как у нас выполнится ajax запрос, мы можем обратиться к блоку, в который мы добавляем посты ('.articles') и с помощью html метода очистить все, что есть внутри него html('') (это нужно, чтобы посты при обновлении данных в модальном окне не отображались как новые посты, а происходило только обновление редактируемого поста
        $.ajax({
            url: "/api/articles",
            type: "GET",
            dataType: "json",
            success(data) {
                for (let index in data) {
                    $('.articles').append(`
                    <div class="card" style="width: 18rem; margin-right: 10px; margin-bottom: 10px;">
                        <div class="card-body">
                            <h5 class="card-title">${data[index].title}</h5>
                            <p class="card-text">${data[index].content.slice(0, 20)}...</p>
                            <a href="#" class="btn btn-primary" onclick="fullArticle(${data[index].id})">Show</a>
                            <button type="button" onclick="setFieldsForModalUpdate('${data[index].title}', '${data[index].content}', ${data[index].id})" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#update">
                                Update
                            </button> <!-- Кнопка открытия модального окна при выводе каждого поста. Важно! Переменные передаем в одинарных кавычках, чтобы они воспринимались как текст '${data[index].title}'-->
                            <button type="button" onclick="setFieldsForModalDelete('${data[index].title}', ${data[index].id})" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">
                                Delete
                            </button>
                        </div>
                    </div>
                `)
                }
            }
        });
    }

    loadArticles(); /* Запуск jQuery функции loadArticles()  - Отображение страницы со списком всех постов */

    function fullArticle(id) { // Функция для отображения поста в браузере в раскрывающейся форме
        $.ajax({
            url: "/api/articles/" + id, /* url для отображения в браузере поста определенным id */
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
                            <button type="button" onclick="setFieldsForModalUpdate('${data.article.title}', '${data.article.content}', ${data.article.id})" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#update">
                                Update
                            </button> <!-- Кнопка открытия модального окна при выводе каждого поста. Важно! Переменные передаем в одинарных кавычках, чтобы они воспринимались как текст '${data.article.title}'-->
                            <button type="button" onclick="setFieldsForModalDelete('${data.article.title}', ${data.article.id})" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delete">
                                Delete
                            </button>
                        </div>
                    </div>
                `);
                loadArticles(); // Отображаем (перезагружаем) страницу со списком всех постов
                console.log(data)
            }
        })
    }

    function setFieldsForModalUpdate(title, content, id) { // Функция jQuery для вывода данных поста в модальную форму для Update
        $('#title-update').val(title); // Используя jQuery обращаемся к полям, которые у нас есть в модальном окне и заполнить их данными полей поста с определенным id
        $('#content-update').val(content);
        $('#id-update').val(id); // Идентификатор поста по id
    }

    function updateArticle() { // Функция jQuery для обновления данных полей поста с определенным id
        const title = $('#title-update').val(), /* Получаем в качестве констант обновленные данные из полей формы в модальном окне. */
            content = $('#content-update').val(),
            id = $('#id-update').val(); // Идентификатор поста по id

        $.ajax({ // Записываем данные каждого поля для поста с определенным id в БД методом PUT. Делаем ajax запрос,
            url: "/api/articles/" + id, // указываем адрес на обновление данных,
            type: "PUT", // метод "PUT"
            dataType: "json", // данные в формате "json"
            data: { // Наименования полей для обновления
                title, // В современном JS выражение (title: title - ключ: значение) если название ключа совпадает с названием значения, можно просто указывать только название ключа title, следующий аналогичный совпадающий ключ:значение через запятую
                content
            },
            success(data) { // Функция success, в которой мы получаем ответ при успешном обновлении данных и закрываем модальное окно
                $('#update').modal('hide'); // Закрываем модальное окно
                loadArticles(); // Отображаем (перезагружаем) страницу со списком всех постов
            }
        })
    }

    function setFieldsForModalDelete(title, id) { //Функция jQuery для вывода данных поста в модальную форму для Delete
        $('#delete-id').val(id); // Используя jQuery обращаемся к полям, которые у нас есть в модальном окне и заполнить их данными полей поста с определенным id
        $('#delete-title').text(title);
    }

    function deleteArticle() { //Функция jQuery для удаления поста в модальном окне
        const id = $('#delete-id').val();

        $.ajax({
            url: "/api/articles/" + id,
            type: "DELETE",
            dataType: "json",
            success(data) {
                $('#delete').modal('hide'); // Закрываем модальное окно
                loadArticles(); // Отображаем (перезагружаем) страницу со списком всех постов
            }
        })
    }

</script>
</body>
</html>
