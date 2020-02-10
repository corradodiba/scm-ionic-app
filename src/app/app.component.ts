import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationItem } from './models/NavigationItem.model';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.autoConfigAuthUser();
    });
  }
}
