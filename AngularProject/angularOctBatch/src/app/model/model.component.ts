import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data1: any) {}
}
