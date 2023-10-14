import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  private cities = [
    {
      id: 1,
      name: 'Chicago',
      country: 'USA',
      image: "../assets/images/chicago.jpg",
      posts: [{
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }] 
    },
    {
      id: 2,
      name: 'Seattle',
      country: 'USA',
      image: "../assets/images/seattle.jpg",
      posts: [{
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }] 
    }
  ]

  getCities() {
    return this.cities
  }
}
