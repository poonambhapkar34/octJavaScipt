import { Component } from '@angular/core';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {
submit(formData : any){
  //console.log('-->',formData.signUp);
  console.log(formData);
  
}
}
