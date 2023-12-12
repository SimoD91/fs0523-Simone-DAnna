import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { iRegister } from '../Models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errorMessage: any = "";
  formSubmitted = false;
  registrationSuccess: boolean = false;

  constructor(
    private authSvc: AuthService,
    private router: Router
  ) {}

  registerData: iRegister = {
    email: "",
    password: "",
    nome: ""
  }

  save() {
    this.formSubmitted = true;
    if (this.isFormValid()) {
      this.authSvc.signUp(this.registerData)
        .subscribe(
          data => {
            this.registrationSuccess = true;
            setTimeout(() => {
              this.router.navigate(["/auth/login"]);
            }, 2000);
          },
          error => {
            this.errorMessage = error.message;
          }
        );
    }
  }


  isFormValid(): boolean {
    return !!this.registerData.nome && !!this.registerData.email && !!this.registerData.password;
  }
}

