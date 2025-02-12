import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { CallService } from 'src/app/services/call.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent {
  id!: number
  post!: Post | null
  postWriter!: User
  activatedRoute = inject(ActivatedRoute)
  private dataService = inject(DataService)
  router = inject(Router)

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.id = Number(params["params"]["id"])
      this.dataService.$posts.subscribe({
        next: (posts: Post[] | null) => {
          if (posts) {
            this.post = posts.filter((post: Post) => { return post.id === this.id })[0]
            this.postWriter = this.dataService.$users.value?.filter((user: User) => { return user.id === this.post?.userId })[0] || {} as User
            document.title = this.post.title
          }
        }
      })
    });
  }
}
