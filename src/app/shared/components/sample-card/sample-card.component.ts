import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample-card',
  templateUrl: './sample-card.component.html',
  styleUrls: ['./sample-card.component.scss']
})
export class SampleCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageBC: string = 'https://gaaga.wpengine.com/wp-content/uploads/2023/06/home-portfolio-2.jpg';
  @Input() isFullHover: boolean = true;
}
