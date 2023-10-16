import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() city: any; 
  @Input() filteredPosts: Post[] = [];

  constructor(private router: Router){
    console.log('Received city in PostsComponent:', this.city);
  }

}
