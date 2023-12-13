import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor () {
    this.loginForm = new FormGroup({
      login : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
      password : new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(255)]),
    })
  }

  submitLoginForm() {
    if (this.loginForm.valid) {
      // Les données du formulaire sont ici
      console.log('Données du formulaire :', this.loginForm.value);
      const login = {
        login: this.loginForm.get("login")!.value,
        password: this.loginForm.get("password")!.value
      }
      console.log(login);
      
      // Tu peux maintenant envoyer ces données à ton backend ou effectuer d'autres actions nécessaires.
    } else {
      // Le formulaire n'est pas valide, tu peux ajouter une logique supplémentaire ici si nécessaire.
      console.log('Le formulaire n\'est pas valide.');
    }
  }
}
