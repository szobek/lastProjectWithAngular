import { Component, inject } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { CallService } from 'src/app/services/call.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  private dataService=inject(DataService)
  posts:Post[]=[]
  users:User[]=[]
  constructor(){
    this.dataService.$users.subscribe({
      next:(users_:User[]|null)=>{
        if(users_ !=null){
          this.users=users_
          this.dataService.$posts.subscribe({
            next:(data:Post[])=>{
              this.posts=data.slice(0,32)
              this.posts.map((post:Post)=>{
                post.writer=this.dataService.$users.value?.filter((user:User)=>post.userId===user.id)[0]
              })
            }
          })
        }
      }
    })

    
  }

}
