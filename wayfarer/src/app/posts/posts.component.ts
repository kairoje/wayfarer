import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() city: any; 

  constructor(private router: Router){
    console.log('Received city in PostsComponent:', this.city);
  }

}
