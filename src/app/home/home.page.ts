import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  artists = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]

  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    canteredSlides: true,
    speed: 400
  }

  constructor(private router: Router) {}
  intro(){
    this.router.navigateByUrl("/intro")
  }

}
