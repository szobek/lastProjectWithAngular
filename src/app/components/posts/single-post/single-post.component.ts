import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
  id!: number
  post!: Post | null
  postWriter!:User
  activatedRoute = inject(ActivatedRoute)
  callService = inject(CallService)
  router = inject(Router)

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.queryParamMap.get('id'));
    this.callService.$posts.subscribe({
      next: (posts: Post[]) => {
        this.post = posts.filter((post: any) => { return post.id === this.id; })[0]
        if(this.post===undefined) this.router.navigateByUrl("/posts")
        document.title=this.post.title
        this.postWriter=(this.callService.$users.value?.filter((user:User)=>user.id===this.post?.userId)[0] as User)
      }
    })
  }
}
