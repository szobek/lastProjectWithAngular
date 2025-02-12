import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleUserComponent } from 'src/app/components/users/single-user/single-user.component';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from 'src/app/components/users/user-list/user-list.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SingleUserComponent,UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    SingleUserComponent
  ]
})
export class UsersModule { }
