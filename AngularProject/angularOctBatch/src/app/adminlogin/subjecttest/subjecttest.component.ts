import { Component } from '@angular/core';
import { DataService } from 'src/app/adminsignup/data.service';

@Component({
  selector: 'app-subjecttest',
  templateUrl: './subjecttest.component.html',
  styleUrls: ['./subjecttest.component.scss']
})
export class SubjecttestComponent {
 subjectData : any = 'poonam';

 constructor(private dataService:DataService){

 }

 ngOnInit(){
 this.dataService.data.subscribe(refDataPara => {
 this.subjectData = refDataPara;
 });
//this.subjectData =  this.dataService.data.subscribe();
 console.log("serviceData",this.subjectData );
 
 }
}
