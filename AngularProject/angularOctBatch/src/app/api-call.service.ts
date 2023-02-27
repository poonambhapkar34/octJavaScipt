import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
 
  //slash = '/'
  getApiData :any;
  //url :any;
  constructor(public httpClient: HttpClient) { }

  getApi(url:string, slash?:any, id?:number) {
    //return this.httpClient.get(url);
    console.log('---->>',url + slash + id);
    return (slash == undefined && id == undefined)? this.httpClient.get(url)
    : this.httpClient.get(url + slash + id);
  }
  //get Api by id:
  getApiCallById(url: string, id: number) {
   // console.log('url--->',url + this.slash + id);
    return this.httpClient.get(url + '/' + id);
  }
  postApiCall(url:string,formData:any) {
   return this.httpClient.post(url,formData);
  }
}
