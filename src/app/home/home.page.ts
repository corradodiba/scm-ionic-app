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
      guest: false,
    },
    {
      title: 'Signup',
      url: '/signup',
      icon: 'log-in',
      guest: true,
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'log-in',
      guest: true,
    },
    {
      title: 'Logout',
      url: '/home',
      icon: 'log-in',
      guest: false,
    },
  ];

  tabs: NavigationItem[] = [
    {
      title: 'dashboard',
      url: '/dashboard',
      icon: 'apps',
      guest: true,
    },
    {
      title: 'my profile',
      url: '/profile',
      icon: 'contact',
      guest: true,
    },
  ];

  constructor() {}
}
