import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GetUserService, EditUserService, DeleteUserService, GetAllMoviesService, GetFavoriteMoviesService, DeleteFavoriteMovieService } from "../fetch-api-data.service";
import { DeleteUserComponent } from "../delete-user/delete-user.component";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' }

  movies: any[] = [];
  favoriteMovies: any[] = [];
  favoriteMoviesIDs: any[] = [];

  constructor(
    public fetchApiDataUser: GetUserService,
    public fetchApiDataEdit: EditUserService,
    public fetchApiDataDelUser: DeleteUserService,
    public fetchApiDataMov: GetAllMoviesService,
    public fetchApiDataFav: GetFavoriteMoviesService,
    public fetchApiDataDelFav: DeleteFavoriteMovieService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFavoriteMovies();
  }

  getFavoriteMovies(): void {
    this.fetchApiDataMov.getAllMovies().subscribe((resp: any) => {
      this.fetchApiDataFav.getFavoriteMovies().subscribe((resp: any) => {
        this.favoriteMoviesIDs = resp.Favorites;
        console.log(this.favoriteMoviesIDs);
        this.favoriteMovies = this.movies.filter((movie) => this.favoriteMoviesIDs.includes(movie._id));
        console.log(this.favoriteMovies);
      });
      this.movies = resp;
      console.log(this.movies);
    });
  }

  deleteFavoriteMovie(id: string): void {
    this.fetchApiDataDelFav.deleteFavoriteMovie(id).subscribe((resp: any) => {
      console.log(resp);
      this.snackBar.open('Movie has been removed from Favorites.', 'OK', {
        duration: 5000
      });
      setTimeout(() => this.router.navigate(['user'])
        .then(() => {
          window.location.reload();
        }), 1500
      );
    });
  }

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
