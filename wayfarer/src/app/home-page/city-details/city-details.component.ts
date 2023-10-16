import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities/cities.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/weather.service';
import { Post } from 'src/app/posts/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit{

  city: any;
  weatherData: any;
  filteredPosts: Post[] = [];
  searchTerm: string = '';

  constructor(
    private citiesService: CitiesService, 
    private route: ActivatedRoute, 
    private router: Router,
    private weatherService: WeatherService
    ) {}

  onSearch(query: string){
    this.searchTerm = query;
    this.filteredPosts = this.city.posts.filter((post: { title: string; }) => post.title.toLowerCase().includes(query.toLowerCase()));
    console.log("Filtered posts:",this.filteredPosts)
  }
  onPostSelect(event: any) :void {
    const postId = event.target.value;
    this.router.navigate(['/post', postId]);
  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const cityId = params['cityId'];
        this.city = this.citiesService.getCityById(cityId)

        // Get weather data for the city
        this.weatherService.getWeather(this.city.name).subscribe(data => {
          this.weatherData = data;
          console.log('Weather data:', this.weatherData)
        })
        
        console.log("All posts for city:",this.city.posts)
        this.filteredPosts = [...this.city.posts];
      })
  }
}
