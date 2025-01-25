export class Todo{
    id: number;
    title: string;
    userId: number;
    completed: boolean;
    url?:string
  
    constructor(id: number, title: string, userId: number, completed: boolean) {
      this.id = id;
      this.title = title;
      this.userId = userId;
      this.completed = completed;
    }
}