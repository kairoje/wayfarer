import { Component } from '@angular/core';
import { CitiesService } from '../../../home-page/cities/cities.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  city: string = '';
  searchSubject: Subject<string> = new Subject();

  constructor(private citiesService: CitiesService, private router: Router) { }

  showSearchBar(): boolean {
    return this.router.url != '/'
  }

  findCity(cityName: string) {
    console.log('finding city', cityName);
    this.searchSubject.next(cityName);
  }

  ngOnInit(): void {
    this.searchSubject
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe(cityName => {
      this.citiesService.getCityByName(cityName)
      .then(city => {
        console.log('Found city:', city);
      })
      .catch(error => {
        console.error('Error finding city:', error);
      })
    })
  }
}
