import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  post: string = '';
  @Output() searchEvent = new EventEmitter<string>();

  constructor(private router: Router) { }

  showSearchBar(): boolean {
    return this.router.url != '/'
  }

  findPost(postTitle: string) {
    console.log('finding post', postTitle);
    this.searchEvent.emit(postTitle);
  }
  

}
