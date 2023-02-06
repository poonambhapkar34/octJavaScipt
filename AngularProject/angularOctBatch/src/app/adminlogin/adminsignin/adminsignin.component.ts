import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminsigninComponent {
  myFavourateColor = 'Black';
  studentDataForm!: FormGroup;
  constructor(public formBuilder: FormBuilder) {
   
  }
  ngOnInit() {

    this.studentDataFormValidations();

  }

  studentDataFormValidations(){
   this.studentDataForm = this.formBuilder.group({
    studentName : ['pooonam',Validators.required],
    mobNo :[],
    gender:[],
    painting:[],
    dancing:[],
    reading:[],
    outing:[],
   })
  }
  submitFormData() {

  }
}
