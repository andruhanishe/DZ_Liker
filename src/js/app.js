import {PostManager} from "./lib.js";
import {Post} from "./lib.js";

class PostWidget {
    constructor(parentEl, manager) {
        this.parentEl = parentEl;
        this.manager = manager;
        this.init();
    }

    init() {
        this.parentEl.innerHTML = `
        <div class="container">
            <div class="row justify-content-center">
                <h2>Цитатник</h2>
            </div>
            <div class="row justify-content-center">
                <div data-id="list"></div>
            </div>
        </div>
        `;

        this.listEl = this.parentEl.querySelector("[data-id=list]");
        const posts = this.manager.getAll();

        this.redrawPosts(posts);

    }

    redrawPosts(posts) {
        this.manager.sortByLikes();

        this.listEl.innerHTML = '';

        for (const post of posts) {
            const el = document.createElement('div');
            el.className = 'post';
            el.innerHTML = `
            <h4>${post.headline}</h4>
            <div class="content">${post.content}</div>
            <div class="likestatus">
                <button data-action="like" class="rating">+</button>
                <div class="rating score">${post.likes}</div>
                <button data-action="dislike" class="rating">-</button>
            </div>
            
            
            `;

            this.listEl.appendChild(el);
            this.likeEl = el.querySelector("[data-action=like]");
            this.dislikeEl = el.querySelector("[data-action=dislike]");

            this.likeEl.addEventListener('click', () => {
                post.like();
                this.onFilter();
            });

            this.dislikeEl.addEventListener('click', () => {
                post.dislike();
                this.onFilter();
            });
        }
    }

    onFilter (){
        const postsFiltered = this.manager.filterByLikes();
        console.log(postsFiltered);
        this.redrawPosts(postsFiltered);
    }

}

const manager = new PostManager();

manager.addPost(
    new Post(
        'Пост 1',
        'Она: ответь мне, только честно, да или нет, хорошо?\nОн: спрашивай\nОна: почему мужчины смеются над блондинками?\nОн: да',
        7,
    )
);
manager.addPost(
    new Post(
        'Пост 2',
        'Apтиcты нoʙoгoднeй пpoгрaммы Первого канала cтpoгo дeлятcя нa двe гpyппы: "Этo ктo вooбщe тaкoй?" и "Гocпoди, oн eщё жив?!"',
        8,
    )
);
manager.addPost(
    new Post(
        'Пост 3',
        'xxx:\n' +
        'Дочка притащила полгода назад маленького пушистого котенка. Огненно рыжего. Назвали его по приколу Пожар. Все бы ничего, но весь фейл мы ощутили только когда взяли его на дачу и он немного потерялся...',
        -7,
    )
);
manager.addPost(
    new Post(
        'Пост 4',
        'Ехал сегодня в такси. Водитель был в прекрасном настроении: "Я люблю свою работу, - говорит он, - Сам себе начальник, никто мне не указ." А я ему: "Здесь налево".\n',
        5,
    )
);
manager.addPost(
    new Post(
        'Пост 5',
        'ххх: Заметив дыру на футболке, я уже было передумал заходить и хотел вернуться. Но тут она порылась в сумочке и выудив пластырь заклеила дыру с изнанки. Оставшиеся видимыми части пластыря закрасила черной ручкой. Все, говорит, пошли. Вот тогда то я и понял что это моя будущая жена.',
        -5,
    )
);

const content = document.getElementById('root');

const liker = new PostWidget(content, manager);