import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-card',
  templateUrl: './general-card.component.html',
  styleUrls: ['./general-card.component.scss']
})
export class GeneralCardComponent {
  @Input() dataCard: any;
}
