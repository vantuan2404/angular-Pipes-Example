import { Component, VERSION } from '@angular/core';
import { ModelAPP } from '../model.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  now = "2020-06-24T09:00:00.000Z";
  money = 30000000000;
  profile: string = 'tuấn đẹp trai, tài năng và đỉnh !';
  nameButton: boolean = false;

  users: ModelAPP[] = [
  {
    name: "Tiep Phan",
    age: 30
  },
  {
    name: "Tuan Nguyen",
    age: 15
  },
  {
    name: "Chau Tran",
    age: 29
  },
  {
    name: "Tuan Anh",
    age: 16
  }
];
  name:string = null;
  age:number = null;


  changeName(){
    this.nameButton = !this.nameButton;
  }

  newUser(){
    var user = {
      name: this.name,
      age: this.age
    }
    return user
  }


  adUser(){
    var user = this.newUser();
    this.users = [...this.users, user];
    //// add item new and update list users
  }
}
