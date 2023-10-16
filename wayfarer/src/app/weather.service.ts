import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '052f26926ae9784c2d677ca7bc5dec98';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);
    const url = `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
