import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  myform: FormGroup;
  emailFormControl: FormControl;
  usernameFormControl: FormControl; 

  constructor() { }  

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      //this.myform.reset();
    }
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    this.usernameFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  }

  createForm() {
    this.myform = new FormGroup({
      emailFormControl: this.emailFormControl,
      usernameFormControl: this.usernameFormControl,
    });
  }
}
