import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { WeatherService } from '../../weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  userName: string = "";
  showTitle: boolean = false;

  constructor(private authSvc: AuthService, private weatherService: WeatherService, private formBuilder: FormBuilder) {
    this.weatherSearchForm = this.formBuilder.group({
    });
  }

  ngOnInit(): void {
    this.authSvc.user$.subscribe((user) => {
      if (user && user.user && user.user.nome) {
        this.userName = user.user.nome;
      } else {
        this.userName = "";
      }
      this.weatherSearchForm = this.formBuilder.group({
        location: [""]
      });
    });
  }

  apiSend(formValues: any) {
    this.weatherService
      .getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData = data;
        this.showTitle = true;
      });
  }
arrotonda(value: number): number {
  return Math.ceil(value);
}
}
