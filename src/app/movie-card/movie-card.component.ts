import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { GetAllMoviesService } from "../fetch-api-data.service";
import { MovieDirectorComponent } from '../movie-director/movie-director.component';

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
