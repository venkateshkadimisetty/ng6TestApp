import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() {
  }

  username : string
  password : string

  login(event) : void {
    console.log("event",event);
    if(this.username == 'admin' && this.password == 'admin'){
     //this.router.navigate(["user"]);
     alert("login Successfull");
    }else {
      alert("Invalid credentials");
    }
  }
  ngOnInit() {
  }

}
