import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-movie-phase',
  templateUrl: './movie-phase.component.html',
  styleUrls: ['./movie-phase.component.scss']
})
export class MoviePhaseComponent {
  /**
   * Called upn creating instance of class
   * Injects phase name and description data into class from movie-card component
   * @param data type: object with strings for Name and Description
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Description: string;
    }
  ) {}
}
