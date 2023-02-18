import { Component } from '@angular/core';  //imports section
import { CommondataService } from '../commondata.service';

@Component({ //metatdata section
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent { //main class which include all logic
  gettingMarksOnClick? :number;
  gettingMarksOnInit?:number;
  color? : string = 'orange';
  noColor:boolean = false;
  textColor = 'yellow';
  fontSize = '30px';
  show_content: boolean = true;  //properties declaration and defination section
  list = ['panir', 'kaju-kurma', 'icecream', 'veg kolhapuri', 'palak panir'];
  show_list: boolean = false;

  constructor(private commonDataService: CommondataService) {  //constructor : implicitly get called by compiler(DI)

  }
  //to fetch data from service u either go with onInit:if want to get or set data on page load or go with functions:if want to get or set data on events
  ngOnInit() {  //Lifecycle hook : (fuction which implicitly get called by compiler ) used to fetch services properties
 this.gettingMarksOnInit =  this.commonDataService.marks
  }
  showContent() { // functions 
    this.show_content = false;
  }
  showList() {
   this.show_list = true;
   this.gettingMarksOnClick = this.commonDataService.marks;
  }
  hideList() {
    this.show_list = false;
  }
  switchDirective(){
    this.noColor = true;
   this.color = 'orange';

  }
}
