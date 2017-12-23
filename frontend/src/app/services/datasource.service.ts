import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/finally';

@Injectable()
export class DatasourceService {

  constructor(
    private _http: HttpClient
  ) {
  }
  get_custom_header(): HttpHeaders {
    // authorization can have 2 inputs :
    // 1. initial login fire base token,
    // 2. for all other requests get the stored token(ours) and send in all requests
    const authorization = localStorage.getItem('accessToken');
    return new HttpHeaders()
      .set('Authorization', authorization);
  }

  getEndpoint(endpoint_url: string,
    responseType: any,
    on_success: (response: typeof responseType) => void,
    on_error: (code: number) => void,
    b_retry?: Boolean) {

    this._http.get<typeof responseType>(endpoint_url, {
      headers: this.get_custom_header()
    })
      .retry(b_retry ? 2 : 0)
      .finally(() => {
      })
      .subscribe(on_success, (err: HttpErrorResponse) => {
      });
  }

  // Use postEndpoint if you want to add backend header to your api
  postEndpoint(
    endpoint_url: string,
    data: any,
    on_success: (response: any) => void,
    on_error: (code: number) => void,
    b_retry?: Boolean,
    fb_token = '') {
    this._http.post(endpoint_url, data, {
      headers: this.get_custom_header()
    })
      .retry(b_retry ? 2 : 0)
      .finally(() => {
      })
      .subscribe(on_success,
      (err: HttpErrorResponse) => {
      });
  }

  //#region CoreApi
  get(
    endpoint_url: string,
    responseType: any,
    on_success: (response: typeof responseType) => void,
    on_error: (code: number) => void,
    b_retry = false) {

    this._http.get<typeof responseType>(endpoint_url)
      .retry(b_retry ? 2 : 0)
      .subscribe(on_success,
      (err: HttpErrorResponse) => {
      });
  }

  post(
    endpoint_url: string,
    data: any,
    on_success: (response: any) => void,
    on_error: (code: number) => void,
    b_retry = false) {

    this._http.post(endpoint_url, data)
      .retry(b_retry ? 2 : 0)
      .subscribe(on_success,
      (err: HttpErrorResponse) => {
      });
  }
  //#endregion coreApi

}
