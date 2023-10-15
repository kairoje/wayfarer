import { Component } from '@angular/core';
import { CitiesService } from 'src/app/home-page/cities/cities.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  city: string = '';

  constructor(private citiesService: CitiesService) { }

  searchCities() {
    const cities = this.citiesService.getCities();

    const filteredCities = cities.filter(city => city.name.toLowerCase().includes(this.city.toLowerCase()));

    console.log(filteredCities);
  }
}
