import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftsAlertComponent } from './aircrafts-alert.component';

describe('AircraftsAlertComponent', () => {
  let component: AircraftsAlertComponent;
  let fixture: ComponentFixture<AircraftsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftsAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
