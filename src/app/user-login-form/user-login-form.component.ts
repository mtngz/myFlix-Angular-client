import { Component, OnInit, Input } from '@angular/core';
import { UserLoginService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: ''};

    /**
     * called upon creating instance of class
     * @param fetchApiData 
     * @param dialogRef 
     * @param snackBar 
     * @param router 
     */
    constructor(
      public fetchApiData: UserLoginService,
      public dialogRef: MatDialogRef<UserLoginFormComponent>,
      public snackBar: MatSnackBar,
      private router: Router
    ) {}

    ngOnInit(): void {
    }

   // This is function responsible for sending the form inputes to the backend
    /**
    * function sends user login credentials to server which sends back a token if valid
    * "user" and "token" set to localStorage for utilization in future api calls
    */
    loginUser(): void {
      this.fetchApiData.userLogin(this.userData).subscribe((result) => {
              // successful user login
      this.dialogRef.close(); // This will close the modal on success!
      console.log(result);
      localStorage.setItem('user', result.user.Username);
      localStorage.setItem('token', result.token);
      this.snackBar.open('user loged-in!', 'OK', {
        duration: 2000
      });
      this.router.navigate(['movies']);
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 200
      });
    });
  }

}