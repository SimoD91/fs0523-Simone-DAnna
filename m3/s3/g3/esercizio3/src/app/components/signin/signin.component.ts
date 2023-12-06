import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  submitLogin(target: NgForm) {
    const loginSuccessful = this.authService.login(this.username, this.password);

    if (loginSuccessful) {
      alert("Login avvenuto con successo");
    } else {
      alert("Login fallito");
    }
  }
}

