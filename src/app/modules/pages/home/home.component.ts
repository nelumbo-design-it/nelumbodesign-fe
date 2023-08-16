import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public testimonials = [
    {
      recensione: 'Un team eccezionale! Hanno trasformato la mia idea in un sito web funzionale e accattivante.',
      nome: 'Piero',
      cognome: 'Rossi',
      image: '../assets/images/testimonial/Piero_rossi.jpg'
    },
    {
      recensione: 'Grazie alla loro strategia SEO, ho visto un aumento significativo del traffico sul mio sito.',
      nome: 'Luca',
      cognome: 'Bianchi',
      image: '../assets/images/testimonial/Luca_bianchi.jpg'
    },
    {
      recensione: 'Dall\'inizio alla fine, l\'esperienza è stata impeccabile. Il risultato finale parla da solo: un design pulito, funzionale e user-friendly. Non avrei potuto chiedere di meglio',
      nome: 'Giulia',
      cognome: 'Verdi',
      image: '../assets/images/testimonial/Giulia_verdi.jpg'
    },
    {
      recensione: 'Sono rimasta colpita dalla loro attenzione ai dettagli e dalla capacità di capire esattamente ciò di cui avevo bisogno. Un vero piacere lavorare con loro!',
      nome: 'Francesca',
      cognome: 'Neri',
      image: '../assets/images/testimonial/Francesca_neri.jpg'
    },
  ];

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit() {
    this.titleService.setTitle('Homepage | Nelumbo Agency');
    this.metaService.addTag({ name: 'description', content: 'Questa è la descrizione della mia pagina.' });
  }
  
}
