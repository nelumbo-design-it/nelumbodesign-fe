import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.scss']
})
export class TitleSectionComponent {
  @Input() text1: string = '';
  @Input() text2: string = '';
}
