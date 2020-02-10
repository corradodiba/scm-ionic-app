import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavigationItem } from '../../models/NavigationItem.model';
import { AuthService } from 'src/app/providers/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  @Input() pages: NavigationItem[];
  private authListenerSubs = new Subscription();
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.isAuthenticated = this.authService.isAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  show(page: NavigationItem) {
    if (this.isAuthenticated) {
      return !page.guest;
    } else {
      return page.guest;
    }
  }
  logout(page: NavigationItem) {
    if (page.title === 'Logout') {
      this.authService.logoutUser();
    }
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
