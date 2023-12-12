import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { iLogin } from '../Models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginError: string = "";
  loginSuccess: boolean = false;

  constructor(
    private authSvc:AuthService,
    private router:Router
    ){}

  loginData:iLogin = {
    email: "",
    password: ""
  }

  save() {
    this.authSvc.login(this.loginData)
      .subscribe(
        data => {
          this.loginSuccess = true;
          setTimeout(() => {
            this.router.navigate(["/dashboard"]);
          }, 2000);
        },
        error => {
          this.loginError = "Credenziali non valide";
        }
      );
  }
}
