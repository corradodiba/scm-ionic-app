import { Component, OnInit } from '@angular/core';

import FabIcon from '../../models/FabIcon.model';

@Component({
  selector: 'app-fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss'],
})
export class FabButtonComponent implements OnInit {
  buttons: FabIcon[] = [
    {
      name: 'light',
      icon: 'add',
      action: this.add(), // TODO: controllare il tipo di ritorno
    },
    {
      name: 'primary',
      icon: 'arrow-up',
      // action: 'update',
    },
    {
      name: 'danger',
      icon: 'close',
      // action: 'delete',
    },
  ];

  constructor() {}

  ngOnInit() {}

  add() {
    console.log(`sono nell'add`);
  }

  delete() {
    console.log(`sono nel delete`);
  }

  update() {
    console.log(`sono nell'update`);
  }
}
