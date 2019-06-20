export class Post {
    constructor(content, likes) {
        this.content = content;
        this.likes = likes;
    }
    like(){
        this.likes++;
    }

    dislike() {
        this.likes--;
    }
}

export class PostManager {
    constructor() {
        this.posts = [];
    }

    addPost(posts) {
        this.posts.push(posts);
    }

    sortByLikes() {
        this.posts.sort((a, b) => b.likes - a.likes)
    }

    filterByLikes() {
        this.posts.filter(o => o.likes > -10);
    }

    getAll() {
        return this.posts;
    }

}

