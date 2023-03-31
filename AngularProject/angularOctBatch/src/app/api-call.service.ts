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
   //Note: payload is nothing but request body of API
    //return this.httpClient.get(url); "http://localhost:3000/posts/12
    console.log('---->>',url + slash + id);
    return (slash == undefined && id == undefined)? this.httpClient.get(url)
    : this.httpClient.get(url + slash + id);
  }
  //get Api by id:
  getApiCallById(url: string, id: number) {
   // console.log('url--->',url + this.slash + id);
    return this.httpClient.get(url + '/' + id);
  }
  //get by promise
  getApiByPromises(url:string) {
    return this.httpClient.get(url)
  }

  //post Api call
  postApiCall(url:string,formData:any) {
   return this.httpClient.post(url,formData);
  }

  //patch Api Call: to update value of specific key of object 
  patchApiCall(url:any,data:any) {
  return this.httpClient.patch(url,data)   
  }

  //put api call
  putApiCall(url:any,data:any) {
    return this.httpClient.put(url,data) 
  }

  //delete APi call
  deleteApiCall(url:string,id:any) {
   return this.httpClient.delete(url + "/" + id)
  }
}
