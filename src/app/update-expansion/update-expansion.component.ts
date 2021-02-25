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

  constructor(
    public fetchApiDataUser: GetUserService,
    public fetchApiDataEdit: EditUserService,
    public fetchApiDataDelUser: DeleteUserService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

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
  }

  openDeleteUserDialog(): void {
    this.dialog.open(DeleteUserComponent, {});
  }



}
