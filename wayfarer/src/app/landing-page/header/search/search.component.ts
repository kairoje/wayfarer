import { Component } from '@angular/core';
import { CitiesService } from '../../../home-page/cities/cities.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  city: string = '';

  constructor(private citiesService: CitiesService) { }

  findCity(cityName: string) {
    console.log('finding city', cityName);
    this.citiesService.getCityByName(cityName)
    .then(city => {
      console.log('Found city:', city);
    })
    .catch(error => {
      console.error('Error finding city:', error);
    })
  }
}
