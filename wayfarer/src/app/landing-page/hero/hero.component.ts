import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic/topics.service';




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

  topics: any[] = [];


  constructor(private topicServce: TopicService) {}

  // topicIndex: string|null = '';


  ngOnInit(): void {
    this.topics = this.topicServce.getTopics()
  }

}
