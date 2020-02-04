import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from 'src/app/providers/users.service';

import User from 'src/app/models/User.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {
  id: string;
  user: User;

  constructor(private route: ActivatedRoute, private service: UsersService) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.user = await this.service.getUserById(this.id);
  }
}
