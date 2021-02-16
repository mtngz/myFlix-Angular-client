import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { GetAllMoviesService } from "../fetch-api-data.service";
import { MovieDirectorComponent } from '../movie-director/movie-director.component';
import { MoviePhaseComponent } from "../movie-phase/movie-phase.component";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  constructor(
    public fetchApiData: GetAllMoviesService,
    public dialog: MatDialog
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
