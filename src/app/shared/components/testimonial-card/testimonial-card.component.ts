import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent {
  @Input() recensione: string = '';
  @Input() nome: string = '';
  @Input() cognome: string = '';
  @Input() image: string = '';
}
