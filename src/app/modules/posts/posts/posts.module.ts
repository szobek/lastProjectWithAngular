import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from 'src/app/components/posts/post-list/post-list.component';
import { SinglePostComponent } from 'src/app/components/posts/single-post/single-post.component';
import { SinglePostTitleComponent } from 'src/app/components/posts/single-post-title/single-post-title.component';
import { SharedModule } from '../../shared/shared.module';
import { CreatePostComponent } from 'src/app/components/posts/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const routes:Routes = [
  {path:"posts", component:PostListComponent,title:"Post list"},
  {path:"create-post", component:CreatePostComponent,title:"Create post"},
  {path:"single-post", component:SinglePostComponent}
];


@NgModule({
  declarations: [
    PostListComponent,
    SinglePostTitleComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[
    PostListComponent,
    SinglePostTitleComponent
  ]
})
export class PostsModule { }
