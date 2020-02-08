import { Component } from '@angular/core';

import { NavigationItem } from '../../models/NavigationItem.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabs: NavigationItem[] = [
    {
      title: 'dashboard',
      url: '/dashboard',
      icon: 'apps',
    },
    {
      title: 'courses',
      url: '/courses',
      icon: 'contact',
    },
    {
      title: 'users',
      url: '/users',
      icon: 'contact',
    },
    {
      title: 'profile',
      url: '/profile',
      icon: 'contact',
    },
  ];

  constructor() {}
}