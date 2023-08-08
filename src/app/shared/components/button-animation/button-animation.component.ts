import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-animation',
  templateUrl: './button-animation.component.html',
  styleUrls: ['./button-animation.component.scss']
})
export class ButtonAnimationComponent {
  @Input() label: string = '';
  @Input() route: string = '';
  @Input() width: string = '';

}
