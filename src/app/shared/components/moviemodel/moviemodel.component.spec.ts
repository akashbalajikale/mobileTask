import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemodelComponent } from './moviemodel.component';

describe('MoviemodelComponent', () => {
  let component: MoviemodelComponent;
  let fixture: ComponentFixture<MoviemodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviemodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviemodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
