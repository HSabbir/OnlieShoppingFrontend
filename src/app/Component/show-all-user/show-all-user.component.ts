import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UserServiceService} from '../../services/user-service/user-service.service';
import {AuthServiceService} from '../../services/auth-service/auth-service.service';

@Component({
  selector: 'app-show-all-user',
  templateUrl: './show-all-user.component.html',
  styleUrls: ['./show-all-user.component.css']
})
export class ShowAllUserComponent implements OnInit {
  users: any;
  id: any;
  displayedColumns: string[] = ['UserName', 'Name', 'Role', 'actions'];
  constructor(private userService: UserServiceService, private authServie: AuthServiceService) {
    this.userService.getAllUser().subscribe(data => {
      this.users = new MatTableDataSource(data.data) ;
    });
    this.id = this.authServie.getUserInfo().nameid;
  }
  deleteUsers(id): void {
    this.userService.delete(id).subscribe(data => {
      this.users = new MatTableDataSource(data.data);
    });
  }
  changeRole(user): void {
    this.userService.changeRole(user);
  }

  ngOnInit(): void {
  }

}
