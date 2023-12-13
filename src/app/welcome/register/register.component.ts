import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm: FormGroup;

  constructor (private userService : UserService) {
    this.registerForm = new FormGroup({
      firstName : new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lastName : new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      dateOfBirthday : new FormControl ('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      login : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(255)]),
    })
  }

  submitRegisterForm() {
    if (this.registerForm.valid) {
      // Les données du formulaire sont ici
      console.log('Données du formulaire :', this.registerForm.value);
      const user = {
        firstName: this.registerForm.get("firstName")!.value,
        dateOfBirthday : this.registerForm.get("dateOfBirthday")!.value,
        email : this.registerForm.get("email")!.value,
        lastName: this.registerForm.get("lastName")!.value,
        login: this.registerForm.get("login")!.value,
        password: this.registerForm.get("password")!.value
      }
      console.log(user);
      this.userService.createUser(user).subscribe(res=>{
        console.log(res);
      },
      error=>{
        console.log(error);
      }) 
      // Tu peux maintenant envoyer ces données à ton backend ou effectuer d'autres actions nécessaires.
    } else {
      // Le formulaire n'est pas valide, tu peux ajouter une logique supplémentaire ici si nécessaire.
      console.log('Le formulaire n\'est pas valide.');
    }
  }
}
