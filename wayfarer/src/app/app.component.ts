import { Component } from '@angular/core';
import { MAPBOX_API_KEY } from 'ngx-mapbox-gl';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ {
    provide: MAPBOX_API_KEY,
    useValue: 'pk.eyJ1IjoiYXNobGV5c2hha2lyIiwiYSI6ImNsbnRlYnZ4bTAybTYyc254ZnI2anhxM3UifQ.NuPiSSZrBOIL7EyQJvxdmQ'
  }]
})
export class AppComponent {
  title = 'wayfarer';
}

