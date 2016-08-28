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

  rooms : any[] = [];
  filterKvadratura: string = '';
  filterKreveti: number = 1;

  constructor(private httpService : HttpService) { }

  ngOnInit() {
    this.httpService.allrooms().subscribe(
      (response) => this.rooms = response['rooms']
    );
  }

}
