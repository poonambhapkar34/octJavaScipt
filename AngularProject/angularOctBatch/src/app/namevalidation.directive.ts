import { Directive, HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appNamevalidation]'
})
export class NamevalidationDirective {

  constructor() { }
  @HostListener('input [$event]') 
  onInputChange(){
    console.log('inside host----')
  }
}
