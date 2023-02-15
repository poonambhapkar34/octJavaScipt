import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../adminsignup/data.service';

// interface student{
//   name:string,
//   id:number,
//   address:string
// }
@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})


export class AdminsigninComponent {
  myFavourateColor = 'Black';
  studentDataForm!: FormGroup;//declaration of form
  studentData : any = {
    name:'pooja',
    id:444,
    address:'jjjj',
  };
  formData : any;
  constructor(public formBuilder: FormBuilder,private dataService : DataService) {
   
  }
  ngOnInit() {

    this.studentDataFormValidations();

  }
//defination or controling of form
  studentDataFormValidations(){
   this.studentDataForm = this.formBuilder.group({
    studentName : ['', [Validators.required,Validators.maxLength(5),this.nameValidation,this.whiteSpaceValidator]],
    mobNo :[''],
    gender:['male'],
    painting:[],
    dancing:[],
    reading:[],
    outing:[],
    temsAndCond:['',[Validators.requiredTrue]],
    dob:[]
   })
  }
//Copy cOpy coPy copy copY
  nameValidation(control:FormControl): any {
   console.log('control',control.value); //copy
   let nameValue = control.value;
   let updatedNewValue = nameValue?.toLowerCase();
   let isInclude = updatedNewValue?.includes('copy','hello','the');
   return isInclude ? { isValid : true }:null
  }
  whiteSpaceValidator(inpFiledData : FormControl){
   let nameValue = inpFiledData.value;
   let trimedValue = nameValue.trim().length > 0;
  // let trimedValue2 = trimedValue.length > 0; 
    return trimedValue ?   null : {whiteSpaces : true}
  }
  submitFormData() {
   this.formData = this.studentDataForm.value;
   console.log(this.formData);
   let date = this.formData.date?.split('-').reverse().join('-');
   console.log(date);
   let name1 =  this.formData.studentName.trim()
   console.log(name1);
   let name =  name1.toUpperCase();
   console.log(name);
   
   this.dataService.city = 'pune';
   
  }
}
