import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftsNavbarComponent } from './aircrafts-navbar.component';

describe('AircraftsNavbarComponent', () => {
  let component: AircraftsNavbarComponent;
  let fixture: ComponentFixture<AircraftsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftsNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
