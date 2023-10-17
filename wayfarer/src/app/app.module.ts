import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './landing-page/header/header.component';
import { HeroComponent } from './landing-page/hero/hero.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopicComponent } from './landing-page/topic/topic.component';
import { CitiesComponent } from './home-page/cities/cities.component';
import { MatCardModule } from '@angular/material/card';
import { CityDetailsComponent } from './home-page/city-details/city-details.component'
import { PostsComponent } from './posts/posts.component';
import { CitiesService } from './home-page/cities/cities.service';
import { PostService } from './posts/post.service';
import { PostDetailsComponent } from './post-details/post-details.component';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './landing-page/header/search/search.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';



@NgModule({
  declarations: [
    HeaderComponent,
    HeroComponent,
    AppComponent,
    TopicComponent,
    CitiesComponent,
    CityDetailsComponent,
    PostsComponent,
    PostDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    NgbModule,
    NgbCarouselModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    NgxMapboxGLModule

  ],
  providers: [CitiesService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }