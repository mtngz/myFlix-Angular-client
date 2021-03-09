import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AddFavoriteMovieService, GetAllMoviesService } from "../fetch-api-data.service";
import { MovieDirectorComponent } from '../movie-director/movie-director.component';
import { MoviePhaseComponent } from "../movie-phase/movie-phase.component";
import { MovieDetailComponent } from "../movie-detail/movie-detail.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  /**
   * Initiate empty array 'movies' for getMovies() call
   */
  movies: any[] = [];
  /**
   * Called upon creating instance of class
   * @param fetchApiData 
   * @param fetchApiDataAddFav 
   * @param dialog 
   * @param snackBar 
   */
  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiDataAddFav: AddFavoriteMovieService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
    ) { }

ngOnInit(): void {
  /**
   * Call on page load to get data of all movies from database
   */
  this.getMovies();
}

/**
 * Retrieves all movies from database
 * @returns this.movies
 */
getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  /**
   * Function adds a movie to user's FavoriteMovies array
   * @param id 
   */
  addFavoriteMovie(id: string): void {
    this.fetchApiDataAddFav.addFavoriteMovie(id).subscribe((resp: any) => {
      console.log(resp);
      this.snackBar.open('Added to Favorite Movies.', 'OK', {
        duration: 2000
      });
    });
  }

  /**
   * Funtion to open a dialog containing details about the movie
   * @param Title type: string - Movie Title
   * @param Description type: string - Movie Description
   * @param Release txpe: string - Movie Release
   * @returns MovieDetailComponent in dialog with title, description and release of the movie
   */
  openDetailDialog(
    Title: string,
    Description: string,
    Release: string
  ): void {
    this.dialog.open(MovieDetailComponent, {
      data: { Title, Description, Release },
      width: '600px',
      height: '250px',
    });
  }

  /**
   * Funtion to open a dialog containing details about the phase
   * @param Name type: string - PHase Name
   * @param Description type: string - Phase Description
   * @returns MoviePhaseComponent in dialog with name and description of the phase
   */
  openPhaseDialog(
    Name: string,
    Description: string
  ): void {
    this.dialog.open(MoviePhaseComponent, {
      data: { Name, Description },
      width: '600px',
      height: '250px',
    });
  }

  /**
   * Funtion to open a dialog containing details about the director
   * @param Name type: string - Director Name
   * @param Bio type: string - Director Bio
   * @param Birth type: string - Year, director was born
   * @param Death type: string - Year, director died
   * @returns MovieDirectorComponent in dialog with name, bio, birth and death of the director
   */
  openDirectorDialog(
    Name: string,
    Bio: string,
    Birth: string,
    Death: string
  ): void {
    this.dialog.open(MovieDirectorComponent, {
      data: { Name, Bio, Birth, Death },
      width: '600px',
      height: '250px',
    });
  }
}
