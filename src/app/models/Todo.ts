export class Todo{
    id: string;
    title: string;
    userId: number;
    completed: boolean;
    url?:string
  
    constructor(id: string, title: string, userId: number, completed: boolean) {
      this.id = id;
      this.title = title;
      this.userId = userId;
      this.completed = completed;
    }
}