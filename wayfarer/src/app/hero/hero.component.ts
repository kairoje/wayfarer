import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  images = [
    { name: 'travel_1.png', caption: 'Travel_1'},
    { name: 'travel_2.png', caption: 'Travel_2'},
    { name: 'travel_3.png', caption: 'Travel_3'},
    { name: 'travel_4.png', caption: 'Travel_4'},
  ];

  constructor() {}

  ngOnInit(): void {
    console.log("hero component initialized")
  }

}
