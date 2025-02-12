import { Component, inject } from '@angular/core';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = []
  private dataService=inject(DataService)
  constructor() {
    this.dataService.$users.subscribe({
      next: (users_: User[] | null) => { if (users_ != null) this.users = users_ }
    })
  }
}
