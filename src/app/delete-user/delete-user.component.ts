import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteUserService } from "../fetch-api-data.service";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent {

  /**
   * Called when creating instance of class
   * @param dialog 
   * @param fetchApiDataDelUser 
   */
  constructor(
    public dialog: MatDialog,
    public fetchApiDataDelUser: DeleteUserService
    ) { }

    /**
     * Function that opens a dialog with the delete-user component
     */
  openDeleteUserDialog() {
    const dialogRef = this.dialog.open(DeleteUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /**
   * Function to delete a user profile from the database
   */
  deleteUserProfile(): void {
    this.fetchApiDataDelUser.deleteUser().subscribe((resp: any) => {
      console.log(resp);
    });
  }

  /**
   * Funtion to clear the localStorage
   */
  logoutUser(): void {
    localStorage.clear();
  }

  /**
   * Function calling the two functions
   * deleteUserProfile() and logoutUser()
   */
  deleteButton() {
    this.deleteUserProfile()
    this.logoutUser()
  }
}

