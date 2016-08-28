import { Component, OnInit } from '@angular/core';
import {NgForm, NgControl} from "@angular/forms";
import {HttpService} from "../http.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  //providers : [HttpService]
})
export class RegisterComponent implements OnInit {
  token : string = '';

  user = {
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : ''
  };

  response = {};

  constructor(private httpService : HttpService, private router : Router) { }

  ngOnInit() {
  }

  isValidFirstName() {
    return !(this.user.firstname.length < 5);
  }

  isValidLastName() {
    return !(this.user.lastname.length < 5);
  }

  isValidUsername() {
    return !(this.user.username.length < 5);
  }

  isValidPassword() {
    return !(this.user.password.length < 5);
  }

  isValidEmail() {
    return !(this.user.email.length < 5);
  }

  isValidForm() {
    return (this.isValidEmail && this.isValidFirstName() && this.isValidLastName() && this.isValidUsername() && this.isValidPassword());
  }

  onSubmit(form : NgForm) {
    this.httpService.register(this.user).subscribe(
      (res) => {
        this.response = res;
        this.token = this.response["token"];
        this.httpService.token = this.response["token"];
        this.router.navigate(['allrooms']);
      }
    );
  }

}
