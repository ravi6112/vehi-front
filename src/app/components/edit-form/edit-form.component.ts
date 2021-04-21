import { Vehicles } from './../../type';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  formInstance: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditFormComponent>,@Inject(MAT_DIALOG_DATA) public data: Vehicles) {
    this.formInstance = new FormGroup({
      "uid": new FormControl(),
      "id": new FormControl(),
      "first_name": new FormControl(),
      "last_name": new FormControl(),
      "email": new FormControl(),
      "car_make": new FormControl(),
      "car_model": new FormControl(),
      "vin_number": new FormControl(),
      "manufactured_date": new FormControl(),
      "__typename": new FormControl()
    });
    this.formInstance.setValue(data);
  }

  ngOnInit(): void {
  }

  save(): void {
    this.dialogRef.close(Object.assign(this.formInstance.value));
  }


}