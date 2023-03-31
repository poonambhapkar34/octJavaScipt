import { Component } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModelComponent } from '../model/model.component';
@Component({
  selector: 'app-parent-model',
  templateUrl: './parent-model.component.html',
  styleUrls: ['./parent-model.component.scss']
})
export class ParentModelComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModelComponent,{
     data : {name:'poonam',mob:565989}
    });
  }
}
