import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationItem } from 'src/app/models/NavigationItem.model';
import { AuthService } from 'src/app/providers/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isFirstSession = Number(localStorage.getItem('session')) === 1;
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
