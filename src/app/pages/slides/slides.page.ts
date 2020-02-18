import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  isVisible = true;
  constructor() {}

  ngOnInit() {}

  onCloseSlides() {
    this.isVisible = false;
    localStorage.setItem('session', '2');
  }
}
