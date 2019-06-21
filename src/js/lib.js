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

    filterByLikes(limitDislikes) {
        return this.posts.filter(o => o.likes > limitDislikes);
    }

    getAll() {
        return this.posts;
    }

}

export function calculate (a, b) {
    const total = a + b;
    return total;
}

