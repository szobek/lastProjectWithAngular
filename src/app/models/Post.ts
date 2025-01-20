import { User } from "./User";

export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    writer?:User

    constructor(id: number, title: string, userId: number, body: string) {
        this.id = id;
        this.title = title;
        this.userId = userId;
        this.body = body;
    }
}