import { Component, OnInit, Input } from '@angular/core';

import Course from 'src/app/models/Course.model';
import User from 'src/app/models/User.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() items: Course[] | User[] = [];
  @Input() isInfiniteScrollable: boolean;
  itemsListView = [];

  constructor() {}

  async doInfinite(event): Promise<Course | User> {
    try {
      return new Promise(resolve => {
        setTimeout(() => {
          for (const item of this.items) {
            this.itemsListView.push(item);
          }
          event.target.complete();
          resolve();
        }, 1000);
      });
    } catch (err) {
      throw err;
    }
  }
}
