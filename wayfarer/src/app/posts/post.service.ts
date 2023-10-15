import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = [
    {
      id: '1',
      image: "../assets/images/boy-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cityId: '1',
    },
    {
      id: '2',
      image: "../assets/images/girl-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cityId: '1',
    },
    {
      id: '3',
      image: "../assets/images/boy-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cityId: '2',
    },
    {
      id: '4',
      image: "../assets/images/girl-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cityId: '2',
    },
    {
      id: '5',
      image: "../assets/images/girl-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cityId: '2',
    },
    {
      id: '6',
      image: "../assets/images/girl-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cityId: '3',
    },
    {
      id: '7',
      image: "../assets/images/boy-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      cityId: '4',
    },
  ]

  constructor() { 
    
  }
  getPosts() {
    return this.posts
  }

  getPostByCityId(id: string) {
    return this.posts.filter(post => post.cityId === id);
  }

}
