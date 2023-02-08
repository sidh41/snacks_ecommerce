import { Component, ViewEncapsulation  } from '@angular/core';
import SwiperCore, { EffectCards } from 'swiper';
SwiperCore.use([EffectCards]);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage {

  segment: string;
  constructor() { 
      this.segment = "1";
    }

}
