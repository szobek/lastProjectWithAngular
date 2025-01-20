import { Component, inject } from '@angular/core';
import { User } from 'src/app/models/User';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = []
  callService = inject(CallService)
  constructor() {
    this.callService.$users.subscribe({
      next: (users_: User[] | null) => { if (users_ != null) this.users = users_ }
    })
  }

}
