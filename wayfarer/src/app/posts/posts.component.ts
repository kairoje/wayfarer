import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() city: any; 

  constructor(){
    console.log('Received city in PostsComponent:', this.city);
  }

}
