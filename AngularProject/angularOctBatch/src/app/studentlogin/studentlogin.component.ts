import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnChanges{
  name = 'poonam'
  constructor(){
  console.log('contructor ');

  }
  
  ngOnInit(){
    //used to initialize data in a compo
    //called only once at initially
    //eg.data get or set,API etc
    console.log('ngOnInit ...');
  }

  ngOnChanges(){
    //input element will call this hook
    //on every event on input box it will trigger
    console.log('ngOnChanges....');
    
  }
  ngDoCheck(){
    console.log('do..');
    
  }
  ngAfterContentInit(){
    //called only once after docheck hook
    console.log('ngAfterContentInit..');
    
  }
  ngAfterContentChecked(){
    //trigger after ngAfterContentInit
    //getting called after every do check hook
    console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(){
    //clled only once and after ngAfterContentChecked
    console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(){
   // Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked()
   console.log('ngAfterViewChecked');
   
  }
  ngOnDestroy(){
    //Cleanup just before destroying Angular directive or component. To avoid memory leaks, unsubscribe from observables and detach event handlers.
    console.log('ngOnDestroy');
    
  }
}
