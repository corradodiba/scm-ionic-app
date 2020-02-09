import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoCard } from 'src/app/models/InfoCard.model';
import { IonSlide } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlide;

  cards: InfoCard[] = [
    {
      title: 'Course',
      icon: 'school',
      counter: 3,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
