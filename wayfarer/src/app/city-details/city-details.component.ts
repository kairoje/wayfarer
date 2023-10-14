import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../home-page/cities/cities.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit{

  city: any;
  
  constructor(private citiesService: CitiesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const cityId = params['cityId'];
        this.city = this.citiesService.getCityById(cityId)
      })
  }
}
