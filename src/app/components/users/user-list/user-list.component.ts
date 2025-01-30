import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { User } from 'src/app/models/User';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatIconModule,
    SharedModule,
    RouterModule,
    CommonModule
  ],
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
