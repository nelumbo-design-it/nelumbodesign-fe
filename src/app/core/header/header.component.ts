import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  ngOnInit(): void {
    this.animeJS();
  }
  animeJS() {
    const pathEls: any = document.querySelectorAll('path');
    for (let i = 0; i < pathEls.length; i++) {
      const pathEl: any = pathEls[i];
      const offset: any = anime.setDashoffset(pathEl);
      pathEl.setAttribute('stroke-dashoffset', offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 3000),
        delay: anime.random(0, 2000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true,
      });
    }
  }
}
