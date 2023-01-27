import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {


  constructor(private router : Router){ }

     routing(myName : string){
      this.router.navigateByUrl('/studentLogin');
      console.log(myName);
      this.navigation();
    }
     
    navigation(){
      this.router.navigateByUrl('/loginform');
    }
}
