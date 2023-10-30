import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
interface User{
  id :number,
  name :string,
  username :string,
  password :string,
  email :string,
  dob :string,
  image:string
}
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  editForm!  :FormGroup;
  id:number=0
  constructor(private userService : UsersService, private activatedRoute:ActivatedRoute,private router: Router){
  }  

  ngOnInit(): void {
   
    console.log(this.activatedRoute.snapshot)
    this.activatedRoute.params.subscribe((params) => {
      console.warn(params)
      this.id =parseInt(params['id'])-1   
  });
  console.log(this.userService.userList[this.id].name)
  this.editForm=new FormGroup({
    'name':new FormControl(this.userService.userList[this.id].name,Validators.required),
    'username':new FormControl(this.userService.userList[this.id].username,Validators.required),
    'password':new FormControl(this.userService.userList[this.id].password,Validators.required),
    'email':new FormControl(this.userService.userList[this.id].email,Validators.required),
    'dob':new FormControl(this.userService.userList[this.id].dob,Validators.required)
  })
  }
  
  onSubmit() {
    this.userService.updateUser({ id:this.id+1, ...this.editForm.value })
    this.router.navigate(['/users']);
  }
}
