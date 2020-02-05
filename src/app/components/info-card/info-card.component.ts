import { Component, Input } from '@angular/core';
import { InfoCard } from '../../models/InfoCard.model';
@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() cards: InfoCard;

  constructor() {}
}
