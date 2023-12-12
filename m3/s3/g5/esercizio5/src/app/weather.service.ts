import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from './pages/auth/Models/i-weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = "dde244ad5a8501b9082c37840067070f";
  private apiUrl = "https://api.openweathermap.org/data/2.5/forecast";

  constructor(private http: HttpClient) {}

  getWeather(location: string): Observable<IWeather> {
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${this.apiKey}`;
    return this.http.get<IWeather>(apiUrl);
  }
}
