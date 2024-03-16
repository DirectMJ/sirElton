import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  firstName = ""
  middleName = ""
  lastName = ""
  contactNumber = ""
  emailAddress = ""
  username = ""
  password = ""
  confirmPassword = ""
  
  register(){
    var warning = ''
    if (!this.firstName){
      warning = warning + "firstName is required!\n"
    }
    if(!this.middleName) {
      warning = warning + "middleName is not required!\n"
    }
    if(!this.lastName) {
      warning = warning + "lastName is required!\n"
    }
    if(!this.contactNumber) {
      warning = warning + "contactNumber is required!\n"
    }
    if(!this.emailAddress) {
      warning = warning + "emailAddress is required!\n"
    }
    if(!this.username) {
      warning = warning + "usernameis required!\n"
    }
    if(!this.password) {
      warning = warning + "password is required!\n"
    }
    if(!this.confirmPassword) {
      warning = warning + "confirmPassword is required!\n"
    }
    if(this.password !=this.confirmPassword){
      warning = warning + "password does not match"
    }
    if(warning){
      alert(warning)
    }else {
      alert("success!")
    }
    }
  
}
