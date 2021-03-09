import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { GetUserService } from "../fetch-api-data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /**
   * Called upon creating instance of class
   * @param fetchApiDataUser 
   * @param snackBar 
   * @param router 
   */
  constructor(
    public fetchApiDataUser: GetUserService,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Function to navigate to user's profile component
   */
  openProfile(): void {
    this.fetchApiDataUser.getUser().subscribe((result) => {
        localStorage.getItem('token')
        const username = localStorage.getItem('user');
        this.snackBar.open(`Welcome to your profile, ${username}!`, 'OK', {
        duration: 5000
        });
        this.router.navigate(['user']);
    }, (result) => {
        this.snackBar.open(result, 'OK', {
        duration: 5000
        });
    });
}

  /**
   * function to clear localStorage
   */
  logoutUser(): void {
    localStorage.clear();
  }

}
