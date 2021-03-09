import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  /**
   * Called upon creating instance of class
   * Injects movie title, description and release data into class from movie-card component
   * @param data type: object with strings for Title, Description and Release
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Title: string;
      Description: string;
      Release: string;
    }
  ) {}
}
