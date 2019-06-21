export class Post {
    constructor(headline, content, likes) {
        this.headline = headline;
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

    addPost(post) {
        this.posts.push(post);
    }

    sortByLikes() {
        this.posts.sort((a, b) => b.likes - a.likes)
    }

    filterByLikes() {
        return this.posts.filter(o => o.likes > -10);
    }

    getAll() {
        return this.posts;
    }

}

