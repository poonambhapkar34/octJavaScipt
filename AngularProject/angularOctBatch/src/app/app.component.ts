import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angularOctBatch';
  name:string = 'poonam';
  middleName:any = 'Abhijit';

   constructor(){
    console.log('i am inside constructor');
    
    // let xyz= 'kkk';
    // this.middleName = 'Abhijit';
   }
 // const surname :string = 'patil'; var /property both are same..
 //only differnce is we can not add prefix let/var /const to the property

  myFirstFunction(): any{
    console.log('welcome');
    let surname :string = 'patil';
    this.name = 'Raj';
    console.log('---->',this.name);
    this.mySecondFun();
    console.log(surname);
    
  }

  mySecondFun(){
    this.middleName = 100;
    console.log(this.middleName);
    
  }
 
  
}
