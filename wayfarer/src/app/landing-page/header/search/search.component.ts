import { Component } from '@angular/core';
import { PostService } from 'src/app/posts/post.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  post: string = '';
  searchSubject: Subject<string> = new Subject();

  constructor(private postService: PostService, private router: Router) { }

  showSearchBar(): boolean {
    return this.router.url != '/'
  }

  findPost(postTitle: string) {
    console.log('finding post', postTitle);
    this.searchSubject.next(postTitle);
  }

  ngOnInit(): void {
    this.searchSubject
    .pipe(
      debounceTime(1000), 
      distinctUntilChanged(), 
      switchMap(async (partialTitle: string) => {
      try {
        const matchingPosts = await this.postService.getPostByTitle(partialTitle);
        console.log('Found posts:', matchingPosts);
      } catch (error) {
        console.error('Error finding posts:', error);
      }
    }))
    .subscribe()
  }
}
