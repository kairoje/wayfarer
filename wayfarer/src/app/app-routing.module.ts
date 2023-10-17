import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './landing-page/hero/hero.component';
import { CityDetailsComponent } from './home-page/city-details/city-details.component';
import { CitiesComponent } from './home-page/cities/cities.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'home', 
    component: CitiesComponent
  },
  {
    path: 'home/:cityId', 
    component: CityDetailsComponent
  },
  {
    path: 'post/:id', 
    component: PostDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
