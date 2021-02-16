import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-movie-phase',
  templateUrl: './movie-phase.component.html',
  styleUrls: ['./movie-phase.component.scss']
})
export class MoviePhaseComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Description: string;
    }
  ) {}
}
