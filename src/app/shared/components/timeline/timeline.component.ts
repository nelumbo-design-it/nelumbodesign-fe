import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() isLast: boolean = false;
  @Input() isFirst: boolean = false;
  @Input() isEven: boolean = false;
  @Input() dataTimeline: any;
}
