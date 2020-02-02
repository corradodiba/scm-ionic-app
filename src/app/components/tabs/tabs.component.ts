import { Component, OnInit, Input } from '@angular/core';
import { Item } from './../../models/Tabs.model';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: Item[];
  //tot: any = 2;

  constructor() {}

  ngOnInit() {
    console.log(this.tabs);
  }
  // totTabs() {
  //   if (this.tabs > this.tot) {
  //     return 2;
  //   }
  //}
}
