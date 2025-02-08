import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthWrapperComponent } from 'src/app/components/auth/auth-wrapper/auth-wrapper.component';

const routes: Routes = [
  { path: '', component: AuthWrapperComponent, title: 'Auth' }
]

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
export class MyauthenticationRoutingModule { }
