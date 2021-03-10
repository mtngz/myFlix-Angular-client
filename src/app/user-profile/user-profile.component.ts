import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GetUserService, EditUserService, DeleteUserService, GetAllMoviesService, GetFavoriteMoviesService, DeleteFavoriteMovieService } from "../fetch-api-data.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  /**
   * Declaration of variables used in functions below
   */
  movies: any[] = [];
  favoriteMovies: any[] = [];
  favoriteMoviesIDs: any[] = [];

  /**
   * Called upon creating instance of class
   * @param fetchApiDataMov 
   * @param fetchApiDataFav 
   * @param fetchApiDataDelFav 
   * @param dialog 
   * @param snackBar 
   * @param router 
   */
  constructor(
    public fetchApiDataMov: GetAllMoviesService,
    public fetchApiDataFav: GetFavoriteMoviesService,
    public fetchApiDataDelFav: DeleteFavoriteMovieService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    /**
     * Called upon page load to get data about user's favorite movies
     * If user's favoriteMovies array is empty, 'No favs yet' is shown,
     * if there is any ID in the array, data about these movies are returned
     */
    this.getFavoriteMovies();
  }

  /**
   * Retrieves all movies form the database. Checks user object to see if the user's favoriteMovies
   * array has any IDs. Filters the movies with favoriteMoviesID having an ID and passing this to favoriteMovies
   */
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

  /**
   * Function removes a movie from user's favorite movies list in database and reloads the DOM
   * @param id type: string - ID of movie to be deleted from user's favorites
   */
  deleteFavoriteMovie(id: string): void {
    this.fetchApiDataDelFav.deleteFavoriteMovie(id).subscribe((resp: any) => {
      console.log(resp);
      this.snackBar.open('Movie has been removed from Favorites.', 'OK', {
        duration: 5000
      });
      this.getFavoriteMovies();
    });
  }

}
