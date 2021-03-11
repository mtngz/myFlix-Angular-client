import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GetUserService, EditUserService, DeleteUserService } from "../fetch-api-data.service";
import { DeleteUserComponent } from "../delete-user/delete-user.component";

@Component({
  selector: 'app-update-expansion',
  templateUrl: './update-expansion.component.html',
  styleUrls: ['./update-expansion.component.scss']
})
export class UpdateExpansionComponent {
  panelOpenState = false;
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' }

  /**
   * Called when creating instance of class
   * @param fetchApiDataUser 
   * @param fetchApiDataEdit 
   * @param fetchApiDataDelUser 
   * @param dialog 
   * @param snackBar 
   */
  constructor(
    public fetchApiDataUser: GetUserService,
    public fetchApiDataEdit: EditUserService,
    public fetchApiDataDelUser: DeleteUserService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  /**
   * Function to edit a user's information
   */
  editUserInfo(): void {
    this.fetchApiDataEdit.editUser(this.userData).subscribe((result) => {
      console.log(result);
      this.snackBar.open('Profile updated.', 'OK', {
        duration: 3000,
        verticalPosition: 'top'
      });
    },
    (result) => {
      console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 5000
      });
    });
    localStorage.clear();
  }

  /**
  * Dialog to open delete-user component
  */
  openDeleteUserDialog(): void {
    this.dialog.open(DeleteUserComponent, {});
  }



}
