import { Injectable } from '@angular/core';

import { DatasourceService } from './datasource.service';
import { environment } from '../../environments/environment';
@Injectable()
export class EventsService {

  save_event_url: string;
  get_event_url: string;
  constructor(
    private _data_service: DatasourceService
  ) {
    this.save_event_url = environment.backend_server + '/life-event';
    this.get_event_url = environment.backend_server + '/life-event';
  }


  get_life_event(
    data,
    on_success: (response: any) => void,
    on_failure: (response: any) => void,
    b_retry?: Boolean
  ) {
    this._data_service.getEndpoint(this.get_event_url, data, on_success, on_failure, b_retry);
  }

  save_life_event(
    data,
    on_success: (response: any) => void,
    on_failure: (response: any) => void,
    b_retry?: Boolean
  ) {
    this._data_service.postEndpoint(this.save_event_url, data, on_success, on_failure, b_retry);
  }

}
