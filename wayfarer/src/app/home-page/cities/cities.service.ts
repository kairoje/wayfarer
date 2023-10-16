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
      posts: [{}],
    },
    {
      id: '2',
      name: 'Seattle',
      country: 'USA',
      image: "../assets/images/seattle.jpg",
      posts: [{}],
    },
    {
      id: '3',
      name: 'San Francisco',
      country: 'USA',
      image: "../assets/images/san-francisco.png",
      posts: [{}],
    },
    {
      id: '4',
      name: 'London',
      country: 'United Kingdom',
      image: "../assets/images/london.png",
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
