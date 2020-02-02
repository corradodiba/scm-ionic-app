import { Component } from '@angular/core';
import { Item } from '../models/Tabs.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tabs: Item[] = [
    {
      title: 'dashboard',
      url: './dashboard',
      icon: 'apps',
    },
    {
      title: 'profile',
      url: './profile',
      icon: 'contact',
    }
  ];
}
