import { TestBed } from '@angular/core/testing';

import { AlertGuard } from './alert.guard';

describe('AlertGuard', () => {
  let guard: AlertGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlertGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
