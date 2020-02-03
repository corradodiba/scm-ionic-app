import { Component, OnInit } from '@angular/core';
import { NavigationItem } from '../models/NavigationItem.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabs: NavigationItem[] = [
    {
      title: 'dashboard',
      url: '/home',
      icon: 'apps',
    },
    {
      title: 'profile',
      url: '/home',
      icon: 'contact',
    },
  ];
  constructor() {}
}
