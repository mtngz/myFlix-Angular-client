import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpansionComponent } from './update-expansion.component';

describe('UpdateExpansionComponent', () => {
  let component: UpdateExpansionComponent;
  let fixture: ComponentFixture<UpdateExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
