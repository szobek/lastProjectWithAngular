import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from 'src/app/components/posts/post-list/post-list.component';
import { SinglePostComponent } from 'src/app/components/posts/single-post/single-post.component';
import { SinglePostTitleComponent } from 'src/app/components/posts/single-post-title/single-post-title.component';
const routes:Routes = [
  {path:"posts", component:PostListComponent,title:"Post list"},
  {path:"single-post", component:SinglePostComponent}
];


@NgModule({
  declarations: [
    SinglePostTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    SinglePostTitleComponent
  ]
})
export class PostsModule { }
