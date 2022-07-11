import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private UserService: UserService) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
      panelClass: 'dialog-container'
    });
  }

  get logged(): boolean {
    return this.UserService.logged
  }

  logOut(){
    this.UserService.logOut();
  }

}
