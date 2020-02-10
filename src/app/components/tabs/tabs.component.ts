import { Component, OnInit, Input } from '@angular/core';
import { NavigationItem } from '../../models/NavigationItem.model';
import { AuthService } from 'src/app/providers/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: NavigationItem[];
  private authListenerSubs = new Subscription();
  isAuthenticated = false;
  constructor(private authService: AuthService) {}

  async ngOnInit() {
    if (this.tabs.length > 8) {
      this.tabs.length = 8;
    }
    this.isAuthenticated = this.authService.isAuthenticated;
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  onLogout() {
    this.authService.logoutUser();
  }
}
