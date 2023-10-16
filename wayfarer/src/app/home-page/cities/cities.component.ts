import { Component } from '@angular/core';
import { CitiesService } from './cities.service';
import { WeatherService } from 'src/app/weather.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {

  cities: any[] = [];

  constructor(private citiesService: CitiesService, private weatherService: WeatherService, private route : Router) {}

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
  }
  navigateToCity(cityId: string) {
    this.route.navigate(['/home', cityId]);
    console.log("Marker clicked")
  }

  getCityWeather(cityName: string) {
    console.log('finding city: ', cityName);
    this.weatherService.getWeather(cityName).subscribe({
      next: (data) => {
        console.log('Weather data:', data);
      },
      error: (error) => {
        console.log('Error fetching weather data:', error);
      }
    })
  }
}
