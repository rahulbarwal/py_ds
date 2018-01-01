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
  event_detail: string;
  public = false;

  constructor(
    private _ep_events: EventsService
  ) { }

  ngOnInit() {
  }

  on_submit() {
    this.event_detail = 'I met geeta today';
    this._ep_events.save_life_event(
      {
        event_detail : this.event_detail,
        public: this.public
      },
      (response) => {
        this.data = response;
      },
      (code: number) => {

      },
      false
    );

  }

}
