import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  getApiData :any;
  //url :any;
  constructor(public httpClient: HttpClient) { }

  getApi(url: any) {
    return this.httpClient.get(url);
  }
}
