import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  @ViewChild('slidesRef') slide: IonSlides;

  constructor() { }

  ngOnInit() {
  }

  nextSlide() {
    this.slide.slideNext()
  }

}
