import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  moduleId: module.id,
  selector: 'app-newroom',
  templateUrl: 'newroom.component.html',
  styleUrls: ['newroom.component.css']
})
export class NewroomComponent implements OnInit {

  room = {
    roomname : '',
    beds : 1,
    size : '',
    tv : 1
  };

  addedRoom : boolean = false;
  errorAddingRoom : string = '';

  constructor(private httpService : HttpService) { }

  ngOnInit() {
  }

  isValidRoomname() {
    return this.room.roomname.length >= 3;
  }

  isValidBeds() {
    return this.room.beds >= 0;
  }

  isValidSize() {
    return this.room.size.length >= 2;
  }

  isValidTv() {
    return this.room.tv >= 0 && this.room.tv <= 1;
  }

  isValidForm() {
    return this.isValidBeds() && this.isValidRoomname() && this.isValidSize() && this.isValidTv();
  }

  onSubmit() {
    this.httpService.newroom(this.room).subscribe(
      (data) => {
        console.log(data);
        if(data['status'] == 'OK')
          this.addedRoom = true;
        if(data['status'] == 'ERROR')
          this.errorAddingRoom = data['error'];
      }
    );
  }

  isError() {
    return this.errorAddingRoom != '';
  }

}
