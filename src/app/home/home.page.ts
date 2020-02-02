import { Component } from '@angular/core';
import { Tab } from '../models/Tab.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabs: Tab[] = [
    {
      title: 'dashboard',
      url: '/dashboard',
      icon: 'apps',
    },
    {
      title: 'profile',
      url: '/profile',
      icon: 'contact',
    },
  ];
}
