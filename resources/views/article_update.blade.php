<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>

<div class="container">
    <div class="mt-4 mb-4">
        <h2>Update: {{ $article->title }}</h2>

           <div class="row mt-4 mb-4"> {{-- Форма для добавления поста на странице всех постов в таблицу new_articles БД. Стандартная отправка методом POST "Submit" --}}
                <form action="/new-articles/update" method="post">
               {{--<form action="{{ route ('new-article-update', ['id' => $article->id]) }}" method="post">--}}
                    @csrf {{-- Обязательно указываем @csrf токен для отправки формы --}}
                    <input type="hidden" name="id" value="{{ $article->id }}">
                    <div class="mb-3">
                        <label for="title" class="form-label">NewArticle title</label>
                        <input type="text" name="title" value="{{ $article->title}}" class="form-control" id="title">
                        {{--<div class="alert alert-danger mt-2 d-none" id="title-error" role="alert">
                        </div>--}}
                    </div>
                    <div class="mb-3">
                        <label for="body" class="form-label">NewArticle content</label>
                        <textarea name="body" class="form-control" id="body" rows="3">{{ $article->body}}</textarea>
                        {{--<div class="alert alert-danger mt-2 d-none" id="content-error" role="alert">
                        </div>--}}
                    </div>
                    <button type="submit" class="btn btn-success" >Update article</button>
                </form>
            </div>

    </div>
</div>


</body>
</html>
