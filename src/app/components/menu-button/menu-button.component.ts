import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent {
  @Input() title?: string;
  @Input() isToBack?: boolean;
  color: string;
  text: string;
  isHome = false;
  constructor() {}
}
