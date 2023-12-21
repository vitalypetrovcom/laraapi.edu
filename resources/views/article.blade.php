<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf" content="{{ csrf_token () }}"> {{-- Установка csrf токена для отправки формы через AJAX --}}
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>

<div class="container mt-5 ">
    <h2><b>Add New Article</b></h2>
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
        <button type="submit" onclick="event.preventDefault(); addNewArticle()" class="btn btn-primary" >Add NewArticle</button> {{-- Для отправки формы методом ajax добавляем параметр onclick event.preventDefault()(сразу же отключаем у него дефолтное поведение (отправка формы обычным способом, чтобы не выполнял "submit") и затем вызываем метод для отправки формы addNewArticle() ) --}}
    </form>
</div>
</div>


<script>

    function addNewArticle() { // Функция JS для получения значения для переменных title | body из полей формы
        const title = document.querySelector('input[name="title"]').value;
        const body = document.querySelector('textarea[name="body"]').value;

        // Подготавливаем данные для отправки по адресу "/new-articles" нам нужно имитировать форму для отправки (указана выше)
        let formData = new FormData(); // Создаем переменную formData и записываем в нее объект экземпляр класса FormData()
        formData.append('title', title)  // Обращаемся к formData как к переменной и через метод append (указываем ключ поля которое мы хотим отправить и его значение вторым аргументом)
        formData.append('body', body) // Таким образом, как бы имитируем нашу форму выше для отправки данных, добавив в нее все данные


        // Отправляем данные JS методом POST по адресу "/new-articles"
        fetch('/new-articles', {
            method: "POST", // Указываем метод отправки
            body: formData, // Передаем данные, записанные в formData
            headers: { // Нам нужно отправить специальный заголовок с СSRF-TOKEN (он выглядит "X-СSRF-TOKEN") непосредственно с самим СSRF токеном. В методе fetch для этого мы указываем headers (заголовки, это у нас объект): в качестве ключа указываем "X-СSRF-TOKEN" и через двоеточие его значение: используя document.querySelector обращаемся к мета-тегу 'meta[name="csrf"]' и с помощью метода getAttribute мы получим у него значение 'content'
                "X-CSRF-TOKEN":document.querySelector('meta[name="csrf"]').getAttribute('content')
            }
        })

        location.reload(); // Обновление страницы после добавления записи AJAX методом

    }

</script>


<div class="container">
    <div class="mt-5 mb-5 " >
        <h2><b>New Articles</b></h2>
        <hr class="invis">
        @foreach($articles as $article)

            <div class="">
                <h4><a href="{{ route('new-article', ['id' => $article->id]) }}" title="">{{ $article->title }}</a></h4>
                <p>{!! $article->body !!}</p> {{-- В тексте цитаты могут быть различные теги для оформления текста статьи, чтобы их рендерить а не просто отображать как символы, мы используем {!! !!} --}}
                <small>{{ $article->created_at }}</small>

                <div class="d-flex">
                    <a href="/new-articles/{{ $article->id }}/update" type="submit" class="btn mt-3 mb-3 btn-success" style="width: 100px;">Update</a>

                    <form action="/new-articles/delete" method="post" class="mr-3">
                        @csrf
                        <input type="hidden" name="id" value="{{ $article->id }}">
                        <button type="submit" class="btn mt-3 mb-3  btn-danger" style="width: 100px;">Delete</button>
                    </form>


                </div>
            </div>


    <hr class="invis">

    @endforeach
    </div>
</div>



</body>
</html>




