import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
  city?:string;
  data = {
    name : 'poonam',
    mobNo : 569896666,
    email : 'poo@jjj.com',
    pass: 'poonam$34'

  }
  data2:any;
  
  constructor(private dataService : DataService ){

  }
  ngOnInit(){
  this.city = this.dataService.city;
  console.log('this.city',this.city);
  
  }
   submit(formData? : any){
  //console.log('-->',formData.signUp);
  console.log(formData);
  this.data2 = formData;
  console.log(this.data);
  
}

}
