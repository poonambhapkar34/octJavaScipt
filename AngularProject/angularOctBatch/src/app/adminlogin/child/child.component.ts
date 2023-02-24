import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 @Input() parentData :any; //declared property to get data from parent

 @Output() childData = new EventEmitter<any>; //defined property to send data from child

 sendData(value:any){
  this.childData.emit(value);
 }
}
