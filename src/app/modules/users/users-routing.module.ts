import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SingleUserComponent } from 'src/app/components/users/single-user/single-user.component';
import { UserListComponent } from 'src/app/components/users/user-list/user-list.component';


const routes: Routes = [
  {path:"",component:UserListComponent,title:"User list"},
  {path:"single-user/:id",component:SingleUserComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
