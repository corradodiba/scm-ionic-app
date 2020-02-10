import { Component, OnInit, Input } from '@angular/core';
import { NavigationItem } from '../../models/NavigationItem.model';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: NavigationItem[];
  isAuthenticated = false;
  constructor() {}

  async ngOnInit() {
    if (this.tabs.length > 8) {
      this.tabs.length = 8;
    }
  }
}
