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
  movies: any[] = [];
  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiDataAddFav: AddFavoriteMovieService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
    ) { }

ngOnInit(): void {
  this.getMovies();
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  addFavoriteMovie(id: string): void {
    this.fetchApiDataAddFav.addFavoriteMovie(id).subscribe((resp: any) => {
      console.log(resp);
      this.snackBar.open('Added to Favorite Movies.', 'OK', {
        duration: 2000
      });
    });
  }

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
