import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-input-awesome',
  templateUrl: './input-awesome.component.html',
  styleUrls: ['./input-awesome.component.css'],
  providers: [EventsService]
})
export class InputAwesomeComponent implements OnInit {

  data: any;
  constructor(
    private _ep_events: EventsService
  ) { }

  ngOnInit() {
    this._ep_events.get_life_event({}, (response) => {
      console.log(response);
    },
    (code) => {

    });
  }

  on_submit() {
    this._ep_events.save_life_event(
      {},
      (response) => {
        this.data = response;
      },
      (code: number) => {

      },
      false
    );

  }

}
