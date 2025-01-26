import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent {
activatedRoute=inject(ActivatedRoute)
router=inject(Router)
private dataService=inject(DataService)
selectedUser!:User
id!:number
userPosts!:Post[]
ngOnInit() {
  this.activatedRoute.paramMap.subscribe((params:any) => {
    this.id=Number(params["params"]["id"])
    this.dataService.$users.subscribe({
      next:(users:User[]|null)=>{
        if(users){
          this.selectedUser=users.filter((user:User)=>{return user.id===this.id})[0]
          if(this.selectedUser==undefined) this.router.navigate(["/users"])
          document.title=this.selectedUser.name
          this.userPosts=this.dataService.$posts.value.filter((post:Post)=>{return post.userId===this.selectedUser.id})
        }
      }
    })
  });
}
}
