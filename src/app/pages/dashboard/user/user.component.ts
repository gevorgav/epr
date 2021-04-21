import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {UserModel} from '../../../shared/model/user.model';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: UserModel[];
  dataSource = new MatTableDataSource(this.users);
  displayedColumns = ['name', 'email', 'phone'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.initUsers();
  }

  private initUsers() {
    this.userService.getAuthUsers()
    .then(
      res => {
        this.users = res;
        this.dataSource = new MatTableDataSource(this.users);
      }
    )
  }

  applyFilter($event) {
    this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
  }

}
