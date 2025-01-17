export class Invoice {
  id: string;
  title: string;
  userId: number;
  completed: boolean;

  constructor(id: string, title: string, userId: number, completed: boolean) {
    this.id = id;
    this.title = title;
    this.userId = userId;
    this.completed = completed;
  }
}