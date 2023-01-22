import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 public title = 'angularOctBatch';
 public name:string = 'poonam';
        middleName:any = 'Abhijit';
        fruit :any;

  constructor() {
    console.log('i am inside constructor');
  }
 // const surname :string = 'patil'; var /property both are same..
 //only differnce is we can not add prefix let/var /const to the property

 public myFirstFunction(): any{
    console.log('welcome');
    let surname :string = 'patil';
    this.name = 'Raj';
    console.log('---->',this.name);
    this.mySecondFun();
    console.log(surname);
    this.fruit = 'mango';
    this.middleName = 600;
    
  }

  mySecondFun(){
    this.middleName = 100.33;
    console.log(this.middleName);
    
  }
 
  
}
