import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [EventsService]
})
export class HomeComponent implements OnInit {

  life_events = [];
  constructor(private _ep_events: EventsService) { }

  ngOnInit() {
    this._ep_events.get_life_event({}, (response) => {
      this.life_events = response;
    },
      (code) => {

      });
  }

}
