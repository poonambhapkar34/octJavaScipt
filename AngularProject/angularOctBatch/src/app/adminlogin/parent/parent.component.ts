import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  @ViewChild(ChildComponent) propertyToFetchChildCompo! : ChildComponent;
  inputBoxValue :any;
  dataFromChild :any;
  
  dataFromParentToChild(value:any){
   console.log("parentvalue",value);
   this.inputBoxValue = value;
  }
  dataFetchingFromChild(data:any){
      this.dataFromChild = data;
  }
  ngAfterViewInit(){
    this.propertyToFetchChildCompo.settingDataFromParent = 1005555;
    console.log(this.propertyToFetchChildCompo.settingDataFromParent);
   let childData = this.propertyToFetchChildCompo.updatedValue();
   console.log( childData);
   
  }
}
