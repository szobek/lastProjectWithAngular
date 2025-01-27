import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthWrapperComponent } from 'src/app/components/auth/auth-wrapper/auth-wrapper.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: 'auth', component: AuthWrapperComponent, title: 'Auth' }
]

@NgModule({
  declarations: [
    LoginComponent,
    AuthWrapperComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class MyauthententicationModule { }
