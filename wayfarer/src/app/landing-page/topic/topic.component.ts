import { Component, Input } from '@angular/core';
import { TopicService } from './topics.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {

  @Input() topic: any;

}
