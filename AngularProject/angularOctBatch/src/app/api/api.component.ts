
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { LoginformComponent } from '../loginform/loginform.component';

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
@ViewChild('h1') headingTag? : ElementRef;
// @ViewChild (LoginformComponent) fetchingComponent! : LoginformComponent;
getApiData : any;
getApiResponse: any;
test:any;
url = "http://localhost:3000/posts";
  getDataByPromises: any;
  subcribeProperty: any;
constructor( private apiCallService: ApiCallService){
}

ngAfterViewInit(){
  console.log(this.headingTag?.nativeElement.innerHTML);

  //console.log( this.fetchingComponent.viewChildProperty);
  
}
// ngAfterViewChecked() {
//  this.test= this.fetchingComponent.viewChildProperty;
//  console.log('test',this.test);
 
// }

//get api call
  getApi() {
    // let url = "http://localhost:3000/posts/12";
  //   this.apiCallService.getApi(this.url).subscribe(res => {
  //   this.getApiResponse = res;
  //   console.log('getApiResponse',this.getApiResponse);
  // });
  this.subcribeProperty =  this.apiCallService.getApi(this.url).subscribe(res => {
      this.getApiResponse = res;
      console.log('getApiResponse',this.getApiResponse);
    })
  console.log(this.getApiResponse)
  }
  getApiUsingPromises(){
    let url = "http://localhost:3000/posts/";
    this.apiCallService.getApiByPromises(url).toPromise().then(respo=>{
      this.getDataByPromises = respo;
      console.log(respo);
    })
  }
 async getApiUsingAsync(){
    let url = "http://localhost:3000/posts/";
   var ayncData = await this.apiCallService.getApiByPromises(url).toPromise();
   console.log(ayncData);
   
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
  patchById() {
    let id = 16
    let putApiUrl = this.url + '/' + id;
    let data = {
      "studentName": 'Rani',
      "gender": "female",
    }
    this.apiCallService.patchApiCall(putApiUrl, data).subscribe(response => {
      console.log('put api rsp', response);
    })
  }
  putById(){
    let url = this.url + '/' + 4;
    let data ={
      "name":"Shree",
      "mobNo":898888855
    }
    this.apiCallService.putApiCall(url,data).subscribe(res=>{
      console.log(res);
      
    })
    
  }
  deleteById(){
    let url =  this.url + '/' ;
    let id = 4;
    this.apiCallService.deleteApiCall(url,id).subscribe(data=>{
      console.log(data);
      
    })
  }

  ngOnDestroy(){
    this.subcribeProperty.unsubscribe();//unsubscription is important to avoid memory leakage problem.
  }
}

