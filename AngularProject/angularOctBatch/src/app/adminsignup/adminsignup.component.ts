import { Component } from '@angular/core';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
  data = {
    name : 'poonam',
    mobNo : 569896666,
    email : 'poo@jjj.com',
    pass: 'poonam$34'

  }
  data2:any;
  
  ngOnInit(){
   
  }
   submit(formData? : any){
  //console.log('-->',formData.signUp);
  console.log(formData);
  this.data2 = formData;
  console.log(this.data);
  
}

}
