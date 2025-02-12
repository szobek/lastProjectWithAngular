import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from 'src/app/components/posts/post-list/post-list.component';
import { SinglePostComponent } from 'src/app/components/posts/single-post/single-post.component';
import { SinglePostTitleComponent } from 'src/app/components/posts/single-post-title/single-post-title.component';
import { SharedModule } from '../shared/shared.module';
import { CreatePostComponent } from 'src/app/components/posts/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './posts-routing.module';




@NgModule({
  declarations: [
    PostListComponent,
    SinglePostTitleComponent,
    CreatePostComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PostsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  
})
export class PostsModule { }
