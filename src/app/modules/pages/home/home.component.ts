import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit() {
    this.titleService.setTitle('Homepage | Nelumbo Agency');
    this.metaService.addTag({ name: 'description', content: 'Questa è la descrizione della mia pagina.' });
  }
  
}
