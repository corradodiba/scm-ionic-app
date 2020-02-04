import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';

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
      url: '/home',
      icon: 'log-in',
    },
    {
      title: 'Login',
      url: '/home',
      icon: 'log-in',
    }
  ];
  
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
