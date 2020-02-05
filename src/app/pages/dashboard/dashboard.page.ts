import { Component, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/models/InfoCard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
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
