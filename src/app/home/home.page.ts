import { Component } from '@angular/core';

import { NavigationItem } from '../models/NavigationItem.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pages: NavigationItem[] = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Signup',
      url: '/signup',
      icon: 'log-in',
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in',
    },
  ];

  tabs: NavigationItem[] = [
    {
      title: 'dashboard',
      url: '/dashboard',
      icon: 'apps',
    },
    {
      title: 'my profile',
      url: '/profile',
      icon: 'contact',
    },
  ];

  constructor() {}
}
