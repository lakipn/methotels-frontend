"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var newroom_component_1 = require("./newroom/newroom.component");
var allrooms_component_1 = require("./allrooms/allrooms.component");
var APP_ROUTES = [
    {
        path: '',
        component: login_component_1.LoginComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'newroom',
        component: newroom_component_1.NewroomComponent
    },
    {
        path: 'allrooms',
        component: allrooms_component_1.AllroomsComponent
    }
];
exports.APP_ROUTES_PROVIDER = [router_1.provideRouter(APP_ROUTES)];
//# sourceMappingURL=app.routes.js.map