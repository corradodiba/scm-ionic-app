import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  @Input() title?: string;
  @Input() isToBack?: boolean;
  text: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
