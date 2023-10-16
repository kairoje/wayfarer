import { Injectable } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';

@Injectable({
  providedIn: 'root'
})

export class CitiesService {
  private cities = [
    {
      id: '1',
      name: 'Chicago',
      country: 'USA',
      image: "../assets/images/chicago.jpg",
      lat: 41.878113,
      lng: -87.629798,
      posts: [{}],
    },
    {
      id: '2',
      name: 'Seattle',
      country: 'USA',
      image: "../assets/images/seattle.jpg",
      lat: 47.606209,
      lng: -122.332071,
      posts: [{}],
    },
    {
      id: '3',
      name: 'San Francisco',
      country: 'USA',
      image: "../assets/images/san-francisco.png",
      lat: 37.774929,
      lng: -122.419415,
      posts: [{}],
    },
    {
      id: '4',
      name: 'London',
      country: 'United Kingdom',
      image: "../assets/images/london.png",
      lat: 51.507350,
      lng: -0.127750,
      posts: [{}]
    }
  ]

  constructor(private postService: PostService) { }

  getCities() {
    return this.cities
  }

  getCityById(id: string) {
    const city = this.cities.find(city => city.id === id)
    if (city) {
      city.posts = this.postService.getPostByCityId(id)
    }
    return city
  }

  getCityByName(name: string): Promise<any> { 
    return new Promise((resolve, reject) => {
      const city = this.cities.find(city => city.name.toLowerCase() === name.toLowerCase());
      if (city) {
        city.posts = this.postService.getPostByCityId(city.id);
        resolve(city);
      } else {
        reject('City not found');
      }
    });
  }
}
