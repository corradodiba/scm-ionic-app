import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../models/NavigationItem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() pages: NavigationItem[];

  constructor() {}
}
