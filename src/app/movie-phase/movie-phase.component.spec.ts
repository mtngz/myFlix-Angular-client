import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePhaseComponent } from './movie-phase.component';

describe('MoviePhaseComponent', () => {
  let component: MoviePhaseComponent;
  let fixture: ComponentFixture<MoviePhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
