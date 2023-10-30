import { Injectable } from '@angular/core';

interface User{
      id :number,
      name :string,
      username :string,
      password :string,
      email :string,
      dob :string,
      image:string
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userList:Array<User> = [
    {
      id :1,
      name :'Akshara',
      username :'akshara_2003',
      password :'ak123@',
      email :'akshara@gmail.com',
      dob :'26/6/2003',
      image:'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
    },
  ]
  constructor() { }

  createUser(user :User)
  {
    user.id = this.userList.length+1
    this.userList.push(user);
  }
  getUsers(): User[] {
    return this.userList;
  }

  getUser(id: number): any {
    return this.userList.find((p) => p.id === id);
  }
  updateUser(user: User) :any{
    const index = this.userList.findIndex((p) => p.id === user.id);
    this.userList[index] = user;
  }
}
