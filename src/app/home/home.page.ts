import { Component } from '@angular/core';
import { NavigationItem } from '../models/NavigationItem.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public pages: NavigationItem[] = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Signup',
      url: '/home',
      icon: 'log-in',
    },
    {
      title: 'Login',
      url: '/home',
      icon: 'log-in',
    },
  ];
  constructor() {}
}
