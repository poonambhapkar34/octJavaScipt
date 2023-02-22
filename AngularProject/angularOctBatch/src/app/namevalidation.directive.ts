import { Directive, HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appNamevalidation]'
})
export class NamevalidationDirective {

  constructor(private elementRef:ElementRef) { }
  @HostListener('input',['$event']) //@HostListener('click' ,'$event') //<typcasting>
  onInputChange(){
    console.log('inside host----');
    var inputData =  this.elementRef.nativeElement.value;
    console.log('inputdata',inputData);
    this.elementRef.nativeElement.value = inputData?.replace(/[^a-zA-Z]/g, '');
  }
}
