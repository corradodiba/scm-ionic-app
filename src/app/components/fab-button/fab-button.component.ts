import { Component, OnInit, Input } from '@angular/core';

import FabIcon from '../../models/FabIcon.model';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
})
export class FabButtonComponent implements OnInit {
  @Input() buttons: FabIcon[];

  constructor() {}

  ngOnInit() {}
}
