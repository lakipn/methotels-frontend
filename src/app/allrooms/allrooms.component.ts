import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {FilterkvadraturaPipe} from "../filterkvadratura.pipe";
import {FilterbrojkrevetaPipe} from "../filterbrojkreveta.pipe";

@Component({
  moduleId: module.id,
  selector: 'app-allrooms',
  templateUrl: 'allrooms.component.html',
  styleUrls: ['allrooms.component.css'],
  pipes: [FilterkvadraturaPipe, FilterbrojkrevetaPipe]
})
export class AllroomsComponent implements OnInit {

  chosenRoom:number = 0;
  room = {
    roomname : '',
    beds : 1,
    size : '',
    tv : 1
  };
  refRoom : any;

  rooms:any[] = [];
  filterKvadratura:string = '';
  filterKreveti:number = 1;

  constructor(private httpService:HttpService) {
  }

  ngOnInit() {
    this.httpService.allrooms().subscribe(
      (response) => this.rooms = response['rooms']
    );
  }

  select(room : any) {
    this.chosenRoom = room.ID;
    this.room.roomname = room.ROOMNAME;
    this.room.beds = room.BEDS;
    this.room.size = room.SIZE;
    this.room.tv = room.TV;
    this.refRoom = room;
  }

  modifyRoom() {
    this.httpService.modifyroom(this.room, this.chosenRoom).subscribe((data) => {
      console.log(data); this.chosenRoom = 0;
      this.refRoom.ROOMNAME = this.room.roomname;
      this.refRoom.BEDS = this.room.beds;
      this.refRoom.SIZE = this.room.size;
      this.refRoom.TV = this.room.tv;
    });
  }

  deleteRoom(roomId : number) {
    if(confirm("Da li stvarno želite da obrišete tako lepu sobu?"))
    {
      this.httpService.deleteroom(roomId).subscribe((data) => {});
      delete this.rooms[ this.rooms.find( function(room) { return room.ID == roomId; } ) ];
    }
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

  onClick() {
    this.modifyRoom();
  }

}
