import { Component } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})

export class LoginformComponent {
  car = 5100;
  car1: any;
  num = 20;
  booleanProperty = false;
  student = {
    name: 'jay',
    age: 20
  }
  items = [10, 20, 30, 40];
  // myName :string = 'poonam patil'; //static data
  myName : any = this.student.name; //dynamic data
  disableFlag: boolean = false;
  mySurname : string = 'patil';

  keyUpEvent(data: any, inpBoxValue: any):any {
    console.log(data);
    console.log(data.target.value);
    console.log(inpBoxValue);
    console.log(inpBoxValue.value)
    this.car = 1000;
  }

  getData(b: any) {
    //  let a =20;
    return 'i live in pune';
  }
  ngModelChanges(){
    console.log("this.mySurname",this.mySurname);
    this.mySurname = 'Bhapkar';
  }
}
