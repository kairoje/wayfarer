import { Component } from '@angular/core';
import { CitiesService } from './cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {

  cities: any[] = [];

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
  }

  
}
