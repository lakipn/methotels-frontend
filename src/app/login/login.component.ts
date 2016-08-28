import { Component, OnInit } from '@angular/core';
import {NgForm, NgControl} from "@angular/forms";
import {HttpService} from "../http.service";
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  //providers: [HttpService]
})
export class LoginComponent implements OnInit {
  token:string = '';

  user = {
    username: '',
    password: ''
  };

  constructor(private httpService:HttpService, private router:Router) {
  }

  ngOnInit() {
    if (this.token != '') {
      console.log(this.token);
    }
  }

  onSubmit(form:NgForm) {
    this.httpService.login(this.user).subscribe(
      (response) => {
        this.httpService.token = response["token"];
        //console.log(this.httpService.token);
        // rutiranje
      }
    );
  }

  isValidUsername(username:NgControl) {
    return !(username.value.length < 5);
  }

  isValidPassword(password:NgControl) {
    return !(password.value.length < 5);
  }

}
