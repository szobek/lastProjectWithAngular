import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent {
callService=inject(CallService)
activatedRoute=inject(ActivatedRoute)
selectedUser!:User
id!:number
userPosts!:Post[]
ngOnInit() {
  this.activatedRoute.paramMap.subscribe((params:any) => {
    this.id=Number(params["params"]["id"])
    this.callService.$users.subscribe({
      next:(users:User[]|null)=>{
        if(users){
          this.selectedUser=users.filter((user:User)=>{return user.id===this.id})[0]
          document.title=this.selectedUser.name
          this.userPosts=this.callService.$posts.value.filter((post:Post)=>{return post.userId===this.selectedUser.id})
        }
      }
    })
  });
}
}
