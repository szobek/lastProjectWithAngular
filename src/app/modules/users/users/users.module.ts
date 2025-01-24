import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from 'src/app/components/users/user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleUserComponent } from 'src/app/components/users/single-user/single-user.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {path:"users",component:UserListComponent,title:"User list"},
  {path:"single-user/:id",component:SingleUserComponent},
];

@NgModule({
  declarations: [
    UserListComponent,
    SingleUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [
    UserListComponent,
    SingleUserComponent
  ]
})
export class UsersModule { }
