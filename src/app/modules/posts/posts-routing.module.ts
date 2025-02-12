import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from 'src/app/components/posts/create-post/create-post.component';
import { PostListComponent } from 'src/app/components/posts/post-list/post-list.component';
import { SinglePostComponent } from 'src/app/components/posts/single-post/single-post.component';

const routes:Routes = [
  {path:"", component:PostListComponent,title:"Post list"},
  {path:"create-post", component:CreatePostComponent,title:"Create post"},
  {path:"single-post/:id", component:SinglePostComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PostsRoutingModule { }
