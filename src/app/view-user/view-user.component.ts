import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
interface User{
  id? :number,
  name :string,
  username :string,
  password :string,
  email :string,
  dob :string,
  image:string
}
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  currentUser :User|undefined;
  constructor(private activeRoute : ActivatedRoute, private usersService : UsersService){
    this.activeRoute.params.subscribe((params)=>{
    let userIndex = this.usersService.userList.findIndex((b)=>b.id ==params['id'])
    this.currentUser= this.usersService.userList[userIndex]
  })
}
}
