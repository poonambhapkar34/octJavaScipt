import { Component } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})

export class LoginformComponent {
  car = 5100;
  num = 20;
  booleanProperty = false;
  student = {
    name:'jay',
    age:20
  }
  items = [ 10, 20, 30, 40]

  keyUpEvent(data:any, inpBoxValue:any){
   console.log(data);
   console.log(data.target.value);
   console.log( inpBoxValue);
   console.log( inpBoxValue.value)
  }

  getData(b:any){
  //  let a =20;
    return 'i live in pune';
  }
}
