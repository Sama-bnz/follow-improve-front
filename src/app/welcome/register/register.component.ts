import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm: FormGroup;

  constructor () {
    this.registerForm = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lastName : new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      dateOfBirthday : new FormControl ('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      login : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(255)]),
    })
  }
}
