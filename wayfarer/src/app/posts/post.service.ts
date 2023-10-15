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
      creationDate: new Date('2023-10-14T12:30:00'),
      cityId: '1',
    },
    {
      id: '2',
      image: "../assets/images/girl-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-09-12T15:30:00'),
      cityId: '1',
    },
    {
      id: '3',
      image: "../assets/images/boy-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-09-15T11:30:00'),
      cityId: '2',
    },
    {
      id: '4',
      image: "../assets/images/girl-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-10-11T11:30:00'),
      cityId: '2',
    },
    {
      id: '5',
      image: "../assets/images/girl-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-04-25T14:30:00'),
      cityId: '2',
    },
    {
      id: '6',
      image: "../assets/images/girl-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-08-09T17:30:00'),
      cityId: '3',
    },
    {
      id: '7',
      image: "../assets/images/boy-icon.png",
      title: 'Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-08-23T14:30:00'),
      cityId: '4',
    },
  ]

  constructor() { 
    
  }

  getPostByCityId(id: string) {
     const cityPosts = this.posts.filter(post => post.cityId === id);
     return cityPosts.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime())
  }

}
