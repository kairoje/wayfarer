import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';
import { WeatherService } from 'src/app/weather.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit{
  showElement: boolean = true;
  cities: any[] = [];

  constructor(private citiesService: CitiesService, private weatherService: WeatherService, private router : Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const activeRoute = this.getActiveRoute(this.activatedRoute);
      this.toggleElementVisibility(activeRoute.snapshot.params['cityId']);
    });
  }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
    const activeRoute = this.getActiveRoute(this.activatedRoute);
    this.toggleElementVisibility(activeRoute.snapshot.params['cityId']);
  }
  navigateToCity(cityId: string) {
    this.router.navigate(['/home', cityId]);
    this.showElement = false;
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
  toggleElementVisibility(id: string | undefined) {
    console.log('ID:', id);
    if (id) {
      this.showElement = false;
    } else {
      this.showElement = true;
    }
  }
  // Helper function to get the deepest child route
  getActiveRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
    

}
