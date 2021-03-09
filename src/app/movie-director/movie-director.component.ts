import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-movie-director',
  templateUrl: './movie-director.component.html',
  styleUrls: ['./movie-director.component.scss']
})

export class MovieDirectorComponent {
  /**
   * Called upon creating instance of class
   * injects director name, bio, birth and death data into class from movie-card component
   * @param data type: object with strings for Name, Bio, Birth and Death
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Bio: string;
      Birth: string;
      Death: string;
    }
  ) {}
}
