import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user.service';
import {User} from '../../../core/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.selectedUser = users.length > 0 ? users[0] : null;
      this.userService.setSelectedUser = this.selectedUser;
    });
  }

  setSelectedUser() {
    this.userService.setSelectedUser = this.selectedUser;
  }

}
