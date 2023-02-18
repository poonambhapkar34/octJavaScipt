import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  show_content : boolean = true;
  list = ['panir','kaju-kurma','icecream','veg kolhapuri','palak panir'];
  show_list: boolean = false;

  showContent(){
     this.show_content = false;
  }
  showList(){
    this.show_list = true;
  }
  hideList(){
    this.show_list = false;
  }
}
