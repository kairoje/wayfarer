import { Injectable } from '@angular/core';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
    {
      id: '1',
      image: "../assets/images/boy-icon.png",
      title: 'First Title',
      author: 'Author 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-10-14T12:30:00'),
      cityId: '1',
    },
    {
      id: '2',
      image: "../assets/images/girl-icon.png",
      title: 'Second Title',
      author: 'Author 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-09-12T15:30:00'),
      cityId: '1',
    },
    {
      id: '3',
      image: "../assets/images/boy-icon.png",
      title: 'Third Title',
      author: 'Author 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-09-15T11:30:00'),
      cityId: '2',
    },
    {
      id: '4',
      image: "../assets/images/girl-icon.png",
      title: 'Fourth Title',
      author: 'Author 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-10-11T11:30:00'),
      cityId: '2',
    },
    {
      id: '5',
      image: "../assets/images/girl-icon.png",
      title: 'Fifth Title',
      author: 'Author 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-04-25T14:30:00'),
      cityId: '2',
    },
    {
      id: '6',
      image: "../assets/images/girl-icon.png",
      title: 'Sixth Title',
      author: 'Author 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-08-09T17:30:00'),
      cityId: '3',
    },
    {
      id: '7',
      image: "../assets/images/boy-icon.png",
      title: 'Seventh Title',
      author: 'Author 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-08-23T14:30:00'),
      cityId: '4',
    },
    {
      id: '8',
      image: "../assets/images/boy-icon.png",
      title: 'This is a title example that is way longer than 200 characters, therefore the post should create an ellipsis instead of posting the entire title. This display is an example of the title being cut off after 200 characters.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-08-23T14:30:00'),
      cityId: '4',
    },
    {
      id: '9',
      image: "../assets/images/boy-icon.png",
      title: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      creationDate: new Date('2023-08-23T14:30:00'),
      cityId: '4',
    },
  ]

  constructor() { }

  getPostByCityId(id: string) {
     const cityPosts = this.posts.filter(post => post.cityId === id);
     return cityPosts.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime())
  }


  getPostById(postId: string) {
    return this.posts.find(post => post.id === postId)
  }

}
