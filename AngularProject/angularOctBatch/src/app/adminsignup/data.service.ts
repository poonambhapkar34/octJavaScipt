import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  city = 'mumbai';
  city2?:string ;
  constructor() { }

  //Copy cOpy coPy copy copY
  nameValidation(control:FormControl): any {
    console.log('control',control.value); //copy
    let nameValue = control.value;
    let updatedNewValue = nameValue?.toLowerCase();
    let isInclude = updatedNewValue?.includes('copy','hello','the');
    return isInclude ? { isValid : true }:null
   }

   //validation for spaces without valid input value
   whiteSpaceValidator(inpFiledData : FormControl){
    let nameValue = inpFiledData.value;
    let trimedValue = nameValue.trim().length > 0;
   // let trimedValue2 = trimedValue.length > 0; 
     return trimedValue ?   null : {whiteSpaces : true}
   }

   setCityName(value:string){
     this.city2 = value;
   }

   getCityName(){
    return this.city2;
   }
}
