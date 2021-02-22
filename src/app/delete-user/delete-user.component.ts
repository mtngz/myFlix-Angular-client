import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteUserService } from "../fetch-api-data.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {

  constructor(
    public dialog: MatDialog,
    public fetchApiDataDelUser: DeleteUserService
    ) { }

  openDeleteUserDialog() {
    const dialogRef = this.dialog.open(DeleteUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteUserProfile(): void {
    this.fetchApiDataDelUser.deleteUser().subscribe((resp: any) => {
      console.log(resp);
    });
  }
  logoutUser(): void {
    localStorage.clear();
  }

  deleteButton() {
    this.deleteUserProfile()
    this.logoutUser()
  }
}

