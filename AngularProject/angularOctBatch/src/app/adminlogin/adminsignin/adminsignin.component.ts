import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiCallService } from 'src/app/api-call.service';
import { CurrencyPipe1 } from 'src/app/currency1.pipe';
import { DataService } from './../../adminsignup/data.service';

// interface student{
//   name:string,
//   id:number,
//   address:string
// }
@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss'],
 // providers:[CurrencyPipe1]
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
  fName : string ='raj patil';
 today  = Date.now();
 num= 200;
  postApiData: any;
  constructor(public formBuilder: FormBuilder,private dataService : DataService,
    private apiCallService : ApiCallService) {
   
  }
  ngOnInit() {
    this.studentDataFormValidations();
  }
//defination or controling of form
  studentDataFormValidations(){
   this.studentDataForm = this.formBuilder.group({
    studentName : ['', [Validators.required,Validators.maxLength(5),this.dataService.nameValidation,this.dataService.whiteSpaceValidator]],
    mobNo :[''],
    city:[''],
    gender:['male'],
    painting:[],
    dancing:[],
    reading:[],
    outing:[],
    temsAndCond:['',[Validators.requiredTrue]],
    dob:[]
   })
  }
//form submit function
  submitFormData() {
   this.formData = this.studentDataForm.value;
   console.log('form data',this.formData);
   let date = this.formData.date?.split('-').reverse().join('-');
   console.log(date);
   let name1 =  this.formData.studentName.trim()
   console.log(name1);
   let name =  name1.toUpperCase();
   console.log(name);
   
   //this.dataService.city = 'pune';
   console.log( this.studentDataForm.value.city);
   //set the city property
   this.dataService.city = this.studentDataForm.value.city;//direct value assigner
   this.dataService.setCityName(this.studentDataForm.value.city) //setter methos

   //post Api call
   let url = "http://localhost:3000/posts";
   this.apiCallService.postApiCall(url,this.formData).subscribe(data=>{
    this.postApiData = data;
    console.log(data);
    
   })
  }
}
