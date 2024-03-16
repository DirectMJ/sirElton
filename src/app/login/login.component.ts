import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = ""
  password = ""

  login(){

    var warning = ''
    if (!this.username){
      warning = warning + "username is required!\n"
    }
    if(!this.password) {
      warning = warning + "password is required!\n"
    }

    if(warning){
      alert(warning)
    }else {
      alert("success!")
    }
  }
  
}
