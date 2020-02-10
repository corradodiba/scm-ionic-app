import { Component } from '@angular/core';
import { NavigationItem } from 'src/app/models/NavigationItem.model';

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
      guest: true,
    },
    {
      title: 'courses',
      url: '/courses',
      icon: 'contact',
      guest: true,
    },
    {
      title: 'users',
      url: '/users',
      icon: 'contact',
      guest: true,
    },
    {
      title: 'profile',
      url: '/profile',
      icon: 'contact',
      guest: true,
    },
  ];
  constructor() {}
}
