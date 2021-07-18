import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = "neymar";

  username=""
  password=""
  message=""
  status=""

  greet(): void {
      alert("Hello " + this.name);
  };

  //login
  login(): void {
    if(this.username=="Hasee" && this.password=="qwerty"){
      this.message="login in as " +this.username
      this.status="true"
      this.username=""
      this.password=""
    }
    else{
      this.message="This user Dos't exists  !!"
      this.status="false"
      this.username=""
      this.password=""
    }
  }

}
