import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public appPages = [
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

  ngOnInit() {}
}
