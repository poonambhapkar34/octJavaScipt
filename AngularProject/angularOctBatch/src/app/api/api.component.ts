
import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class APIComponent {
//  two types API: 1.Socket API:To create mobile application
//                 2. REST API:To create Web application
//   1.Socket API: wtsapp: chatting application (request(encrypted) respose(decrypted))
//   2.REST : web Application(request respose)
// CURD : Create/Post , Update/Put , Read/Get , Delete/Delet

// payload/req body= {
//   "title": "ppp",
//   "author": "ooooo",
//   "id": 3,
//   "url":"http://localhost:3000/profile"
// },
getApiData : any;
getApiResponse: any;
url = "http://localhost:3000/posts";
constructor( private apiCallService: ApiCallService){
}
//get api call
  getApi() {
    // let url = "http://localhost:3000/posts";
    this.apiCallService.getApi(this.url).subscribe(res => {
    this.getApiResponse = res;
    console.log('getApiResponse',this.getApiResponse);
  });
  }
  //get Api call by passing ID:
   getApiById(){
    let id = 12;
    let slash = '/'
  //  this.apiCallService.getApiCallById(this.url,id ).subscribe(getDataById=>{
  //   console.log('getDataById',getDataById);
  //  })
  this.apiCallService.getApi(this.url, slash, id).subscribe(res => {
    this.getApiResponse = res;
    console.log('getApiResponse',this.getApiResponse);
  });
  }
}

