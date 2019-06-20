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
        <h1>Список постов</h1>
        <div data-id="list"></div>
        `;

        this.listEl = this.parentEl.querySelector("[data-id=list]");
        const posts = this.manager.getAll();

        this.redrawPosts(posts);

    }

    redrawPosts(posts) {
        this.manager.filterByLikes();
        console.log(posts);

        this.manager.sortByLikes();

        this.listEl.innerHTML = '';

        for (const post of posts) {
            const el = document.createElement('div');
            el.className = 'post';
            el.innerHTML = `
            <p>${post.content}</p>
            <button data-action="like">+</button>
            <p>${post.likes}</p>
            <button data-action="dislike">-</button>
            `;

            this.listEl.appendChild(el);
            this.likeEl = el.querySelector("[data-action=like]");
            this.dislikeEl = el.querySelector("[data-action=dislike]");

            this.likeEl.addEventListener('click', () => {
                post.like();
                this.redrawPosts(posts);
            });

            this.dislikeEl.addEventListener('click', () => {
                post.dislike();
                this.redrawPosts(posts);
            });

        }
    }

}

const manager = new PostManager();

manager.addPost(
    new Post(
        'Content 1',
        5,
    )
);
manager.addPost(
    new Post(
        'Content 2',
        8,
    )
);
manager.addPost(
    new Post(
        'Content 3',
        -11,
    )
);
manager.addPost(
    new Post(
        'Content 4',
        15,
    )
);
manager.addPost(
    new Post(
        'Content 5',
        -23,
    )
);

const content = document.getElementById('content');

const liker = new PostWidget(content, manager);