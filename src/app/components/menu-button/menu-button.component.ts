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
  color: string;
  text: string;
  isHome = false;
  lang = 'eng';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.title === 'Home') this.isHome = true;
    if (this.lang === 'ita') {
      this.color = 'success';
      this.text = 'Italiano';
    } else {
      this.color = 'danger';
      this.text = 'English';
    }
  }
  changeLanguage() {
    this.lang = this.lang === 'ita' ? 'eng' : 'ita';
  }
}
