import { Component } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent {

  keyUpEvent(data:any, inpBoxValue:any){
   console.log(data);
   console.log(data.target.value);
   console.log( inpBoxValue);
   console.log( inpBoxValue.value)
  }
}
