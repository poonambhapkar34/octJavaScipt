import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/adminsignup/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {
 @Input() parentData :any; //declared property to get data from parent

 @Output() childData = new EventEmitter<any>; //defined property to send data from child
 
 data = 'flower';
 showSubCompo =false;
settingDataFromParent?: number =500 ;
constructor(private dataService: DataService){

}

 sendData(value:any){
  this.childData.emit(value);

 }
 ngOnChanges(){
  console.log('onchange......');
  
 }
 ngOnInit(){
  console.log('oninit......');
  console.log('oninit..',this.settingDataFromParent)
 }
 subjectData(){
  
  this.dataService.data.next(this.data);
  this.showSubCompo =true;
 }

 ngDoCheck(){
  console.log('docheck...');
  
 }
 updatedValue(){
  return this.settingDataFromParent;
 }
}
