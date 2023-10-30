import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userData:Array<any> = []
  constructor(private usersService : UsersService, private router:Router, private activatedRoute:ActivatedRoute){  
  this.userData = this.usersService.userList; 
}
}