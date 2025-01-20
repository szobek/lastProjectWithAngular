export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;

    constructor(id: number, title: string, userId: number, body: string) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.body = body;
    }
}