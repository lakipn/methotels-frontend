import { provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {NewroomComponent} from "./newroom/newroom.component";
import { AllroomsComponent } from "./allrooms/allrooms.component";

const APP_ROUTES = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'newroom',
    component: NewroomComponent
  },
  {
    path: 'allrooms',
    component: AllroomsComponent
  }
];

export const APP_ROUTES_PROVIDER = [ provideRouter(APP_ROUTES) ];
