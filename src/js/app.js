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