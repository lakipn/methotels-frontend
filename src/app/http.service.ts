import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  public token : string = '';

  constructor(private http:Http) {
  }

  login(user) {
    const body = 'username=' + user.username + '&password=' + user.password;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://localhost/methotels/backend/login.php', body, {
      headers: headers
    }).map(
      (response:Response) => response.json()
    );
  }

  register(user) {
    //const body = JSON.stringify(user);
    const body = 'firstname=' + user.firstname +'&lastname=' + user.lastname + '&email=' + user.email + '&username=' + user.username + '&password=' + user.password;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://localhost/methotels/backend/register.php', body, {
        headers: headers
      })
      .map(
        (response:Response) => response.json()
      );
  }

  newroom(room) {
    const body = 'roomname=' + room.roomname + '&beds=' + room.beds + '&size=' + room.size + '&tv=' + room.tv;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    if(this.token != '')
      headers.append('Token', this.token);

    return this.http.post('http://localhost/methotels/backend/newroom.php', body, {
      headers: headers
    }).map(
      (response: Response) => response.json()
    );
  }

  modifyroom(room: any, id : number) {
    const body = 'roomname=' + room.roomname + '&beds=' + room.beds + '&size=' + room.size + '&tv=' + room.tv + '&id=' + id;
    console.log(body);
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    if(this.token != '')
      headers.append('Token', this.token);

    return this.http.post('http://localhost/methotels/backend/modifyroom.php', body, {
      headers: headers
    }).map(
      (response: Response) => response.json()
    );
  }

  deleteroom(id : number) {
    const body = 'id=' + id;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    if(this.token != '')
      headers.append('Token', this.token);

    return this.http.post('http://localhost/methotels/backend/deleteroom.php', body, {
      headers: headers
    }).map(
      (response: Response) => response.json()
    );
  }

  allrooms() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get('http://localhost/methotels/backend/allrooms.php', {
      headers: headers
    }).map(
      (response: Response) => response.json()
    );
  }

}
