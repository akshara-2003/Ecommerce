import { Component } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
userData :FormGroup
constructor(private userService :UsersService){
  this.userData = new FormGroup({
    'name' : new FormControl('',Validators.required),
    'username' : new FormControl('',Validators.required),
    'password' :new FormControl('',[Validators.required,Validators.minLength(5)]),
    'email' :new FormControl('',Validators.required),
    'dob' :new FormControl('',Validators.required)
  })
}
createUser(){
  console.log(this.userData.value)
  if(this.userData.valid){
    this.userService.createUser(this.userData.value)
    alert("User created successfully")
  }
  else{
    alert("Enter valid details")
  }
}
}

